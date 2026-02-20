import Image from "next/image";

export default function SliderItem02() {
  return (
    <div className="relative w-full h-full bg-[#603022]">
      <Image
        src="/main/main02m.png"
        alt="성가를로아쿠티스성인공경예식"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main02.png"
        alt="성가를로아쿠티스성인공경예식"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
