import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-dvw flex h-74 justify-between bg-white px-16 py-7.5 text-black max-[1079px]:flex-wrap max-[1079px]:h-auto max-[1079px]:gap-y-1 max-[1079px]:px-8 max-[1079px]:py-12 max-sm:px-4">
      <div className="flex flex-col">
        <h3 className="mb-6">
          <Link href="/" className="flex items-center gap-x-1">
            <Image
              src="/logo.png"
              width={200}
              height={90}
              alt="wyd did 대구 로고"
              className="h-full"
              priority
            />
          </Link>
        </h3>
        <address className="not-italic">
          <h4 className="heading04B mb-1">Contact</h4>
          <ul className="flex flex-col gap-y-2 body02R">
            <li>대구광역시 중구 남산로4길 112 WYD 대구 교구대회 사무국</li>
            <li>qna.wyd.doc.icn@gmail.com</li>
          </ul>
        </address>
      </div>
      <div>
        <h3 className="heading03B max-[1079px]:mb-1">032-765-6997</h3>
        <p className="body02R">운영시간: 10:00 ~ 18:00</p>
        {/* <ul className="mt-4 mb-12 flex gap-x-4">
          <li>
            <Link
              href="http://www.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              인천교구청
            </Link>
          </li>
          <li>
            <Link
              href="https://youth.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              인천교구 청소년 사목국
            </Link>
          </li>
        </ul> */}
        <p className="body02R">Copyright ⓒ 대구대교구 All rights reserved</p>
      </div>
    </footer>
  );
}
