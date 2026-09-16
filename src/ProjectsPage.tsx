import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import projectsBannerImg from "@/imports/프로젝트 페이지 사진 -1 .jpg";
import daeguProjectImg from "@/imports/Splash/대구 재건축 2-1-1-1.png";
import daeguProjectDetailImg from "@/imports/대구 재건축 2-1-1 세부 .png";
import chuncheonProjectImg from "@/imports/춘천 재건축 1-1-1.png";
import chuncheonProjectDetailImg from "@/imports/춘천 재건축 1-1 세부.png";
import wonjuProjectImg from "@/imports/원주 재건축 10-1-1.png";
import wonjuProjectDetailImg from "@/imports/원주 재건축 10-1-1-1 세부.png";
import daeguDonginImg from "@/imports/대구 재개발 3-1-1-1.png";
import daeguDonginDetailImg from "@/imports/대구 재개발 3-1 세부.jpeg";
import sejongSinheung1Img from "@/imports/세종 재개발 4-1-1-1.png";
import sejongSinheung1DetailImg from "@/imports/세종 재개발 4-1-1 세부.png";
import sejongJugongImg from "@/imports/세종 재개발 6-1-1.png";
import sejongJugongDetailImg from "@/imports/세종 재개발 6-1-1-1 세부.png";
import chuncheonYaksaImg from "@/imports/춘천 재개발 9-1-1.png";
import chuncheonYaksaDetailImg from "@/imports/춘천 재개발 9-1-1-1 세부.png";
import sejongSinheung2Img from "@/imports/세종 재건축 5-1-1.png";
import sejongSinheung2DetailImg from "@/imports/세종 재건축 5-1 세부.jpg";
import daeguDalseoImg from "@/imports/대구 재건축 7-1-1.png";
import daeguDalseoDetailImg from "@/imports/대구 재건축 7-1-1-1 세부.png";
import namyangjuDeoksoImg from "@/imports/남양주 도시환경정비 11.jpg";
import namyangjuDeoksoDetailImg from "@/imports/남양주 도시환경 11-1-1 세부.png";
import jamsilImg from "@/imports/잠실 상가통합 8-1.png";
import jamsilDetailImg from "@/imports/잠실 상가통합 8-1-1 세부.png";
import useScrolled from "./useScrolled";

type Category = "재개발정비사업" | "재건축정비사업" | "소규모정비사업";

const CATEGORIES: Category[] = [
  "재개발정비사업",
  "재건축정비사업",
  "소규모정비사업",
];

const REDEVELOPMENT_PHOTOS = [
  {
    src: daeguDonginImg,
    alt: "대구 동인 4가7통",
    title: "대구 동인 4가7통",
    subtitle: "대구광역시 중구 동인동\n공동주택",
    detail: {
      category: "재개발정비사업",
      title: "대구 동인 4가7통",
      location: "대구광역시 중구 동인동",
      area: "63,63903㎡",
      scale: "지하 2층 / 지상 20층",
      units: "376 세대",
      sitePlan: daeguDonginDetailImg,
    },
  },
  {
    src: sejongSinheung1Img,
    alt: "세종 신흥 1구역",
    title: "세종 신흥 1구역",
    subtitle: "세종특별자치시 조치원읍 신흥리\n공동주택",
    detail: {
      category: "재개발정비사업",
      title: "세종 신흥 1구역",
      location: "세종특별자치시 조치원읍 신흥리",
      area: "239,047.13㎡",
      scale: "지하 2층 / 지상 22층",
      units: "1,660 세대",
      sitePlan: sejongSinheung1DetailImg,
    },
  },
  {
    src: sejongJugongImg,
    alt: "세종 신흥주공연립",
    title: "세종 신흥주공연립",
    subtitle: "세종특별자치시 조치원읍 신흥리\n공동주택",
    detail: {
      category: "재개발정비사업",
      title: "세종 신흥주공연립",
      location: "세종특별자치시 조치원읍 신흥리",
      area: "45,759.74㎡",
      scale: "지하 1층 / 지상 13층",
      units: "296 세대",
      sitePlan: sejongJugongDetailImg,
    },
  },
  {
    src: chuncheonYaksaImg,
    alt: "춘천 약사 촉진 3구역",
    title: "춘천 약사 촉진 3구역",
    subtitle: "강원특별자치도 춘천시 약사동\n공동주택",
    detail: {
      category: "재개발정비사업",
      title: "춘천 약사 촉진 3구역",
      location: "강원특별자치도 춘천시 약사동",
      area: "114,315.47㎡",
      scale: "지하 2층 / 지상 26층",
      units: "873 세대",
      sitePlan: chuncheonYaksaDetailImg,
    },
  },
];

const RECONSTRUCTION_PHOTOS = [
  {
    src: chuncheonProjectImg,
    alt: "춘천 후평 제3아파트",
    title: "춘천 후평 제3아파트",
    subtitle: "강원특별자치도 춘천시 후평동\n공동주택",
    detail: {
      category: "재건축정비사업",
      title: "춘천 후평 제3아파트",
      location: "강원특별자치도 춘천시 후평동",
      area: "272,073.65㎡",
      scale: "지하 2층 / 지상 31층",
      units: "1,745 세대",
      sitePlan: chuncheonProjectDetailImg,
    },
  },
  {
    src: daeguDalseoImg,
    alt: "대구 대신 2-3지구",
    title: "대구 대신 2-3지구",
    subtitle: "대구광역시 중구 대신동\n공동주택",
    detail: {
      category: "재건축정비사업",
      title: "대구 대신 2-3지구",
      location: "대구광역시 중구 대신동",
      area: "68,523.84㎡",
      scale: "지하 2층 / 지상 29층",
      units: "467 세대",
      sitePlan: daeguProjectDetailImg,
    },
  },
  {
    src: sejongSinheung2Img,
    alt: "세종 신흥 2구역",
    title: "세종 신흥 2구역",
    subtitle: "세종특별자치시 조치원읍 신흥리\n공동주택",
    detail: {
      category: "재건축정비사업",
      title: "세종 신흥 2구역",
      location: "세종특별자치시 조치원읍 신흥리",
      area: "86,28120㎡",
      scale: "지하 2층 / 지상 20층",
      units: "1,017 세대",
      sitePlan: sejongSinheung2DetailImg,
    },
  },
  {
    src: daeguProjectImg,
    alt: "대구 82,83달서시영아파트",
    title: "대구 82,83달서시영아파트",
    subtitle: "대구광역시 달서구 성당동\n공동주택",
    detail: {
      category: "재건축정비사업",
      title: "대구 82,83달서시영아파트",
      location: "대구광역시 달서구 성당동",
      area: "96,155.95㎡",
      scale: "지하 2층 / 지상 20층",
      units: "690 세대",
      sitePlan: daeguDalseoDetailImg,
    },
  },
  {
    src: wonjuProjectImg,
    alt: "원주 원동주공아파트",
    title: "원주 원동주공아파트",
    subtitle: "강원특별자치도 원주시 원동\n공동주택",
    detail: {
      category: "재건축정비사업",
      title: "원주 원동주공아파트",
      location: "강원특별자치도 원주시 원동",
      area: "52,386.19㎡",
      scale: "지하 3층 / 지상 29층",
      units: "1,240 세대",
      sitePlan: wonjuProjectDetailImg,
    },
  },
];

const SMALL_SCALE_PHOTOS = [
  {
    src: namyangjuDeoksoImg,
    alt: "남양주 덕소 5A 구역",
    title: "남양주 덕소 5A 구역",
    subtitle: "경기도 남양주시 와부읍 덕소리\n공동주택",
    detail: {
      category: "소규모정비사업",
      title: "남양주 덕소 5A 구역",
      location: "경기도 남양주시 와부읍 덕소리",
      area: "272,073.65㎡",
      scale: "지하 3층 / 지상 35층",
      units: "552 세대",
      sitePlan: namyangjuDeoksoDetailImg,
    },
  },
  {
    src: jamsilImg,
    alt: "잠실 1단지",
    title: "잠실 1단지",
    subtitle: "서울특별시 송파구 잠실동\n상가통합",
    detail: {
      category: "소규모정비사업",
      title: "잠실 1단지",
      location: "서울특별시 송파구 잠실동",
      area: "30,612.14㎡",
      scale: "지하 3층 / 지상 5층",
      sitePlan: jamsilDetailImg,
    },
  },
];

const ALL_PROJECTS = [
  {
    title: "춘천 후평 제3아파트",
    location: "강원특별자치도 춘천시 후평동",
    type: "공동주택",
    src: chuncheonProjectImg,
  },
  {
    title: "대구 대신 2-3지구",
    location: "대구광역시 중구 대신동",
    type: "공동주택",
    src: daeguProjectImg,
  },
  {
    title: "대구 동인 4가7통",
    location: "대구광역시 중구 동인동",
    type: "공동주택",
    src: daeguDonginImg,
  },
  {
    title: "세종 신흥 1구역",
    location: "세종특별자치시 조치원읍 신흥리",
    type: "공동주택",
    src: sejongSinheung1Img,
  },
  {
    title: "세종 신흥 2구역",
    location: "세종특별자치시 조치원읍 신흥리",
    type: "공동주택",
    src: sejongSinheung2Img,
  },
  {
    title: "세종 신흥주공연립",
    location: "세종특별자치시 조치원읍 신흥리",
    type: "공동주택",
    src: sejongJugongImg,
  },
  {
    title: "대구 82,83달서시영아파트",
    location: "대구광역시 달서구 성당동",
    type: "공동주택",
    src: daeguDalseoImg,
  },
  {
    title: "잠실 1단지",
    location: "서울특별시 송파구 잠실동",
    type: "상가통합",
    src: jamsilImg,
  },
  {
    title: "춘천 약사 촉진 3구역",
    location: "강원특별자치도 춘천시 약사동",
    type: "공동주택",
    src: chuncheonYaksaImg,
  },
  {
    title: "원주 원동주공아파트",
    location: "강원특별자치도 원주시 원동",
    type: "공동주택",
    src: wonjuProjectImg,
  },
  {
    title: "남양주 덕소 5A 구역",
    location: "경기도 남양주시 와부읍 덕소리",
    type: "공동주택",
    src: namyangjuDeoksoImg,
  },
];

const PROJECT_DETAILS_BY_TITLE = new Map(
  [
    ...REDEVELOPMENT_PHOTOS,
    ...RECONSTRUCTION_PHOTOS,
    ...SMALL_SCALE_PHOTOS,
  ].map((project) => [project.title, project.detail])
);

const FRAME_COUNTS: Record<Category, number> = {
  재개발정비사업: 0,
  재건축정비사업: 11,
  소규모정비사업: 11,
};

interface Props {
  onNavigate: (page: string, project?: object, tab?: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProjectsPage({
  onNavigate,
  activeTab,
  onTabChange,
}: Props) {
  const isScrolled = useScrolled();
  const isAll = activeTab === "전체";
  const tab = activeTab as Category;
  const count = isAll ? 11 : FRAME_COUNTS[tab] ?? 0;
  const frames = Array.from({ length: count }, (_, i) => i + 1);
  const isRedevelopment = tab === "재개발정비사업";
  const categoryPhotos = isRedevelopment
    ? REDEVELOPMENT_PHOTOS
    : tab === "재건축정비사업"
    ? RECONSTRUCTION_PHOTOS
    : tab === "소규모정비사업"
    ? SMALL_SCALE_PHOTOS
    : null;

  return (
    <div
      className="w-full min-h-screen bg-white overflow-y-auto"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-[background-color,box-shadow] duration-500 ease-out ${
          isScrolled
            ? "bg-white shadow-[0_4px_14px_rgba(0,0,0,0.10)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <button onClick={() => onNavigate("main")} className="flex-shrink-0">
          <img
            src={logoImg}
            alt="YEJIN C&D"
            className="h-11 w-[110px] object-contain"
          />
        </button>
        <nav className="flex items-center gap-14">
          {[
            { label: "About us", page: "about" },
            { label: "Projects", page: "projects" },
            { label: "Contact", page: "contact" },
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => {
                if (page === "projects") onTabChange("전체");
                else onNavigate(page);
              }}
              className={`text-[19.33px] font-medium tracking-wide transition-[color,opacity] duration-500 hover:opacity-70 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative w-full flex flex-col justify-between"
        style={{ height: 390, backgroundColor: "#1a2a3a" }}
      >
        <img
          src={projectsBannerImg}
          alt="프로젝트 배너"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 px-12 pt-32">
          <h1
            className="text-white font-bold"
            style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
          >
            프로젝트
          </h1>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <div className="border-b border-gray-200">
        <div className="flex max-w-3xl mx-auto">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              onClick={() => onTabChange(cat)}
              className="relative flex-1 py-5 text-[12.5pt] text-gray-700 transition-colors hover:text-gray-900"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-gray-300" />
              )}
              <span className={tab === cat ? "font-bold text-gray-900" : ""}>
                {cat}
              </span>
              {tab === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── PHOTO GRID ── */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {isAll
            ? ALL_PROJECTS.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  className="group relative cursor-pointer overflow-hidden text-left text-white"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() =>
                    onNavigate(
                      "project-detail",
                      {
                        category: "전체 프로젝트",
                        title: project.title,
                        location: project.location,
                        area: "-",
                        scale: "-",
                        units: "-",
                        ...PROJECT_DETAILS_BY_TITLE.get(project.title),
                        photo: project.src,
                        alt: project.title,
                      },
                      "전체"
                    )
                  }
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-[rgba(60,60,60,0.64)] p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="mb-3 text-[15pt] font-bold leading-snug">
                      {project.title}
                    </p>
                    <div className="mb-3 h-px w-full bg-white/30" />
                    <p className="text-[10.5pt] leading-relaxed text-white/90">
                      {project.location}
                      <br />
                      {project.type}
                    </p>
                  </div>
                </button>
              ))
            : categoryPhotos
            ? categoryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden bg-gray-200 group cursor-pointer"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() =>
                    onNavigate(
                      "project-detail",
                      { ...photo.detail, photo: photo.src, alt: photo.alt },
                      tab
                    )
                  }
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms]"
                    style={{ backgroundColor: "rgba(60,60,60,0.82)" }}
                  >
                    <p className="text-white font-bold text-lg leading-snug mb-3">
                      {photo.title}
                    </p>
                    <div className="border-t border-white/40 mb-3" />
                    <p className="text-white/85 text-sm leading-relaxed whitespace-pre-line">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              ))
            : frames.map((n) => (
                <div
                  key={n}
                  className="relative bg-gray-100 border border-gray-200 flex flex-col items-center justify-center cursor-pointer"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() =>
                    onNavigate(
                      "project-detail",
                      {
                        photo: "",
                        alt: "",
                        category: tab,
                        title: `프로젝트 ${String(n).padStart(2, "0")}`,
                        location: "위치 정보 없음",
                        area: "-",
                        scale: "-",
                        units: "-",
                      },
                      tab
                    )
                  }
                >
                  {[
                    "top-0 left-0 border-t-2 border-l-2",
                    "top-0 right-0 border-t-2 border-r-2",
                    "bottom-0 left-0 border-b-2 border-l-2",
                    "bottom-0 right-0 border-b-2 border-r-2",
                  ].map((cls, j) => (
                    <span
                      key={j}
                      className={`absolute w-4 h-4 border-gray-400 ${cls}`}
                    />
                  ))}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke="#d1d5db"
                      strokeWidth="1"
                    />
                    <line
                      x1="100%"
                      y1="0"
                      x2="0"
                      y2="100%"
                      stroke="#d1d5db"
                      strokeWidth="1"
                    />
                  </svg>
                  <span
                    className="relative z-10 text-gray-400 font-medium"
                    style={{
                      fontSize: "15px",
                      fontFamily: "Pretendard, sans-serif",
                    }}
                  >
                    {String(n).padStart(2, "0")}
                  </span>
                </div>
              ))}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-gray-900 text-white px-12 pt-14 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-sm">
            <div>
              <p className="text-gray-400 text-xs mb-1">대표자명</p>
              <p>차혁진</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">주소</p>
              <p className="leading-relaxed">
                서울특별시 송파구 올림픽로 212, 에이동 1436호
                <br />
                <span className="text-gray-400 text-xs">
                  [잠실동, 갤러리아팰리스]
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">대표전화</p>
              <p>02)414-1184</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">팩스</p>
              <p>02)414-1185</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">사업자등록번호</p>
              <p>215-86-73507</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-xs">
              COPYRIGHT ㈜예진씨앤디 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
