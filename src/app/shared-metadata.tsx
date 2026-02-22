import data from '@/data/user.json';

export const sharedMetadata = {
  metadataBase: new URL("https://bio-link-green-two.vercel.app"),
  
  title: `${data.profile.nickname} | BioLink`,
  description: data.profile.bio,

  openGraph: {
    title: `${data.profile.nickname} - Links e Contato`,
    description: data.profile.bio,
    url: "https://bio-link-green-two.vercel.app/",
    siteName: "BioLink",
    images: [
      {
        url: data.profile.profileImage || "/default-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
};