import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem01() {
  return (
    <div className="relative w-full h-full bg-[#FFBABA]">
      <Image
        src={`${R2_URL}/main01m.png`}
        alt="인천교구 wyd 설명회"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src={`${R2_URL}/main01.png`}
        alt="인천교구 wyd 설명회"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
