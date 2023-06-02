import Link from "next/link"
import { NextSeo } from "next-seo"
import { get } from "../../lib/api"
import Default from "../../components/layout/default"
import { NEXT_PUBLIC_BE_HOST } from "../../config"

export async function getServerSideProps() {
  const { data, message, isError } = await get(`${NEXT_PUBLIC_BE_HOST}/skill`)
  return {
    props: {
      skills: data,
      message,
      isError,
    },
  }
}

function About({ skills, message, isError }) {
  return (
    <Default>
      <NextSeo
        title="Page about Halyna Yavtushenko"
        description="Toronto-based Front-End engineer. Interested in the entire full-stack spectrum and working on ambitious projects with positive people."
      />
      <div className="flex mx-auto w-full text-white md:flex-col mt-[150px] max-w-[1200px] md:mt-[80px]">
        {isError && <div className="text-red">{message}</div>}
        <div className="flex flex-col w-1/2 md:w-full md:text-[14px]">
          <p className="mb-5">
            I&apos;m a Toronto-based
            <span className="bg-greyDark"> Front-End engineer</span>, currently
            working for Studio.gd.
          </p>
          <p className="mb-5">
            I am dedicated to solving design challenges, crafting smart user
            interfaces, and envisioning meaningful interactions while developing
            robust web applications.
          </p>
          <p className="mb-5">
            My expertise lies in{" "}
            <span className="bg-greyDark">front-end development </span>,
            encompassing HTML, CSS, JavaScript,
            <span className="bg-greyDark"> React, Next.js</span>. I excel at
            building feature-rich web apps, coding interactive and responsive
            layouts. Additionally, I have valuable
            <span className="bg-greyDark">
              {" "}
              experience in backend development{" "}
            </span>
            using Express.js.
          </p>
          <p className="mb-5">
            Interested in the entire
            <span className="bg-greyDark"> full-stack</span> spectrum and thrive
            on working with ambitious teams on exciting projects. Aside from my
            professional pursuits, I&apos;m an avid dog lover, and I&apos;ve
            creatively used dogs as a metaphor to describe the diverse range of
            projects I&apos;ve had the privilege to work on. Due to
            confidentiality reasons, I cannot disclose specific project details,
            but I would be thrilled to discuss my contributions and showcase my
            portfolio during an interview.
          </p>
          <Link href="/contact" passHref>
            <a
              href="/contact"
              alt="Let’s make something special"
              className="underline underline-offset-8"
            >
              Visit my LinkedIn profile for more details or just contact me !
            </a>
          </Link>
        </div>
        <div className="w-1/2 font-bold md:pl-0 md:mt-8 md:w-full pl-[150px]">
          Skills List :
          <ul className="grid grid-cols-2 gap-5 mt-8 font-bold md:grid-cols-2 md:mt-4">
            {skills.map(({ _id, skill_name }) => (
              <li key={_id} className="md:font-thin md:text-center text-grey">
                <h2>{skill_name}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Default>
  )
}
export default About
