import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";
import { AuthProvider } from "@/hooks/useAuth";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <NextAuthSessionProvider> */}
          <AuthProvider>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />

              <main className="2xl:w-[80%] xl:w-[90%] md:w-[95%] max-w-[1568px] mx-auto pt-4 lg:pt-16 px-4 md:px-6 flex-grow">
                {children}
              </main>

              <Footer />
            </div>
          </AuthProvider>
          {/* </NextAuthSessionProvider> */}
        </Providers>
      </body>
    </html>
  );
}
