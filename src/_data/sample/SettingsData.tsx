import { FaRegUserCircle } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

export const SettingsData = [
    {
        id: 1, 
        title: "Profile", 
        href:"/admin/profile", 
        description: "User Profile",
        icon: <FaRegUserCircle className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-slate-400 to-slate-800"
    },
    {
        id: 2, 
        title: "App Information", 
        href:"/admin/app-info", 
        description: "Information about the Website",
        icon: <FiInfo className="text-[2.5rem]" />,
        css: "bg-gradient-to-br from-green-400 to-green-800"
    },
]