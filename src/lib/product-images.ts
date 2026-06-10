import cream from "@/assets/p-tee-cream.jpg";
import black from "@/assets/p-tee-black.jpg";
import olive from "@/assets/p-tee-olive.jpg";
import white from "@/assets/p-shirt-white.jpg";
import sand from "@/assets/p-shirt-sand.jpg";
import stripe from "@/assets/p-shirt-stripe.jpg";
import shoeWhite from "@/assets/p-shoe-white.jpg";
import shoeBoot from "@/assets/p-shoe-boot.jpg";
import shoeLoafer from "@/assets/p-shoe-loafer.jpg";
import jeansIndigo from "@/assets/p-jeans-indigo.jpg";
import jeansLight from "@/assets/p-jeans-light.jpg";
import jeansBlack from "@/assets/p-jeans-black.jpg";

const map: Record<string, string> = {
  "cream-essential-tee": cream,
  "charcoal-heavyweight-tee": black,
  "olive-pocket-tee": olive,
  "white-linen-shirt": white,
  "sand-oxford-shirt": sand,
  "breton-stripe-shirt": stripe,
  "white-leather-sneaker": shoeWhite,
  "black-suede-chelsea-boot": shoeBoot,
  "tan-leather-loafer": shoeLoafer,
  "indigo-raw-denim-jeans": jeansIndigo,
  "light-wash-denim-jeans": jeansLight,
  "black-slim-denim-jeans": jeansBlack,
};

export function productImage(slug: string, fallback: string | null) {
  return map[slug] ?? fallback ?? "";
}

