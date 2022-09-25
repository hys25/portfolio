import Link from "next/link";

function AboutThisWebsite() {
  return (
    <div className="flex justify-center">
      <Link href="/more-about-this-website" passHref>
        <a
          alt="More about this website"
          className="hover:text-white text-grey text-[14px]"
        >
          More about this website
        </a>
      </Link>
    </div>
  );
}

export default AboutThisWebsite;
