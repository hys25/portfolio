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
        description="I'm a Toronto-based Front-End engineer with over 2 years of experience. Interested in the entire full-stack spectrum and working on ambitious projects with positive people."
      />
      <div className="flex mx-auto w-full text-white md:flex-col mt-[150px] max-w-[1200px] md:mt-[80px]">
        {isError && <div className="text-red">{message}</div>}
        <div className="flex flex-col w-1/2 md:w-full md:text-[14px]">
          <p className="mb-5">
            I&apos;m a Toronto-based Front-End engineer, currently working for
            Studio.gd.
          </p>
          <p className="mb-5">
            I have a serious passion for creating intuitive, dynamic user
            experiences, UI effects and animations. I like to resolve design
            problems, create smart user interface and imagine useful
            interaction, developing rich web applications.
          </p>
          <p className="mb-5">
            The main area of my expertise is front-end development, HTML, CSS,
            JS, React, Next.js, building web apps, features, animations, and
            coding interactive responsive layouts. I also have backend
            developement experience with Express.js.
          </p>
          <p className="mb-5">
            Interested in the entire full-stack spectrum and working on
            ambitious projects with positive people. As you probably understood
            I&apos;m obsessed with dogs. Obviously, I can&apos;t show the
            project&apos;s name, logos, pictures, etc, so I decided dogs can
            help describe projects I worked on
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
        <div className="w-1/2 md:pl-0 md:mt-8 md:w-full pl-[150px] font-bold">
          Skills List :
          <div className="grid grid-cols-2 gap-5 mt-8 font-bold md:grid-cols-2 md:mt-4">
            {skills.map(({ _id, skill_name }) => (
              <div key={_id} className=" md:font-thin md:text-center text-grey">
                {skill_name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Default>
  )
}
export default About
