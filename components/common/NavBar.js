import Image from "next/image"
import Link from "next/link"

function NavBar(){
    return(
        <div className="w-screen h-[5rem]  absolute mt-5 z-10 flex px-8 justify-between">
                <div className="flex w-auto py-3 px-5 justify-center items-center gap-6 text-xl font-semibold bg-white rounded-2xl">
                    <Link href={"/"} className=" cursor-pointer">
                        HOME
                    </Link>
                    <Link href={"#"} className=" cursor-pointer">
                        ABOUT US
                    </Link>
                    <Link href={"#"} className=" cursor-pointer">
                        CONTACT
                    </Link>
                    <Link href={"#"} className=" cursor-pointer">
                        DISCUSSION
                    </Link>
                </div>

                <div className="flex justify-center items-center gap-5 mr-4">
                    <div className=" cursor-pointer">
                        <Image src={"/icons/search.svg"} width={200} height={200} className="w-12 h-12 object-cover"/>
                    </div>
                    <button className="p-6 rounded-2xl bg-white text-xl font-semibold">
                        SIGN IN
                    </button>
                </div>
        </div>
    )
}
export default NavBar