import { createServerFn } from "@tanstack/react-start";
import { bioframeRequestSchema } from "./bioframe-registration";
import { deliverBioframeRegistration } from "./bioframe-registration-transport.server";

export const registerBioframe = createServerFn({ method: "POST" })
  .inputValidator(bioframeRequestSchema)
  .handler(async ({ data }) => {
    try {
      const secret = process.env['EBOOK_WEBHOOK_SECRET'];
      return await deliverBioframeRegistration(data, { secret });
    } catch {
      // Never return provider responses, credentials or contact details to the browser.
      throw new Error(
        "Não foi possível confirmar sua inscrição. Seus dados continuam no formulário para tentar novamente.",
      );
    }
  });