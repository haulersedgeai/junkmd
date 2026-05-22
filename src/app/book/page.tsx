import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Your JunkMD+ House Call",
  description: "Book a JunkMD+ house call. Same-day & next-day appointments. Save $20 on your first booking.",
};

export default function BookPage() {
  redirect(SITE.bookingUrl);
}
