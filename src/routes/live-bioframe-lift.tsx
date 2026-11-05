import { useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Loader2 } from "lucide-react";
import academyLogo from "@/assets/lecler-academy-logo.png";
import cassiaPortrait from "@/assets/cassia-quiz-white.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  bioframeRegistrationSchema,
  collectBioframeAttribution,
} from "@/lib/bioframe-registration";
import { registerBioframe } from "@/lib/bioframe-registration.functions";
import { SITE_URL } from "@/lib/site";

const pageTitle = "Live Bioframe Lift · 30/11 às 20h | L'ECLER Academy";
const pageDescription =
  "Inscreva-se na live Bioframe Lift com a Dra. Cássia Blasques, em parceria com Vida Bela. 30 de novembro de 2026, às 20h, horário de Brasília.";

export const Route = createFileRoute("/live-bioframe-lift")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/live-bioframe-lift` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/live-bioframe-lift` }],
  }),
  component: BioframeLivePage,
});

type RegistrationFields = {
  name: string;
  email: string;
  whatsapp: string;
  consent: boolean;
  website: string;
};

type FieldErrors = Partial<Record<keyof RegistrationFields, string>>;

function BioframeLivePage() {
  const submitRegistration = useServerFn(registerBioframe);
  const [fields, setFields] = useState<RegistrationFields>({
    name: "",
    email: "",
    whatsapp: "",
    consent: false,
    website: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [confirmation, setConfirmation] = useState<{ duplicate: boolean } | null>(null);
  const attemptRef = useRef<{ identity: string; requestId: string } | null>(null);
  const submittingRef = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  function updateField<Key extends keyof RegistrationFields>(
    key: Key,
    value: RegistrationFields[Key],
  ) {
    setFields((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
    setSubmissionError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || confirmation) return;

    const parsed = bioframeRegistrationSchema.safeParse(fields);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof RegistrationFields;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setFieldErrors(nextErrors);
      if (nextErrors.website)
        setSubmissionError("Não foi possível validar o cadastro. Tente novamente.");
      const firstInvalidField = ["name", "email", "whatsapp", "consent"].find(
        (field) => nextErrors[field as keyof RegistrationFields],
      );
      if (firstInvalidField) document.getElementById(`bioframe-${firstInvalidField}`)?.focus();
      return;
    }

    const identity = JSON.stringify([
      parsed.data.name.trim().toLowerCase(),
      parsed.data.email.trim().toLowerCase(),
      parsed.data.whatsapp.replace(/\D/g, ""),
    ]);
    if (attemptRef.current?.identity !== identity) {
      attemptRef.current = { identity, requestId: crypto.randomUUID() };
    }

    submittingRef.current = true;
    setSubmitting(true);
    setFieldErrors({});
    setSubmissionError("");

    try {
      const result = await submitRegistration({
        data: {
          ...parsed.data,
          requestId: attemptRef.current.requestId,
          attribution: collectBioframeAttribution(),
        },
      });
      if (result.confirmed !== true || typeof result.duplicate !== "boolean") {
        throw new Error("Registration confirmation unavailable");
      }
      setConfirmation({ duplicate: result.duplicate });
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setSubmissionError(
        "Não foi possível confirmar sua inscrição agora. Seus dados foram mantidos. Tente novamente.",
      );
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#faf7f1] text-[#392b28]">
      <a
        href="#inscricao"
        className="sr-only fixed left-4 top-4 z-50 rounded-md bg-white px-4 py-3 text-sm focus:not-sr-only"
      >
        Ir para a inscrição
      </a>

      <header className="border-b border-[#d8cbb9]/60 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a
            href="/academy"
            aria-label="L'ECLER Academy"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#694332]"
          >
            <img
              src={academyLogo}
              alt="L'ECLER Academy"
              width={942}
              height={923}
              className="h-[72px] w-auto sm:h-20"
            />
          </a>
          <div className="border-l border-[#d8cbb9] pl-5 text-right sm:pl-8">
            <p className="text-[11px] leading-5 tracking-[0.08em] text-[#74675c]">
              EM PARCERIA COM
            </p>
            <p className="text-lg font-medium tracking-tight sm:text-xl">Vida Bela</p>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-9 px-5 py-9 sm:px-8 sm:py-12 lg:grid-cols-[1.12fr_1fr] lg:items-start lg:gap-14 lg:py-14">
        <section aria-labelledby="bioframe-title">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#806538]">
            <span aria-hidden="true" className="h-px w-8 bg-[#b39d70]" />
            Live · 30 de novembro
          </p>
          <h1
            id="bioframe-title"
            className="font-display text-[clamp(3.5rem,7.3vw,5.6rem)] font-normal leading-[1.04] tracking-[-0.045em]"
          >
            Bioframe <span className="italic text-[#846337]">Lift</span>
          </h1>
          <p className="mt-5 max-w-[29rem] text-lg leading-[1.65] text-[#5b4c41] sm:text-xl">
            Protocolo de associação de{" "}
            <strong className="font-semibold text-[#392b28]">FIOS MOLDADOS e LISOS</strong> de
            P(LA/CL)
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#d8cbb9] py-4">
            <div className="flex items-center gap-2.5">
              <CalendarDays aria-hidden="true" className="size-[18px] text-[#806538]" />
              <time dateTime="2026-11-30T20:00:00-03:00" className="text-sm font-semibold">
                30/11/2026
              </time>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock3 aria-hidden="true" className="size-[18px] text-[#806538]" />
              <p className="text-sm">
                <strong className="font-semibold">20h</strong>{" "}
                <span className="text-[#6b5d50]">· Horário de Brasília</span>
              </p>
            </div>
          </div>

          <figure className="mt-7 grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-end gap-5 sm:gap-7">
            <div className="overflow-hidden rounded-t-[5.5rem] bg-[#e7e9e7]">
              <img
                src={cassiaPortrait}
                alt="Dra. Cássia Blasques"
                width={1400}
                height={2100}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover object-[center_25%]"
              />
            </div>
            <figcaption className="pb-3 sm:pb-5">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#806538]">
                Com
              </p>
              <p className="font-display text-[1.55rem] leading-[1.2] sm:text-[1.9rem]">
                Dra. Cássia
                <br />
                Blasques
              </p>
              <div className="mt-5 border-t border-[#d8cbb9] pt-4 text-xs leading-5 text-[#6b5d50] sm:text-sm sm:leading-6">
                <p className="mb-1 font-semibold text-[#392b28]">Transmissão no YouTube</p>
                <p>
                  Lecler Academy
                  <br />e Vida Bela
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        <section
          id="inscricao"
          aria-labelledby="registration-title"
          className="scroll-mt-6 border-t-2 border-[#b39d70] bg-white px-5 py-7 shadow-[0_12px_45px_-30px_rgba(68,43,28,0.28)] sm:px-8 sm:py-8 lg:mt-1"
        >
          {confirmation ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="rounded-sm py-5 outline-none focus-visible:ring-2 focus-visible:ring-[#b39d70]"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mb-6 size-10 stroke-[1.4] text-[#806538]"
              />
              <h2 id="registration-title" className="font-display text-3xl leading-tight">
                {confirmation.duplicate
                  ? "Sua inscrição já está confirmada."
                  : "Inscrição confirmada."}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#6b5d50]">
                Seu cadastro para a live Bioframe Lift está registrado.
              </p>
              <div className="my-7 border-y border-[#e1d8cb] py-5">
                <p className="font-semibold">30 de novembro de 2026, às 20h</p>
                <p className="mt-1 text-sm text-[#6b5d50]">Horário de Brasília</p>
                <p className="mt-4 text-sm leading-6 text-[#6b5d50]">Com Dra. Cássia Blasques</p>
              </div>
              <p className="text-sm font-semibold">Transmissão nos canais</p>
              <p className="mt-2 text-sm leading-6 text-[#6b5d50]">
                YouTube Lecler Academy e YouTube Vida Bela.
              </p>
              <p className="mt-4 text-xs leading-5 text-[#78695b]">
                Os links da transmissão ainda não estão disponíveis nesta página.
              </p>
            </div>
          ) : (
            <>
              <h2
                id="registration-title"
                className="font-display text-[2rem] leading-tight sm:text-[2.15rem]"
              >
                Inscreva-se na live
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6b5d50]">
                Preencha seus dados para registrar sua participação.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-busy={submitting}
                className="mt-6 space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="bioframe-name" className="text-sm font-medium">
                    Nome completo
                  </Label>
                  <Input
                    id="bioframe-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    required
                    maxLength={100}
                    value={fields.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    disabled={submitting}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "bioframe-name-error" : undefined}
                    className="h-12 rounded-md border-[#d8cbb9] bg-[#fcfaf7] px-3.5 text-base shadow-none md:text-base"
                  />
                  {fieldErrors.name && (
                    <p id="bioframe-name-error" className="text-xs leading-5 text-[#a12e2a]">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bioframe-email" className="text-sm font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="bioframe-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder="voce@exemplo.com"
                    required
                    maxLength={254}
                    value={fields.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    disabled={submitting}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "bioframe-email-error" : undefined}
                    className="h-12 rounded-md border-[#d8cbb9] bg-[#fcfaf7] px-3.5 text-base shadow-none md:text-base"
                  />
                  {fieldErrors.email && (
                    <p id="bioframe-email-error" className="text-xs leading-5 text-[#a12e2a]">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bioframe-whatsapp" className="text-sm font-medium">
                    WhatsApp com DDD
                  </Label>
                  <Input
                    id="bioframe-whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(11) 99999-9999"
                    required
                    maxLength={24}
                    value={fields.whatsapp}
                    onChange={(event) => updateField("whatsapp", event.target.value)}
                    disabled={submitting}
                    aria-invalid={Boolean(fieldErrors.whatsapp)}
                    aria-describedby={fieldErrors.whatsapp ? "bioframe-whatsapp-error" : undefined}
                    className="h-12 rounded-md border-[#d8cbb9] bg-[#fcfaf7] px-3.5 text-base shadow-none md:text-base"
                  />
                  {fieldErrors.whatsapp && (
                    <p id="bioframe-whatsapp-error" className="text-xs leading-5 text-[#a12e2a]">
                      {fieldErrors.whatsapp}
                    </p>
                  )}
                </div>

                <div hidden aria-hidden="true">
                  <label htmlFor="bioframe-website">Website</label>
                  <input
                    id="bioframe-website"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    value={fields.website}
                    onChange={(event) => updateField("website", event.target.value)}
                  />
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <input
                      id="bioframe-consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={fields.consent}
                      onChange={(event) => updateField("consent", event.target.checked)}
                      disabled={submitting}
                      aria-invalid={Boolean(fieldErrors.consent)}
                      aria-describedby={fieldErrors.consent ? "bioframe-consent-error" : undefined}
                      className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#603b31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806538]"
                    />
                    <label
                      htmlFor="bioframe-consent"
                      className="cursor-pointer text-xs leading-5 text-[#6b5d50]"
                    >
                      Autorizo o uso dos meus dados para a inscrição e comunicações sobre esta live,
                      conforme a{" "}
                      <a
                        href="/privacidade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#603b31] underline underline-offset-2"
                      >
                        Política de Privacidade
                      </a>
                      .
                    </label>
                  </div>
                  {fieldErrors.consent && (
                    <p
                      id="bioframe-consent-error"
                      className="mt-2 text-xs leading-5 text-[#a12e2a]"
                    >
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                {submissionError && (
                  <p
                    role="alert"
                    className="rounded-md border border-[#e6c7bf] bg-[#fbf1ed] px-4 py-3 text-sm leading-6 text-[#8d352a]"
                  >
                    {submissionError}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-13 w-full rounded-md bg-[#603b31] text-base font-medium text-white hover:bg-[#4d2c24]"
                >
                  {submitting ? (
                    <>
                      <Loader2 aria-hidden="true" className="animate-spin" /> Confirmando
                      inscrição...
                    </>
                  ) : (
                    <>
                      Confirmar minha inscrição <ArrowRight aria-hidden="true" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs leading-5 text-[#78695b]">
                  30 de novembro · 20h · Ao vivo no YouTube
                </p>
              </form>
            </>
          )}
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#d8cbb9]/70 px-5 py-6 text-xs leading-5 text-[#78695b] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>L’ECLER Academy · Em parceria com Vida Bela</p>
        <a
          href="/privacidade"
          className="w-fit underline decoration-[#c3b49d] underline-offset-4 hover:text-[#392b28]"
        >
          Política de Privacidade
        </a>
      </footer>
    </div>
  );
}
