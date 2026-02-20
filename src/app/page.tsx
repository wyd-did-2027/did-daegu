import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
//import Popup from "@/components/popup";
import BackToTop from "@/components/ui/back-to-top";

import SliderSection from "@/components/pages/slide-section";
import CalendarSection from "@/components/pages/calendar-section";
import YoutubeSection from "@/components/pages/youtube-section";
import NoticeSection from "@/components/pages/notice-section";
import SiteSection from "@/components/pages/site-section";
import FaqSection from "@/components/pages/faq-section";

import {
  getCalendarData,
  getNoticeData,
  getYoutubeData,
  getFaqData,
  getSiteData,
} from "@/lib/notion";

// 캐시 비활성화 - Notion 수정 시 바로 반영
export const revalidate = 0;

export default async function Home() {
  const [calendarItems, noticeItems, youtubeItems, faqItems, siteItems] =
    await Promise.all([
      getCalendarData(),
      getNoticeData(),
      getYoutubeData(),
      getFaqData(),
      getSiteData(),
    ]);

  return (
    <>
      <Header />
      <main className="pt-20">
        <SliderSection />
        <CalendarSection items={[...calendarItems].reverse()} />
        <NoticeSection items={[...noticeItems].reverse()} />
        <YoutubeSection items={[...youtubeItems].reverse()} />
        <SiteSection items={[...siteItems].reverse()} />
        <FaqSection items={faqItems} />
      </main>
      <Footer />
      {/* <Popup /> */}
      <BackToTop />
    </>
  );
}
