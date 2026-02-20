import Image from "next/image";

export default function SliderItem03() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/main/main03m.png"
        alt="부스초대"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main03.png"
        alt="부스초대"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}
