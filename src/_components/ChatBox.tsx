import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function ChatBox() {
  return (
    <div className=" z-[1000] fixed right-[5rem] bottom-[3rem] flex items-center justify-end gap-3">
      <Link href="#">
      <FaWhatsapp className="animate-bounce text-[3rem] text-green-700 hover:scale-110 ease-initial transition-all" />
      </Link>
      {/* <button>
        <IoChatbubbleEllipsesOutline 
        className="animate-bounce text-[3rem] text-blue-700 hover:scale-110 ease-initial transition-all" />
        </button> */}
    </div>
  )
}
