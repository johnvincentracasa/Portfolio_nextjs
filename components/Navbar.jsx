import Link from "next/link";
import styles from "./componets_styles/buttons.module.css";
import Image from "next/image";

function Navbar() {
  //styles

  return (
    <nav className="container flex justify-between  items-start sm:items-center flex-col sm:flex-row text-white">
      <div className="flex text-2xl p-2 ">
        <div className="relative w-8 mr-2 ">
          <Image
            src="/logo.png"
            alt="jvracasa"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <Link href="/">
          <a> Racasa</a>
        </Link>
      </div>

      <button className="absolute top-7 right-6 flex flex-col justify-between w-8 h-6 sm:hidden pointer">
        <span className="h-1 w-full bg-white rounded-xl"></span>
        <span className="h-1 w-full bg-white rounded-xl"></span>
        <span className="h-1 w-full bg-white rounded-xl"></span>
      </button>

      <div className=" sm:block w-full sm:w-auto hidden">
        <ul className="flex flex-col sm:w-auto w-full sm:flex-row flex-1 gap-2 sm:gap-8 uppercase">
          <li className="sm:my-auto text-center">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>

          <li className="sm:my-auto text-center">
            <Link href="/">
              <a className="">About</a>
            </Link>
          </li>

          <li className="sm:my-auto text-center">
            <Link href="/">
              <a className="">Portfolio</a>
            </Link>
          </li>

          <button
            type="button"
            className={`${styles.btn} text-white  bg-accent-color-blue  hover:bg-white hover:text-accent-color-blue`}
          >
            <Link href="/">
              <a className="py-1 block uppercase">Contact</a>
            </Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
