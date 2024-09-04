import { NextSeo } from "next-seo"

function LinksPage() {
  return (
    <>
      <NextSeo
        title="Halyna Yavtushenko | Coding Journey & Resources"
        description="Explore coding resources, latest blog posts, and projects from Halyna Yavtushenko. Discover tips and tools from my coding journey!"
        canonical="https://www.galinie.ca//links"
        openGraph={{
          title: "Halyna Yavtushenko | Coding Journey & Resources",
          description:
            "Explore coding resources, latest blog posts, and projects from Halyna Yavtushenko. Discover tips and tools from my coding journey!",
          url: "https://www.galinie.ca//links",
          images: [
            {
              url: "/og-photo.jpg", // Image for social sharing
              width: 800,
              height: 600,
              alt: "Halyna Yavtushenko Links Page",
            },
          ],
          site_name: "Halyna Yavtushenko Links Page",
        }}
      />
      <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        {/* Conditional Background Images */}
        <picture className="absolute inset-0 w-full h-full z-0 filter blur-md">
          <source
            media="(min-width: 1024px)"
            srcSet="/desktop-background.jpg"
          />
          <img
            src="/mobile-background.jpg"
            alt="Mobile Background"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-md space-y-4 bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg backdrop-blur-lg md:max-w-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Documenting my coding journey
          </h1>

          {/* Email Link */}
          <a
            href="mailto:galiniecodes@gmail.com"
            className="flex items-center w-full py-4 px-6 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <img
              src="/icons/email.svg"
              alt="Email"
              width={24}
              height={24}
              className="mr-3"
            />
            <span>galiniecodes@gmail.com</span>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/galinie_codes/"
            className="flex items-center w-full py-4 px-6 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logo-instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="mr-3"
            />
            <span>Instagram</span>
          </a>

          {/* TikTok Link */}
          <a
            href="https://www.tiktok.com/@galiniecodes"
            className="flex items-center w-full py-4 px-6 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logo-tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
              className="mr-3"
            />
            <span>TikTok</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/hys25"
            className="flex items-center w-full py-4 px-6 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github-white.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="mr-3"
            />
            <span>GitHub</span>
          </a>

          {/* DevHero Link */}
          <a
            href="https://devhero.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full py-4 px-6 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <img
              src="/icons/short-sleeves-t-shirt.svg"
              alt="DevHero"
              width={24}
              height={24}
              className="mr-3"
            />
            <span className="ml-3 flex-1">
              DevHero | Promo code: GALINIECODES10
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default LinksPage
