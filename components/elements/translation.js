import Link from "next/link";

function Translation() {
  return (
    <div className="flex w-fit">
      <Link href={"#"} passHref>
        <a
          href="#"
          alt="english-translation"
          className="ml-2 mr-4 text-white transition-colors"
        >
          EN
        </a>
      </Link>
      <Link href={"#"} passHref>
        <a
          href="#"
          alt="ukrainian-translation"
          className="text-white transition-colors"
        >
          UA
        </a>
      </Link>
      <div className="text-white ml-9">FRONT_END DEVELOPER</div>
    </div>
  );
}

export default Translation;
