import Link from "next/link"
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
      <div className="flex mx-auto w-full text-white mt-[150px] max-w-[1200px]">
        {isError && <div className="text-red">{message}</div>}
        <div className="flex flex-col w-1/2">
          <p>
            I’m a Toronto-based Front-End engineer, currently working for
            Studio.gd.
          </p>
          <p className="my-8">
            I have a serious passion for creating intuitive, dynamic user
            experiences, UI effects and animations. I like to resolve design
            problems, create smart user interface and imagine useful
            interaction, developing rich web experiences & web applications. Fan
            of art, astrology, and obsesed of dogs. Interested in the entire
            frontend spectrum and working on ambitious projects with positive
            people.
          </p>
          <Link href="/contact" passHref>
            <a
              href="/contact"
              alt="Let’s make something special"
              className="underline underline-offset-8"
            >
              Let’s make something special !
            </a>
          </Link>
        </div>
        <div className="w-1/2 pl-[150px]">
          Skills List :
          <div className="grid grid-cols-4 gap-5 mt-8 font-bold">
            {skills.map(({ _id, skill_name }) => (
              <div key={_id} className="uppercase text-grey">
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
