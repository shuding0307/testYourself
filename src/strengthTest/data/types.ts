export interface StrengthTypeStyle {
  mainColor: string;
  subColor: string;
  atmosphere: string[];
  uiStyle: string;
  point: string;
  gradient?: string;
}

export const strengthTypeStyles: Record<string, StrengthTypeStyle> = {
  "drive_creativity": {
    mainColor: "#FF4D4F",
    subColor: "#FFA39E",
    atmosphere: ["에너지", "속도", "직진"],
    uiStyle: "대각선 요소, 강한 대비, Bold 폰트",
    point: "속도감 있는 그라데이션 (빨강 → 주황)",
    gradient: "linear-gradient(135deg, #FF4D4F, #FF7A45)"
  },
  "empathy_patience": {
    mainColor: "#FF8FB1",
    subColor: "#FFE4EC",
    atmosphere: ["따뜻함", "부드러움", "안정감"],
    uiStyle: "둥근 카드, 그림자 부드럽게, 여백 넉넉",
    point: "블러 + 소프트 그라데이션",
    gradient: "linear-gradient(135deg, #FF8FB1, #FFC0CB)"
  },
  "creativity_drive": {
    mainColor: "#FFD600",
    subColor: "#FFF59D",
    atmosphere: ["톡톡 튐", "창의성", "자유"],
    uiStyle: "랜덤한 도형, 살짝 비대칭 레이아웃",
    point: "형광 느낌 포인트 컬러",
    gradient: "linear-gradient(135deg, #FFD600, #FFF176)"
  },
  "analytical_drive": {
    mainColor: "#3A7AFE",
    subColor: "#D6E4FF",
    atmosphere: ["논리", "차분", "신뢰"],
    uiStyle: "Grid 정렬, 깔끔한 라인, 최소한의 요소",
    point: "데이터 느낌 (선, 점, 그래프 UI)",
    gradient: "linear-gradient(135deg, #3A7AFE, #7ABCFF)"
  },
  "patience_drive": {
    mainColor: "#6B7280",
    subColor: "#D1D5DB",
    atmosphere: ["묵직함", "안정", "지속"],
    uiStyle: "단단한 박스형, 변화 적은 구조",
    point: "무게감 있는 타이포",
    gradient: "linear-gradient(135deg, #6B7280, #9CA3AF)"
  },
  "analytical_empathy": {
    mainColor: "#8B5CF6",
    subColor: "#E9D5FF",
    atmosphere: ["신중", "감각", "디테일"],
    uiStyle: "얇은 선, 미니멀, subtle 애니메이션",
    point: "hover 시 변화 (숨겨진 요소 느낌)",
    gradient: "linear-gradient(135deg, #8B5CF6, #C084FC)"
  },
  "drive_patience": {
    mainColor: "#FF6A00",
    subColor: "#FFD8B5",
    atmosphere: ["집중", "열정", "강도"],
    uiStyle: "Progress bar 강조, 중앙 집중형 레이아웃",
    point: "퍼센트 UI (집착 느낌 핵심)",
    gradient: "linear-gradient(135deg, #FF6A00, #FF9500)"
  },
  "patience_creativity": {
    mainColor: "#34D399",
    subColor: "#D1FAE5",
    atmosphere: ["여유", "힐링", "자연"],
    uiStyle: "곡선형 요소, 느린 애니메이션",
    point: "파도 느낌 gradient",
    gradient: "linear-gradient(135deg, #34D399, #6EE7B7)"
  },
  "empathy_drive": {
    mainColor: "#FF3CAC",
    subColor: "#784BA0",
    atmosphere: ["활기", "소셜", "에너지"],
    uiStyle: "그라데이션 강하게, 이모지 / 아이콘 적극 사용",
    point: "네온 느낌",
    gradient: "linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
  },
  "empathy_creativity": {
    mainColor: "#4FACFE",
    subColor: "#00F2FE",
    atmosphere: ["감정 변화", "흐름", "깊이"],
    uiStyle: "물결 형태, 그라데이션 애니메이션",
    point: "컬러가 자연스럽게 변하는 UI",
    gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
  }
};
