import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6"
import { CategoryData } from "./CategoryData"


export const AboutNavData = [
    {id: 1, title: "Who we are?", href: "/about" },
    {id: 2, title: "Why Us?", href: "/about" },
    {id: 3, title: "Our Team", href: "/about" },
]


export const NavLinksData = [
    {id: 1, title: "Home", href: "/", withDropdown: false, isOpen: false, items: [] },
    {id: 2, title: "About Us", href: "/about", withDropdown: true, isOpen: false, items: AboutNavData },
    {id: 3, title: "Our Services", href: "/service", withDropdown: false, isOpen: false, items: [] },
    {id: 4, title: "Our Projects", href: "/project", withDropdown: false, isOpen: false, items: [] },
    {id: 5, title: "Our Shop", href: "/shop", withDropdown: false, isOpen: false, items: [] },
    {id: 6, title: "Contact Us", href: "/contact", withDropdown: false, isOpen: false, items: [] },
]


export const ShopNavData = {
    title: "Shop By Category",
    isOpen: false,
    withDropdown: true,
    items: CategoryData
}


export const FooterNavData = [
     ...NavLinksData,
     {id: 6, title: "Sitemap", href: "#", withDropdown: false, isOpen: false, items: [] },
]


export const FooterLinksData = [
    {id: 1, title: "Privacy", href: "#"},
    {id: 1, title: "Terms of Use", href: "#"},
    {id: 1, title: "Cookies Policy", href: "#"},
]


export const SocialLinksData = [
    {id: 1, icon: <FaFacebook className="text-[1.5rem]" />, href:"#"},
    {id: 2, icon: <FaWhatsapp className="text-[1.5rem]" />, href:"#"},
    {id: 3, icon: <FaEnvelope className="text-[1.5rem]" />, href:"#"},
    {id: 4, icon: <FaLinkedin className="text-[1.5rem]" />, href:"#"},
    {id: 5, icon: <FaInstagram className="text-[1.5rem]" />, href:"#"},
    {id: 6, icon: <FaXTwitter className="text-[1.5rem]" />, href:"#"},
    {id: 7, icon: <FaTiktok className="text-[1.5rem]" />, href:"#"},
]



