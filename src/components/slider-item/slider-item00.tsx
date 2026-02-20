import Image from "next/image";

export default function SliderItem00() {
  return (
    <div className="relative w-full h-full bg-[#F5EBDB]">
      <Image
        src="/main/main00m.png"
        alt="인천교구 wyd open"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main00.png"
        alt="인천교구 wyd open"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
