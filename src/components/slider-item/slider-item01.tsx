import Image from "next/image";

export default function SliderItem01() {
  return (
    <div className="relative w-full h-full bg-[#FFBABA]">
      <Image
        src="/main/main01m.png"
        alt="인천교구 wyd 설명회"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main01.png"
        alt="인천교구 wyd 설명회"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
