export interface NoticeItem {
  id: number;
  category: string;
  title: string;
  image: string;
  content: string;
  date: string;
}

export const noticesData: NoticeItem[] = [
  {
    id: 1,
    category: "WYD DID 인천",
    title: "2027 세계청년대회 인천교구 봉사자 모집 안내",
    image: "/main01.jpg",
    content:
      "2026 세계청년대회를 함께할 인천교구 봉사자를 모집합니다. 청년들의 많은 참여 바랍니다.",
    date: "2025.01.15",
  },
  {
    id: 2,
    category: "WYD DID 인천",
    title: "인천교구 청년 봉사단 발대식 개최",
    image: "/main02.jpeg",
    content:
      "인천교구 청년 봉사단 발대식이 성공적으로 개최되었습니다. 많은 청년들이 참석해 주셨습니다.",
    date: "2025.01.10",
  },
  {
    id: 3,
    category: "WYD DID 인천",
    title: "세계청년대회 D-200 기념 미사 안내",
    image: "/main01.jpg",
    content:
      "세계청년대회 D-200을 기념하는 특별 미사가 진행됩니다. 많은 참여 부탁드립니다.",
    date: "2025.01.05",
  },
  // {
  //   id: 4,
  //   category: "WYD DID 인천",
  //   title: "청년 사도직 활성화를 위한 워크숍 개최",
  //   image: "/main02.jpeg",
  //   content:
  //     "청년 사도직 활성화를 위한 워크숍이 개최됩니다. 관심 있는 청년들의 참여를 기다립니다.",
  //   date: "2024.12.28",
  // },
  // {
  //   id: 5,
  //   category: "WYD DID 인천",
  //   title: "세계청년대회 인천 유치 기념 감사 미사",
  //   image: "/main01.jpg",
  //   content:
  //     "세계청년대회 인천 유치를 기념하는 감사 미사가 봉헌되었습니다. 함께해 주신 모든 분들께 감사드립니다.",
  //   date: "2024.12.20",
  // },
];

export function getNoticeById(id: number): NoticeItem | undefined {
  return noticesData.find((notice) => notice.id === id);
}
