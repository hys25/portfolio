import Link from "next/link";

function AboutThisWebsite() {
  return (
    <div className="flex justify-center">
      <Link href={'#'} passHref>
        <a alt="More about this website" className="text-grey text-[14px] hover:text-white">
          More about this website
        </a>
      </Link>
    </div>
  );
}

export default AboutThisWebsite;