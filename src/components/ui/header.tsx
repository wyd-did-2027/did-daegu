import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white flex items-center justify-between z-50 px-16 max-md:px-8 mx-sm:px-4 shadow-sm gap-x-4">
      <h1>
        <Link href="/" className="flex items-center gap-x-1">
          <Image
            src="/logo.png"
            width={120}
            height={60}
            alt="wyd did 대구 로고"
            priority
          />
        </Link>
      </h1>
      <div className="flex">
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8 body01M text-gray-800">
            <li>
              <Link href="#home">홈</Link>
            </li>
            <li>
              <Link href="#calendar">캘린더</Link>
            </li>
            <li>
              <Link href="#youtube">영상</Link>
            </li>
            <li>
              <Link href="#notice">공지</Link>
            </li>
            <li>
              <Link href="#site">사이트</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
