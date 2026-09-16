import { useState } from "react";
import logoImg from "@/imports/Splash/85ca41263952ee362d6954d6c3b88b7120f2b048.png";
import companyIntroductionImg from "@/imports/회사소개 첨부 사진.jpg";
import useScrolled from "./useScrolled";

interface Props {
  onNavigate: (page: string) => void;
}

type Tab = "인사말" | "조직도" | "업무영역";

export default function AboutPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("인사말");
  const isScrolled = useScrolled();

  return (
    <div
      className="w-full min-h-screen overflow-y-auto bg-white"
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
                if (page !== "about") onNavigate(page);
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

      {/* ── HERO BANNER ── */}
      <section
        className="relative w-full flex flex-col justify-between"
        style={{ height: "390px", backgroundColor: "#1a2a3a" }}
      >
        <img
          src={companyIntroductionImg}
          alt="Business meeting handshake"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Title */}
        <div className="relative z-10 px-12 pt-32">
          <h1
            className="text-white font-bold"
            style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
          >
            회사소개
          </h1>
        </div>

        {/* Sub-nav tabs */}
        <div className="relative z-10 flex">
          {(["인사말", "조직도", "업무영역"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative flex-1 py-5 text-center text-[14pt] font-medium text-white transition-colors"
              style={{
                backgroundColor:
                  activeTab === tab ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)",
              }}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <main className="max-w-4xl mx-auto px-12 py-20 min-h-[520px]">
        {activeTab === "인사말" && <Greeting />}
        {activeTab === "조직도" && <OrgChart />}
        {activeTab === "업무영역" && <BusinessArea />}
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

function Greeting() {
  return (
    <div>
      <h2
        className="mb-6 text-[24.5pt] font-bold text-gray-900"
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
        인사말
      </h2>
      <hr className="border-gray-200 mb-12" />

      <div className="mx-auto max-w-2xl space-y-6 text-[13.00pt] leading-[1.9] text-gray-700">
        <p>
          새로움을 창조하는 주식회사 예진 씨앤디는 그동안 재건축, 재개발 사업을
          통하여 쌓아온
          <br />
          현장 경험을 토대로 조합원님이 원하시는 안정적인 서비스 확보와 신속한
          과업 수행으로
          <br /> 최고의 사업성을 제공할 수 있도록 끊임없는 연구와 풍부한
          KNOW-HOW를 바탕으로 한 차원 높은
          <br /> 정비 사업 전문 관리의 선진화와 전문성 향상을 위하여 노력하고
          있습니다.
        </p>
        <p>
          원동 주공아파트 재건축 사업 시작부터 마무리하는 순간까지 성공적으로
          업무를 수행하여 과업을
          <br /> 완수하는 데 최선을 다하겠습니다.
        </p>
        <p>
          주식회사 예진 씨앤디 임직원 모두는 조합원 님의 기대에 부응할 것을
          약속드리며, 신뢰를 바탕으로 조합원 님의 믿음에 최선을 다하는 모습으로
          보답하겠습니다.
        </p>
        <p>감사합니다.</p>
      </div>

      <div className="mt-16 flex items-baseline justify-end gap-4 pr-2">
        <span className="text-[12.5pt] text-gray-500">대표이사</span>
        <span
          className="text-[20pt] font-bold text-gray-900"
          style={{ fontFamily: "Pretendard, sans-serif" }}
        >
          차혁진
        </span>
      </div>
    </div>
  );
}

function OrgChart() {
  // Fixed canvas width for SVG connector layer
  const W = 720;

  // X centers of the three dept columns (left, mid, right)
  const ceoX = W / 2; // 360
  const leftX = 120;
  const midX = W / 2; // 360
  const rightX = 600;

  // Y positions
  const ceoBottom = 0;
  const hBar1Y = 52; // horizontal bar connecting 전문위원 — CEO — 자문위원
  const advY = 68; // top of 전문위원 / 자문위원 boxes (below hBar1)
  const hBar2Y = 168; // horizontal bar for 3 depts
  const circleY = 190; // circle center Y
  const deptY = 168; // top of dept boxes

  return (
    <div>
      <h2
        className="mb-6 text-[24.5pt] font-bold text-gray-900"
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
        조직도
      </h2>
      <hr className="border-gray-300 mb-14" />

      <div
        className="flex flex-col items-center select-none"
        style={{ maxWidth: W, margin: "0 auto" }}
      >
        {/* ── 대표이사 ── */}
        <div
          className="flex items-center justify-center bg-[#004095] text-[11.5pt] font-bold text-white"
          style={{ width: 170, height: 46 }}
        >
          대표이사
        </div>

        {/* ── SVG connector: CEO → 전문위원/자문위원 + center vertical ── */}
        <svg
          width={W}
          height={130}
          className="pointer-events-none relative z-10"
          style={{ overflow: "visible", display: "block" }}
        >
          {/* vertical from CEO bottom to hBar1 */}
          <line
            x1={ceoX}
            y1={0}
            x2={ceoX}
            y2={hBar1Y}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* horizontal bar from leftX to rightX */}
          <line
            x1={leftX}
            y1={hBar1Y}
            x2={rightX}
            y2={hBar1Y}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* short drop to 전문위원 */}
          <line
            x1={leftX}
            y1={hBar1Y}
            x2={leftX}
            y2={advY}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* short drop to 자문위원 */}
          <line
            x1={rightX}
            y1={hBar1Y}
            x2={rightX}
            y2={advY}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* center vertical continues down through hBar2 */}
          <line
            x1={ceoX}
            y1={hBar1Y}
            x2={ceoX}
            y2={hBar2Y}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* horizontal bar for 3 depts */}
          <line
            x1={leftX}
            y1={hBar2Y}
            x2={rightX}
            y2={hBar2Y}
            stroke="#9ca3af"
            strokeWidth={1}
          />
          {/* short drop lines from circles to dept boxes */}
          {[leftX, midX, rightX].map((x) => (
            <line
              key={x}
              x1={x}
              y1={circleY + 7}
              x2={x}
              y2={deptY}
              stroke="#9ca3af"
              strokeWidth={1}
            />
          ))}
          {/* Render circles last so they stay above every connector line */}
          {[leftX, midX, rightX].map((x) => (
            <g key={x}>
              <circle cx={x} cy={circleY} r={7} fill="white" />
              <circle
                cx={x}
                cy={circleY}
                r={5}
                fill="black"
                stroke="#9ca3af"
                strokeWidth={2}
              />
            </g>
          ))}
        </svg>

        {/* ── 전문위원 / 자문위원 + 3 dept boxes, absolutely positioned ── */}
        <div
          className="relative z-0 w-full"
          style={{ marginTop: -130 + advY, height: 130 - advY + 46 }}
        >
          {/* 전문위원 */}
          <div
            className="absolute flex items-center justify-center bg-[#004EB5] text-[11.5pt] font-bold text-white"
            style={{ width: 150, height: 46, left: leftX - 75, top: 0 }}
          >
            전문위원
          </div>
          {/* 자문위원 */}
          <div
            className="absolute flex items-center justify-center bg-[#004EB5] text-[11.5pt] font-bold text-white"
            style={{ width: 150, height: 46, left: rightX - 75, top: 0 }}
          >
            자문위원
          </div>
          {/* 3 dept boxes */}
          {[
            { label: "경영지원부", x: leftX },
            { label: "개발사업부", x: midX },
            { label: "기술사업부", x: rightX },
          ].map(({ label, x }) => (
            <div
              key={label}
              className="absolute flex items-center justify-center bg-[#3A76C3] text-[11.5pt] font-bold text-white"
              style={{
                width: 150,
                height: 46,
                left: x - 75,
                top: hBar2Y - advY + 37,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* ── Vertical drops + sub-boxes ── */}
        <div
          className="flex w-full"
          style={{
            justifyContent: "space-between",
            paddingLeft: leftX - 75,
            paddingRight: W - rightX - 75,
          }}
        >
          {[
            {
              items: [
                "경리총무부",
                "영업기획팀",
                "기술지원팀",
                "법무팀",
                "PF팀",
              ],
            },
            {
              items: ["도시개발팀", "정비산업팀", "리모델링팀", "부동산개발팀"],
            },
            { items: ["기술자문팀", "설계검토팀", "시공관리팀"] },
          ].map(({ items }, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ width: 150 }}
            >
              <div className="w-px bg-gray-400" style={{ height: 120 }} />
              <div className="w-full space-y-2 bg-gray-300 px-5 py-5 text-[11.5pt] text-gray-800">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessArea() {
  const rows = [
    {
      category: "개발사업시행",
      items: [
        "조사분석/사업타당성 분석",
        "토지매입",
        "사업 계획 수립성/인허가",
        "프로젝트파이낸싱",
        "분양/홍보, 운영/관리",
      ],
    },
    {
      category: "개발사업대행",
      items: [
        "부동산 개발 사업관 업무대행",
        "토지매입 매각 용역",
        "법규 검토 / 설계, 인허가",
        "개발 콘셉트 / 마스터플랜 수립",
        "사업 계획 수립 자금 조달",
        "시공사 선정. 건설관리",
        "용역관리 계약관리 설계, 감리, 공사 등",
        "조합 업무 대행",
      ],
    },
    {
      category: "개발사업대행 및\n부동산 투자 자문",
      items: [
        "마스터플랜수립용역",
        "사업타당성분석용역",
        "개발사업전반에관한자문",
        "사업계획수립용역",
        "부동산투자자문",
      ],
    },
    {
      category: "수주  기획",
      items: [
        "사업지 현황 분석 조사분석 사업 타당성 분석",
        "추진위 구성 지원 및 운영 활성화",
        "조합원 및 경쟁사 동향 분석 홍보기획 및 홍보 논리 개발시공사 수주 업무 관리",
        "부동산 등 주변 관리, 조합원 방문상담, 교육, 홍보, Camp, M/H 운영",
        "사업설명회 및 이벤트 개최, TM, DM 홍보, 홍보물 제작, 현장 Infra 구축",
        "인력, 예산, 운영 계획 수립",
        "총회 전략 수립",
        "동의서, 서면결의서 징구",
      ],
    },
    {
      category: "인력 파견",
      items: [
        "재개발 재건축 도시환경",
        "수주 기획 및 인력지원",
        "동의서 징구 (서면결의서)",
        "총회 지원",
        "인력뱅크 : 회원 D/B 처리",
        "현장 활동 실적 분석 및 평가",
      ],
    },
    {
      category: "분양 기획 및 대행",
      items: ["APT, 오피스, 오피스텔, 상가분양대행", "마케팅및홍보전략수립"],
    },
  ];

  return (
    <div>
      <h2
        className="mb-10 text-[24.5pt] font-bold text-gray-900"
        style={{ fontFamily: "Pretendard, sans-serif" }}
      >
        업무영역
      </h2>

      <div>
        {rows.map(({ category, items }) => (
          <div key={category} className="flex">
            {/* Left: category label with its own top border segment */}
            <div
              className="flex items-center justify-center border-t border-gray-400 px-6 py-8 text-center text-[13.25pt] font-bold leading-relaxed text-gray-900"
              style={{
                minWidth: "180px",
                width: "180px",
                whiteSpace: "pre-line",
              }}
            >
              {category}
            </div>

            {/* Gap between the two line segments */}
            <div className="w-6 flex-shrink-0" />

            {/* Right: bullet list with its own top border segment */}
            <div className="flex-1 py-7 px-4 border-t border-gray-400">
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12.5pt] leading-relaxed text-gray-700"
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* Final bottom line — also split */}
        <div className="flex">
          <div
            className="border-t border-gray-400"
            style={{ minWidth: "180px", width: "180px" }}
          />
          <div className="w-6 flex-shrink-0" />
          <div className="flex-1 border-t border-gray-400" />
        </div>
      </div>
    </div>
  );
}
