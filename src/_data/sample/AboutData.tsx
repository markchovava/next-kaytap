import { MdRemoveRedEye } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { MdNotificationImportant } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";


export const AboutData = {
    about: {
        title: "Who we are?",
        subtitle: "About the Company",
        details: `Kaytap Construction Company is a dynamic and innovative civil engineering and construction company 
          headquartered in Harare Zimbabwe. Since its establishment, Kaytap has earned a strong reputation for delivering 
          complex infrastructure projects with precision, integrity, and a commitment to excellence. The organization was 
          incorporated on 7th of February 2018 in terms of the Companies Act (Chapter 24:03) under registration number 
          1458/2018. The company's registered offices are at 15 Shepperton Road Graniteside, Harare, Zimbabwe.`,
        img: "/assets/img/4by5/01.jpg",
        },
    coreBusiness: {
        title: "Core Business",
        subtitle: "About the Company",
        details: `A team of professionals in civil and water engineering and building construction majored into infrastructure 
            development of projects which include construction of roads, dams, construction of detached and semidetached
            units, town houses and high-rise buildings. The company focuses on small, medium and large projects and this 
            enables the company to participate in all sizes of projects both in private and public
            From roadworks and bridges to buildings and urban infrastructure, we partner with both public and private sector 
            clients to build the region’s future. Our portfolio includes strategic partnerships, such as our subcontracted works 
            under Fossil Contracting at the Trabablas Interchange—a key infrastructure milestone in the region.`,
        img: "/assets/img/4by5/03.jpg",
    },
    vision: {
        title: "Our Vision",
        icon: <MdRemoveRedEye className="text-[7rem] text-blue-900" />,
        items: [
            {id:1, details:"To deliver quality civil works that meet international standards."},
            {id: 2, details: "To build strategic partnerships with leading industry players"},
            {id: 2, details: "To provide sustainable solutions through innovation and responsible engineering"},
            {id: 2, details: "To empower local communities through job creation and skills development"}
        ]
    },
    mission: {
        title: "Our Mission",
        icon: <BiTargetLock className="text-[7rem] text-blue-900" />,
        items: [
            {id:1, details: `To become a premier engineering and construction firm that transforms 
                communities through world-class infrastructure.`
            }, {
                id: 2,
                details: `To produce high quality services at minimal cost, also to maintain a high 
                standard corporate image and integrity in our deadlines with clients and maintain good 
                quality, efficiency and value for money.`
            }
        ]

    },
    values: {
        title: "Our Values",
        icon: <MdNotificationImportant className="text-[7rem] text-blue-900" />,
        items: [
            {id: 1, details: `Guided by Safety Measures`},
            {id: 2, details: `Innovation`},
            {id: 3, details: `Proffesionalism`},
            {id: 4, details: `Dependability`},
            {id: 5, details: `Honesty & Integrity`},
            {id: 6, details: `Flexibility`},
            {id: 6, details: `Good Workmanship`},
        ]
    },
    team: {
        title: "Our Team",
        items: [
            {id: 1, name: 
                "User A", 
                position: "Manager", 
                img: "/assets/img/user.jpg", 
                links: [
                    {id:1, href:"#", icon: <FaWhatsapp className="text-[1.5rem] text-green-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "WhatsApp"},
                    {id:2, href:"#", icon: <IoMailOutline className="text-[1.5rem] text-gray-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Email"},
                    {id:3, href:"#", icon: <FaFacebook className="text-[1.5rem] text-blue-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Facebook"}
                ]
            },
            { id: 2, 
                name: "User B", 
                position: "Manager", 
                img: "/assets/img/user.jpg",
                links: [
                     {id:1, href:"#", icon: <FaWhatsapp className="text-[1.5rem] text-green-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "WhatsApp"},
                    {id:2, href:"#", icon: <IoMailOutline className="text-[1.5rem] text-gray-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Email"},
                    {id:3, href:"#", icon: <FaFacebook className="text-[1.5rem] text-blue-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Facebook"}
                ]
            },
            {id: 3, name: "User C", position: "Manager", img: "/assets/img/user.jpg",
                links: [
                     {id:1, href:"#", icon: <FaWhatsapp className="text-[1.5rem] text-green-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "WhatsApp"},
                    {id:2, href:"#", icon: <IoMailOutline className="text-[1.5rem] text-gray-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Email"},
                    {id:3, href:"#", icon: <FaFacebook className="text-[1.5rem] text-blue-600  ease-initial transition-all duration-200 hover:scale-110" />, title: "Facebook"}
                ]
            },
            {id: 4, name: "User D", position: "Manager", img: "/assets/img/user.jpg",
                links: [
                     {id:1, href:"#", icon: <FaWhatsapp className="text-[1.5rem] text-green-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "WhatsApp"},
                    {id:2, href:"#", icon: <IoMailOutline className="text-[1.5rem] text-gray-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "Email"},
                    {id:3, href:"#", icon: <FaFacebook className="text-[1.5rem] text-blue-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "Facebook"}
                ]
            },
            {id: 5, name: "User E", position: "Manager", img: "/assets/img/user.jpg",
                links: [
                     {id:1, href:"#", icon: <FaWhatsapp className="text-[1.5rem] text-green-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "WhatsApp"},
                    {id:2, href:"#", icon: <IoMailOutline className="text-[1.5rem] text-gray-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "Email"},
                    {id:3, href:"#", icon: <FaFacebook className="text-[1.5rem] text-blue-600 ease-initial transition-all duration-200 hover:scale-110" />, title: "Facebook"}
                ]
            },
        ]
    }
}



