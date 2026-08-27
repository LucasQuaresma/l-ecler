import { trackMetaLead } from "@/lib/meta-pixel";

const COURSE_WHATSAPP_PHONE = "5511915633857";
const PIXEL_DISPATCH_DELAY_MS = 350;

type CourseLeadRedirectOptions = {
  courseName: string;
  source: string;
};

function waitForPixelDispatch() {
  return new Promise((resolve) => window.setTimeout(resolve, PIXEL_DISPATCH_DELAY_MS));
}

export function getCourseWhatsappUrl(courseName: string) {
  const text = `Olá, me cadastrei no ${courseName} da L'ECLER Academy e quero receber os detalhes.`;
  return `https://api.whatsapp.com/send?phone=${COURSE_WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}

export async function redirectCourseLeadToWhatsapp({
  courseName,
  source,
}: CourseLeadRedirectOptions) {
  trackMetaLead({
    content_name: courseName,
    content_category: "L'ECLER Academy",
    source,
  });

  await waitForPixelDispatch();
  window.location.href = getCourseWhatsappUrl(courseName);
}
