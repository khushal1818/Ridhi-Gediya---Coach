import { Leaf, HeartPulse, ShieldCheck } from "lucide-react";

export default function Benefits() {
  return (
    <section id="about" className="py-16 bg-[#fefae0] animate-fadeUp">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#283618] animate-fadeDown">
          Our Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="text-center p-6 shadow rounded-xl bg-white border border-[#606c38] transition duration-300 hover:-translate-y-3 hover:shadow-xl animate-fadeUp delay-100">
            <Leaf
              className="mx-auto text-[#606c38] transition duration-300 hover:scale-110"
              size={40}
            />
            <h3 className="mt-4 font-semibold text-xl text-[#283618]">
              100% Natural
            </h3>
            <p className="text-[#606c38] mt-2">
              Our products are made with natural herbal ingredients.
            </p>
          </div>

          <div className="text-center p-6 shadow rounded-xl bg-white border border-[#606c38] transition duration-300 hover:-translate-y-3 hover:shadow-xl animate-fadeUp delay-200">
            <HeartPulse
              className="mx-auto text-[#606c38] transition duration-300 hover:scale-110"
              size={40}
            />
            <h3 className="mt-4 font-semibold text-xl text-[#283618]">
              Healthy Lifestyle
            </h3>
            <p className="text-[#606c38] mt-2">
              Improve your energy and daily wellness naturally.
            </p>
          </div>

          <div className="text-center p-6 shadow rounded-xl bg-white border border-[#606c38] transition duration-300 hover:-translate-y-3 hover:shadow-xl animate-fadeUp delay-300">
            <ShieldCheck
              className="mx-auto text-[#606c38] transition duration-300 hover:scale-110"
              size={40}
            />
            <h3 className="mt-4 font-semibold text-xl text-[#283618]">
              Trusted Quality
            </h3>
            <p className="text-[#606c38] mt-2">
              High quality products trusted by thousands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
