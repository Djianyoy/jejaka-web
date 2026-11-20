import type { Metadata } from "next";
import { VideoPage } from "@/features/learning/video-page";
export const metadata: Metadata = { title: "Video Pembelajaran" };
export default function Page() {
  return <VideoPage />;
}
