import type { Metadata } from "next";
import "./styles/globals.scss";
import { anton, barlowCondensed, poppins } from './fonts';
import { QuestionProvider } from "./providers/QuestionProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${barlowCondensed.variable} ${anton.variable} body-entry-animation`}
      >
        <QuestionProvider>
          {children}
        </QuestionProvider>
      </body>
    </html>
  );
}
