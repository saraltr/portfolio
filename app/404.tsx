import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Eculture not found page",
};

export default function NotFound() {
  return (
    <section className="flex m-4 h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the corresponding event.</p>
    </section>
  );
}
