import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <a href="/" className="text-neutral-50 text-9xl font-fancy">
        G
        <span className="text-neutral-50 text-4xl tracking-wider font-fancy">
          alinie
        </span>
      </a>
    </Link>
  );
}

export default Logo;
