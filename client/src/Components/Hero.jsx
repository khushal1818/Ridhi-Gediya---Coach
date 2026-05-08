import { ShoppingCart, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#fefae0] py-16 animate-fadeUp">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#283618] leading-tight">
            Natural Health <br /> Starts With Wellness Life
          </h1>

          <p className="mt-4 text-[#606c38]">
            Discover premium herbal nutrition products designed to support your
            wellness, energy, and healthy lifestyle.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[#606c38] text-[#fefae0] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#283618] transition">
              <ShoppingCart size={18} /> Shop Now
            </button>

            <button className="border border-[#606c38] text-[#606c38] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#606c38] hover:text-[#fefae0] transition">
              <BookOpen size={18} /> Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group animate-float">
            <img
              src="https://images.openai.com/static-rsc-4/Nj9ZaF_pQ69P3ACZX1hggdrJP6odmNte33-9PXRbPn3qNjycZNh1xdV0XXfs9aKPSm5NNKaMhBNbXg8t03dFzFpXOuof7OIJ04bSof9orrSa6FJkUn5xqYvf1pan1c1N8-Gllthr8d8tSFVtapuhrRh2c046hna9zWJDC1jc3-6CsLQpgrR4pQ-5DS0sKlOi?purpose=fullsize"
              alt="herbal"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover transition duration-500 group-hover:scale-105 group-hover:rotate-1"
            />

            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#606c38] opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Soft Background Blur Glow */}
            <div className="absolute -z-10 inset-0 bg-[#606c38] opacity-10 blur-2xl rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
