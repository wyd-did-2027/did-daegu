export type Locale = "kr" | "en";
export const locales: Locale[] = ["kr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteConfig = {
  name: "2027 WYD 대구대교구대회 공식 사이트",
  url: "https://www.wyd2027did-daegu.org",
  ogImage: "https://r2-image-server.masterforce999.workers.dev/opengraph-image.png",
};

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "2027 WYD 대구대교구대회 공식 사이트",
      description: "대구대교구 교구대회(DID) 프로그램, 참가 신청, 홈스테이 및 봉사자 정보를 확인하세요.",
      keywords:
        "2027 WYD 대구대교구대회, 대구대교구, WYD, DID, 교구대회, 일정, 공지사항, 관련 자료, 참가 신청, 홈스테이, 봉사자, 봉헌하기",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd did 대구",
      nav: {
        home: "홈",
        calendar: "캘린더",
        youtube: "영상",
        notice: "공지",
        site: "사이트",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did 대구",
      address:
        "대구광역시 중구 남산로4길 112 본관 3층",
      email: "2027wyd_daegu@naver.com",
      phone: "053-250-3116~7",
      hours: "운영시간: 월~금 09:00~18:00 (점심시간 12:00~13:00)",
      copyright: "Copyright ⓒ 대구대교구 All rights reserved",
    },
    slider: {
      pause: "일시정지 버튼",
      play: "재생 버튼",
      prev: "이전 슬라이드 버튼",
      next: "다음 슬라이드 버튼",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "공지사항",
      youtube: "추천 영상",
      site: "관련 사이트",
      faq: "FAQ",
    },
    notice: {
      backLink: "돌아가기",
    },
    common: {
      prev: "이전",
      next: "다음",
      prevPage: "이전 페이지",
      nextPage: "다음 페이지",
      backToTop: "맨 위로 이동",
      close: "닫기",
      hideFor7Days: "7일간 보지 않기",
    },
    popup: {
      title: "2026 세계청년대회 안내",
      description:
        "대구대교구에서 준비하는 세계청년대회 소식을 확인해보세요.",
    },
  },
  en: {
    lang: "en",
    metadata: {
      title: "2027 WYD Daegu DID Official Site",
      description: "2027 WYD Daegu DID schedules, notices, and info.",
      keywords:
        "2027 WYD Daegu DID, Daegu Diocese, WYD, DID, Diocesan Day, schedule, notices, resources, application, homestay, volunteer, offering",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd did Daegu",
      nav: {
        home: "Home",
        calendar: "Calendar",
        youtube: "Videos",
        notice: "Notice",
        site: "Sites",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did Daegu",
      address:
        "112, Namsan-ro 4-gil, Jung-gu, Daegu, Main Building 3F",
      email: "2027wyd_daegu@naver.com",
      phone: "053-250-3116~7",
      hours: "Hours: Mon-Fri 09:00~18:00 (Lunch 12:00~13:00)",
      copyright: "Copyright ⓒ Archdiocese of Daegu All rights reserved",
    },
    slider: {
      pause: "Pause",
      play: "Play",
      prev: "Previous slide",
      next: "Next slide",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "Notice",
      youtube: "Featured Videos",
      site: "Related Sites",
      faq: "FAQ",
    },
    notice: {
      backLink: "Go back",
    },
    common: {
      prev: "Previous",
      next: "Next",
      prevPage: "Previous page",
      nextPage: "Next page",
      backToTop: "Back to top",
      close: "Close",
      hideFor7Days: "Hide for 7 days",
    },
    popup: {
      title: "WYD 2026 Information",
      description:
        "Check out the latest news about WYD from the Archdiocese of Daegu.",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
