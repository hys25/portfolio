import Link from "next/link";

function Translation() {
  return (
    <div className="flex">
      <Link href={'#'} passHref>
        <a href="https://www.linkedin.com/in/halyna-yavtushenko/" target="_blanc" alt="linkedin" className="ml-2 mr-4 text-white">
          EN
        </a>
      </Link>
      <Link href={'#'} passHref>
        <a href="https://www.linkedin.com/in/halyna-yavtushenko/" target="_blanc" alt="linkedin" className="text-white">
          UA
        </a>
      </Link>
    </div>

  );
}

export default Translation;