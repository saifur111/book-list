
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Logo = () => {
  return(
      <Link href="/">
        <div className="flex flex-row items-center leading-none text-white">
        <SparklesIcon className="w-12 h-12" />
        <p className="text-[28px] ml-1">Book Shop</p>
        </div>
      </Link>
  )
}

export default Logo;