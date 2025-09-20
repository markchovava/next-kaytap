import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { RxBorderSplit } from "react-icons/rx";


export const AdminData = [
    {
        id: 1, 
        title: "Settings", 
        href:"/admin/settings", 
        description: "App Information, User Profiles",
        icon: <IoSettingsOutline className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-teal-400 to-teal-800"
    },
    {
        id: 2, 
        title: "Users", 
        href:"/admin/user", 
        description: "All Users", 
        icon: <FaRegUser className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-emerald-400 to-emerald-800"
    },
    {
        id: 3, 
        title: "Products", 
        href:"/admin/product", 
        description: "All Products", 
        icon: <BsFileEarmarkBarGraph className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-cyan-400 to-cyan-800"
    },
    {
        id: 4, 
        title: "Categories", 
        href:"/admin/categoyry", 
        description: "All Categories", 
        icon: <MdOutlineCategory className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-blue-400 to-blue-800"
    },
    {
        id: 5, 
        title: "Orders", 
        href:"/admin/order", 
        description: "All Orders", 
        icon: <RxBorderSplit className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-zinc-400 to-zinc-800"
    },
    {
        id: 6, 
        title: "Projects", 
        href:"/admin/project", 
        description: "All Projects", 
        icon: <PiProjectorScreenChartBold className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-indigo-400 to-indigo-800"
    },
]