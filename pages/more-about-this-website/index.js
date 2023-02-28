import { NextSeo } from "next-seo"
import Default from "../../components/layout/default"

function MoreAboutThisWebsite() {
  return (
    <Default>
      <NextSeo
        title="Tech description of portfolio"
        description="This portfolio was fully designed and built by Halyna Yavtushenko. It consists of 3 repositories: website, admin and backend. For the website used Next.js framework. For admin - React library, Redux + RTK Query, Tailwind. For server-side - Express.js"
      />
      <div className="flex mx-auto w-full text-white md:flex-col mt-[150px] max-w-[1200px] md:mt-[80px]">
        <div className="flex flex-col w-2/3 md:mb-4 md:m-full md:w-full">
          <div className="mb-8 pr-[150px] md:pr-0 md:text-[14px]">
            <h2 className="mb-4 font-bold">More about this website:</h2>
            <p className="mb-4">
              I built my portfolio website from scratch. It includes UI/UX
              design prototyping in the <span className="bg-greyDark">Figma</span>, planning system architecture and
              picking up web technological accordingly.
            </p>
            <p className="mb-4">
              Portfolio consists of 3 repositories: website, admin and backend.
            </p>
            <p className="mb-4">
              For the website I used <span className="bg-greyDark">Next.js</span> framework to benefit from
              server-side rendering features, rich optimization tools and
              simplisity of usage.
            </p>
            <p className="mb-4">
              For the dashboard I decided to go with a bare <span className="bg-greyDark">React</span> library for
              the UI layer, <span className="bg-greyDark">Redux + RTK Query</span> for the business logic layer. For
              styling I choosed modern utility-first <span className="bg-greyDark">Tailwind CSS</span> framework to
              be able to bootstrap dashboard UI in the efficient, scalable
              approach.
            </p>
            <p className="mb-4">
              On the server-side I setup <span className="bg-greyDark">Express.js</span> app with <span className="bg-greyDark">MongoDB database</span>
              and mongoose ODM. I decided to go with non-relational database in
              order to keep simpler prototyping possibilities, less code
              advantage and easier future scalability.
            </p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-4 after:h-4 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-18px] after:bottom-[3px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://www.figma.com/file/KHucTlorfsmQ6HjGfASXjZ/Halyna's-portfolio?node-id=0%3A1&t=Fobk5jR6owqdwez3-0"
          >
            Figma markup
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-4 after:h-4 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-18px] after:bottom-[3px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio"
          >
            This website repository
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-4 after:h-4 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-18px] after:bottom-[3px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio-admin"
          >
            Admin repository
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-4 after:h-4 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-18px] after:bottom-[3px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio-backend"
          >
            Backend repository
          </a>
        </div>

        <div className="flex flex-col w-1/3 md:m-full">
          <h1 className="font-bold">Project stack :</h1>
          <ul className="text-grey">
            <li className="mt-4">
              <h2>React</h2>
            </li>
            <li className="mt-4">
              <h2>Next.js</h2>
            </li>
            <li className="mt-4">
              <h2>Express.js</h2>
            </li>
            <li className="mt-4">
              <h2>Mongo DB</h2>
            </li>
            <li className="mt-4">
              <h2>Tailwind</h2>
            </li>
          </ul>
        </div>
      </div>
    </Default>
  )
}
export default MoreAboutThisWebsite
