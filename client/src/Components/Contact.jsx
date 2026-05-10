import {
  Mail,
  Phone,
  User,
  Send,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "84b39245-f727-485e-adf8-bdd118c3f298");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully...");
      e.target.reset();
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="bg-[#fefae0] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#283618]">
          Contact Us
        </h2>

        <p className="text-center text-[#606c38] mt-2">
          Have questions about our wellness coach? Send us a message.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl shadow border border-[#606c38]">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#606c38]" />
                <h3 className="font-semibold text-lg text-[#283618]">
                  Address
                </h3>
              </div>
              <p className="text-[#606c38] mt-2">
                BRTS, Vesu Canal Rd, near Mira Ambika Society, behind Param
                Hospital, Kalapul Society, Punagam, Varachha, Surat, Gujarat
                395011, India(BRTS, Vesu Canal Rd, near Mira Ambika Society,
                behind Param Hospital, Kalapul Society, Punagam, Varachha,
                Surat, Gujarat 395011, India)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-[#606c38]">
              <div className="flex items-center gap-3">
                <Mail className="text-[#606c38]" />
                <h3 className="font-semibold text-lg text-[#283618]">Email</h3>
              </div>
              <p className="text-[#606c38] mt-2">support@herbalstore.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-[#606c38]">
              <div className="flex items-center gap-3">
                <Phone className="text-[#606c38]" />
                <h3 className="font-semibold text-lg text-[#283618]">Phone</h3>
              </div>
              <p className="text-[#606c38] mt-2">+91 63520 76634</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-[#606c38]">
              <div className="flex items-center gap-3">
                <Clock className="text-[#606c38]" />
                <h3 className="font-semibold text-lg text-[#283618]">
                  Working Hours
                </h3>
              </div>
              <p className="text-[#606c38] mt-2">
                Monday - Saturday: 10:00 AM - 7:00 PM
              </p>
              <p className="text-[#606c38]">Sunday: Closed</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow border border-[#606c38]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.096308446035!2d72.84851064727057!3d21.201131953872025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa7035fd40f%3A0x2db2f4fabb1cd420!2sPuna%20Gam%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395011!5e0!3m2!1sen!2sin!4v1778046289244!5m2!1sen!2sin"
                className="w-full h-72 md:h-80 border-0"
                style={{ border: 0 }} // ✅ fixed
                allowFullScreen // ✅ fixed
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // ✅ fixed
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-5 self-start border border-[#606c38]"
          >
            {/* Name */}
            <div>
              <label className="text-[#283618] font-medium">Full Name</label>
              <div className="flex items-center border border-[#606c38] rounded-lg mt-2 px-3">
                <User size={18} className="text-[#606c38]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 outline-none bg-transparent text-[#283618]"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-[#283618] font-medium">Email</label>
              <div className="flex items-center border border-[#606c38] rounded-lg mt-2 px-3">
                <Mail size={18} className="text-[#606c38]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none bg-transparent text-[#283618]"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-[#283618] font-medium">Phone</label>
              <div className="flex items-center border border-[#606c38] rounded-lg mt-2 px-3">
                <Phone size={18} className="text-[#606c38]" />
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone"
                  className="w-full p-3 outline-none bg-transparent text-[#283618]"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-[#283618] font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message..."
                className="w-full mt-2 border border-[#606c38] rounded-lg p-3 outline-none bg-transparent text-[#283618]"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#606c38] text-[#fefae0] py-3 rounded-lg font-medium hover:bg-[#283618] flex items-center justify-center gap-2 transition"
            >
              <Send size={18} /> Send Message
            </button>

            {/* Social Icons */}
            <div className="pt-4 border-t border-[#606c38] flex justify-center gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-[#fefae0] border border-[#606c38] text-[#606c38] hover:bg-[#606c38] hover:text-[#fefae0] transition"
              >
                <Facebook size={25} />
              </a>

              <a
                href="https://www.instagram.com/ridhs_gediya?igsh=MWRjcHkzcjNlM3A0bw=="
                className="p-3 rounded-full bg-[#fefae0] border border-[#606c38] text-[#606c38] hover:bg-[#606c38] hover:text-[#fefae0] transition"
              >
                <Instagram size={25} />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B919724076634&text&type=phone_number&app_absent=0&wame_ctl=1&utm_source=ig&fbclid=PAT01DUAOPgUdleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadz1owesqkWg2Y1476cS5MEZeXFy9BadiDLqzusxxAPxVMR58-NEPnhIUIyhg_aem_7YnhakJz9P8iKjNigD43NA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#fefae0] border border-[#606c38] text-[#606c38] hover:bg-[#606c38] hover:text-white transition"
              >
                <FaWhatsapp size={25} />
              </a>

              <a
                href="https://youtube.com/@wellnesscoach_rg?si=zfwV9el-ahpi5Hb5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#fefae0] border border-[#606c38] text-[#606c38] hover:bg-[#606c38] hover:text-white transition"
              >
                <FaYoutube size={25} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}