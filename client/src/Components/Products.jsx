import p1 from "../asset/p1.jpeg";
import p2 from "../asset/p2.jpeg";
import p3 from "../asset/p3.png";
import p5 from "../asset/p5.png";
import p6 from "../asset/p6.jpeg";
import p7 from "../asset/p7.png";
import p8 from "../asset/p8.png";
import p9 from "../asset/p9.png";

import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "VinodBhai Parmar",
    description:
      "Amazing fat loss transformation with improved energy and a healthier lifestyle.",
    image: p1,
  },
  {
    id: 2,
    name: "Vishal Sharma",
    description:
      "Strong body transformation with visible weight loss and increased confidence.",
    image: p2,
  },
  {
    id: 3,
    name: "Sunita Verma",
    description:
      "Incredible weight loss journey with a slimmer look and glowing confidence.",
    image: p3,
  },
  {
    id: 4,
    name: "Sneha Patel",
    description:
      "Noticeable fat loss with better health, fitness, and active daily routine.",
    image: p5,
  },
  {
    id: 5,
    name: "Kajal Tank",
    description:
      "Great transformation showing consistent weight loss and improved lifestyle.",
    image: p6,
  },
  {
    id: 6,
    name: "Rutva Kureshi",
    description:
      "Visible inch loss and body toning with a confident and healthier appearance.",
    image: p7,
  },
  {
    id: 7,
    name: "Sumita Patel",
    description:
      "Successful fat loss journey with improved fitness and balanced nutrition.",
    image: p8,
  },
  {
    id: 8,
    name: "Urvashi Verma",
    description:
      "Beautiful transformation with weight loss and a more energetic lifestyle.",
    image: p9,
  },
];

export default function Products() {
  return (
    <section id="review" className="py-16 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#283618] animate-fadeUp">
          What say our customers?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 flex items-center flex-col border border-[#606c38]
              transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-105
              animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-full w-48 h-48  transition duration-300 border-2 border-black hover:scale-110"
              />

              <h3 className="mt-4 font-semibold text-lg text-[#283618]">
                {product.name}
              </h3>

              <div className="flex gap-1 mt-2 text-[#606c38]">
                <Star size={16} className="fill-[#606c38]" />
                <Star size={16} className="fill-[#606c38]" />
                <Star size={16} className="fill-[#606c38]" />
                <Star size={16} className="fill-[#606c38]" />
                <Star size={16} className="fill-[#606c38]" />
              </div>

              <p className="text-[#606c38] text-sm mt-2 text-center">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
