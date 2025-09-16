"use client"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

interface ItemPrimaryInterface{
    iconType?: string,
    css?: string
}


export default function ItemTertiary({iconType, css}: ItemPrimaryInterface) {
    
    const renderIcon = () => {
        switch(iconType) {
            case 'facebook':
                return <FaFacebook className={css} />;
            case 'whatsapp':
                return <FaWhatsapp className={css} />;
            case 'email':
                return <FaEnvelope className={css} />;
            case 'linkedin':
                return <FaLinkedin className={css} />;
            case 'instagram':
                return <FaInstagram className={css} />;
            case 'twitter':
                return <FaXTwitter className={css} />;
            case 'tiktok':
                return <FaTiktok className={css} />;
            default:
                return <FaFacebook className={css} />;
        }
    }
  return (
    <>{renderIcon()}</>
  )
}

 
