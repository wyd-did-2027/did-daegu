import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem00({
  locale,
  index = 1,
  ext = "png",
}: {
  locale: string;
  index?: number;
  ext?: string;
}) {
  const { pc, mobile } = PREFIX[locale] || PREFIX.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/daegu/${mobile}_${index}.${ext}`}
        alt={`대구${index}`}
        fill
        className="object-fill min-[1080px]:hidden block"
        priority={index === 1}
      />
      <Image
        src={`${R2_URL}/daegu/${pc}_${index}.${ext}`}
        alt={`대구${index}`}
        fill
        className="object-fill hidden min-[1080px]:block"
        priority={index === 1}
      />
    </div>
  );
}
