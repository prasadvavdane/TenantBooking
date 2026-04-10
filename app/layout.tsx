import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/layout/providers";

export const metadata: Metadata = {
  title: "TenantBooking",
  description: "Rental property booking and listing management platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
