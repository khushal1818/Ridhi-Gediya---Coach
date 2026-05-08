import { MapPin, Mail, Phone, Clock } from "lucide-react";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#283618] text-[#fefae0] py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#fefae0]">Ridhi Gediya</h3>
          <p className="mt-3 text-sm text-[#cfd8b5]">
            Natural products designed to improve your health and wellness every
            day.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-[#fefae0] font-semibold text-lg">Contact Info</h4>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="text-[#606c38] mt-1" size={18} />
            <p>BRTS, Vesu Canal Rd, near Mira Ambika Society, behind Param Hospital, Kalapul Society, Punagam, Varachha, Surat, Gujarat 395011, India(BRTS, Vesu Canal Rd, near Mira Ambika Society, behind Param Hospital, Kalapul Society, Punagam, Varachha, Surat, Gujarat 395011, India)</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail className="text-[#606c38]" size={18} />
            <p>support@herbalstore.com</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="text-[#606c38]" size={18} />
            <p>+91 63520 76634</p>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Clock className="text-[#606c38] mt-1" size={18} />
            <div>
              <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map + Social */}
        <div>
          <h4 className="text-[#fefae0] font-semibold text-lg">Our Location</h4>

          <div className="rounded-lg overflow-hidden mt-3 shadow border border-[#606c38]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.096308446035!2d72.84851064727057!3d21.201131953872025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa7035fd40f%3A0x2db2f4fabb1cd420!2sPuna%20Gam%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395011!5e0!3m2!1sen!2sin!4v1778046289244!5m2!1sen!2sin"
              className="w-full h-72 md:h-80 border-0"
              style={{ border: 0 }} // ✅ fixed
              allowFullScreen // ✅ fixed
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // ✅ fixed
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#606c38] hover:bg-[#fefae0] hover:text-[#283618] text-[#fefae0] transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/ridhs_gediya?igsh=MWRjcHkzcjNlM3A0bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#606c38] hover:bg-[#fefae0] hover:text-[#283618]  text-[#fefae0] transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B919724076634&text&type=phone_number&app_absent=0&wame_ctl=1&utm_source=ig&fbclid=PAT01DUAOPgUdleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadz1owesqkWg2Y1476cS5MEZeXFy9BadiDLqzusxxAPxVMR58-NEPnhIUIyhg_aem_7YnhakJz9P8iKjNigD43NA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#606c38] hover:bg-[#fefae0] hover:text-[#283618]  text-[#fefae0] transition"
            >
              <FaWhatsapp size={16} />
            </a>

            <a
              href="https://youtube.com/@wellnesscoach_rg?si=zfwV9el-ahpi5Hb5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#606c38] hover:bg-[#fefae0] hover:text-[#283618]  text-[#fefae0] transition"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#606c38] mt-10 pt-6 text-center text-sm text-[#cfd8b5]">
        © 2026 Ridhi Gediya Wellness Coach | All rights reserved.
      </div>
    </footer>
  );
}
