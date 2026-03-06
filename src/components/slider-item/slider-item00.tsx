import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem00() {
  return (
    <div className="relative w-full h-full bg-[#F5EBDB]">
      <Image
        src={`${R2_URL}/main00m.png`}
        alt="인천교구 wyd open"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src={`${R2_URL}/main00.png`}
        alt="인천교구 wyd open"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
