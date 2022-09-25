import Link from "next/link";

function Translation() {
  return (
    <div className="flex w-fit">
      <Link href="#" passHref>
        <a
          href="#"
          alt="english-translation"
          className="mr-4 ml-2 text-white transition-colors"
        >
          EN
        </a>
      </Link>
      <Link href="#" passHref>
        <a
          href="#"
          alt="ukrainian-translation"
          className="text-white transition-colors"
        >
          UA
        </a>
      </Link>
      <div className="ml-9 text-white">FRONT_END DEVELOPER</div>
    </div>
  );
}

export default Translation;
