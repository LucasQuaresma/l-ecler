import { useEffect } from "react";
import { trackCourseMetaPageView } from "@/lib/meta-pixel";

type CoursePixelTrackerProps = {
  route: string;
};

export function CoursePixelTracker({ route }: CoursePixelTrackerProps) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      trackCourseMetaPageView(route);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [route]);

  return null;
}
