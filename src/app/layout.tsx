import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";

import ConvexClientProvider from "@/components/providers/convex-client-provider";
import ModelProvider from "@/components/providers/model-provider";
import Loading from "@/components/auth/loading";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boardy: Realtime Collaborative Whiteboard",
  description:
    "Boardy is an innovative and feature-rich realtime collaborative whiteboard, offering a seamless experience for brainstorming, planning, and creative collaboration. Embrace the power of teamwork with Boardy's Miro clone, where real-time synchronization and a user-friendly interface elevate your collaborative projects. Unleash creativity and boost productivity with our advanced tools and a platform designed to bring your ideas to life. Join Boardy today and redefine how you collaborate!",
  authors: {
    name: "Suraj Kumar",
    url: "https://suraj138.github.io/Boardy_Whiteboard/"
  },
  creator: "Suraj Kumar",
  publisher: "Suraj Kumar",
  keywords: [
    "Realtime Collaborative Whiteboard",
    "Miro Clone Platform",
    "Online Whiteboard Collaboration",
    "Team Brainstorming Tool",
    "Creative Project Planning",
    "Virtual Collaboration Space",
    "Shared Whiteboard App",
    "Digital Teamwork Platform",
    "Visual Collaboration Tools",
    "Productivity Enhancement Board"
  ],
  openGraph: {
    type: "website",
    url: "https://suraj138.github.io/Boardy_Whiteboard/",
    title: "Boardy: Realtime Collaborative Whiteboard",
    description:
      "Boardy is an innovative and feature-rich realtime collaborative whiteboard, offering a seamless experience for brainstorming, planning, and creative collaboration. Embrace the power of teamwork with Boardy's Miro clone, where real-time synchronization and a user-friendly interface elevate your collaborative projects. Unleash creativity and boost productivity with our advanced tools and a platform designed to bring your ideas to life. Join Boardy today and redefine how you collaborate!",
    siteName: "Boardy - An Online Whiteboard Collaboration Platform",
    emails: ["hello@vigneshgupta.tech"],
    locale: "en_US",
    images: [
      {
        url: "/thumbnail.png",
        alt: "Boardy - An Online Whiteboard Collaboration Platform"
      }
    ]
  },
  twitter: {
    creator: "@surajfixes",
    creatorId: "twitter.com/",
    site: "https://suraj138.github.io/Boardy_Whiteboard/",
    title: "Boardy: Realtime Collaborative Whiteboard",
    images: [
      {
        url: "/thumbnail.png",
        width: "100%",
        height: "auto",
        alt: "Hey there, I'm Suraj Kumar"
      }
    ]
  },
  metadataBase: new URL("https://suraj138.github.io/Boardy_Whiteboard/")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            {children}
            <Toaster />
            <ModelProvider />
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
