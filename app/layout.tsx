import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Best Cleaners in Maui",
    description: "Professional cleaning services tailored to fit your needs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.variable} antialiased bg-white text-slate-900 font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
