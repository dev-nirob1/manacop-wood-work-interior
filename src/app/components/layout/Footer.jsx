import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  const services = [
    { name: "Custom Woodwork", href: "/services/custom" },
    { name: "Furniture Design", href: "/services/furniture" },
    { name: "Cabinetry", href: "/services/cabinetry" },
    { name: "Restoration", href: "/services/restoration" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image height={50} width={60}
                src="/logo.png"
                alt="Logo"
                className="h-15 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional woodwork with precision and passion. 
              Bringing your visions to life through timeless craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <IoLocation className="text-primary text-xl shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Woodwork Street,<br />
                  Craft City, CC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoCall className="text-primary text-xl shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <IoMail className="text-primary text-xl shrink-0" />
                <a href="mailto:info@manacopwoodwork.com" className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                  info@manacopwoodwork.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/10 hover:bg-primary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 py-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Manacop Wood Work. All Rights Reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            Developed and Designed by{" "}
            <Link
              href="https://webpoka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-colors duration-200"
            >
              WEBPOKA
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;