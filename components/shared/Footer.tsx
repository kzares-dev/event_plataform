import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t" >

      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">

        <Link href="/" >
          <Image
            width={128}
            height={38}
            src="/assets/images/logo.svg"
            alt="logo" />
        </Link>

        <p>2024 Evently. All Rights reserved</p>

      </div>

    </footer>
  )
}

export default Footer
