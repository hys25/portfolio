import Link from "next/link";

function AboutThisWebsite() {
  return (
    <Link className="m-auto" href={'#'} passHref>
      <a alt="More about this website" className="flex justify-center text-grey text-[14px]">
        More about this website
      </a>
    </Link>
  );
}

export default AboutThisWebsite;