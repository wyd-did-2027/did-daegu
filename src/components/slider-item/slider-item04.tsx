import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem04() {
  return (
    <div className="relative w-full h-full bg-[#FCF2E6]">
      <Image
        src={`${R2_URL}/main04m.png`}
        alt="인천교구 봉사자 모집"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src={`${R2_URL}/main04.png`}
        alt="인천교구 봉사자 모집"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
