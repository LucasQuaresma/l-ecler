import { trackCourseMetaLead, trackMetaLead } from "@/lib/meta-pixel";

const COURSE_WHATSAPP_PHONE = "5511915633857";
const PIXEL_DISPATCH_DELAY_MS = 350;

type CourseLeadRedirectOptions = {
  courseName: string;
  source: string;
};

type CourseThankYouPath = "/obrigadofullface" | "/obrigadotoxina" | "/obrigadofios";

function waitForPixelDispatch() {
  return new Promise((resolve) => window.setTimeout(resolve, PIXEL_DISPATCH_DELAY_MS));
}

export function getCourseWhatsappUrl(courseName: string) {
  const text = `Olá, me cadastrei no ${courseName} da L'ECLER Academy e quero receber os detalhes.`;
  return `https://api.whatsapp.com/send?phone=${COURSE_WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}

async function trackRegisteredCourseLead({
  courseName,
  source,
}: CourseLeadRedirectOptions) {
  const eventPayload = {
    content_name: courseName,
    content_category: "L'ECLER Academy",
    source,
  };

  trackMetaLead(eventPayload);
  trackCourseMetaLead(eventPayload);

  await waitForPixelDispatch();
}

export async function redirectCourseLeadToThankYou(
  options: CourseLeadRedirectOptions & { thankYouPath: CourseThankYouPath },
) {
  await trackRegisteredCourseLead(options);
  window.location.assign(options.thankYouPath);
}

export async function redirectCourseLeadToWhatsapp(options: CourseLeadRedirectOptions) {
  await trackRegisteredCourseLead(options);
  const { courseName } = options;
  window.location.href = getCourseWhatsappUrl(courseName);
}
