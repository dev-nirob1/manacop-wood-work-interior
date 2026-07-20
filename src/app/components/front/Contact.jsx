"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const inputStyle =
    "w-full bg-transparent border-b border-secondary/50 focus:border focus:border-primary focus:rounded-sm px-2 py-2 text-sm text-dark placeholder:text-dark outline-none transition-all";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
        {/* Contact Info */}
        <div className="bg-dark rounded-lg p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
            <p className="text-white/60 leading-relaxed">
              We&apos;d love to hear about your project. Reach out through any of
              the channels below.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-sm bg-linear-to-br from-primary to-secondary text-white text-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-1">Address</p>
              <p className="text-sm text-white">123 Main Street, Batangas, PH</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-sm bg-linear-to-br from-primary to-secondary text-white text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-1">Phone</p>
              <p className="text-sm text-white">+63 912 345 6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-sm bg-linear-to-br from-primary to-secondary text-white text-lg">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-1">Email</p>
              <p className="text-sm text-white">info@manacop.com</p>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex gap-3">
            
             <a href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-secondary hover:bg-white/20 transition-colors"
            >
              <FaFacebookF />
            </a>
            
             <a href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-secondary hover:bg-white/20 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 bg-secondary/10 p-7 sm:p-9 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className={inputStyle} />
            <input type="email" placeholder="Email" className={inputStyle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="tel" placeholder="Phone" className={inputStyle} />
            <select className={inputStyle} defaultValue="">
              <option value="" disabled>
                Service Needed
              </option>
              <option value="custom-furniture">Custom Furniture</option>
              <option value="kitchen-remodel">Kitchen Remodel</option>
              <option value="bathroom-remodel">Bathroom Remodel</option>
              <option value="commercial-build">Commercial Build</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea rows={4} placeholder="Message" className={inputStyle} />

          <button
            type="submit"
            className="w-fit rounded-sm px-8 py-3 text-white font-medium bg-primary hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;