import Image from "next/image";

export default function SliderItem04() {
  return (
    <div className="relative w-full h-full bg-[#FCF2E6]">
      <Image
        src="/main/main04m.png"
        alt="인천교구 봉사자 모집"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main04.png"
        alt="인천교구 봉사자 모집"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
