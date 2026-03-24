export const translations = {
  ko: {
    title: "정신연령 테스트",
    subtitle: "무작위로 추출된 15개의 문항으로 당신의 내면을 분석합니다.",
    agePlaceholder: "나이",
    ageUnit: "세",
    startButton: "테스트 시작",
    prevButton: "← 이전 질문으로",
    restartButton: "다시 테스트하기",
    resultTitle: "테스트 결과",
    resultSub: "당신의 정신연령은...",
    comparisonSimilar: "실제 나이와 정신 연령이 아주 비슷하시네요! 건강한 밸런스를 유지하고 있습니다.",
    comparisonOlder: "실제 나이보다 {diff}살 정도 더 깊고 성숙한 생각을 가지고 계시군요.",
    comparisonYounger: "실제 나이보다 {diff}살 정도 더 젊고 유연한 감각을 유지하고 계시네요!",
    indices: {
      childlike: "동심 지수",
      stubborn: "꼰대 지수",
      social: "사회성 지수"
    },
    answers: {
      agreeVery: "매우 그렇다",
      agree: "그렇다",
      neutral: "보통이다",
      disagree: "아니다",
      disagreeVery: "전혀 아니다"
    },
    ageError: "나이를 정확히 입력해 주세요!"
  },
  en: {
    title: "Mental Age Test",
    subtitle: "Analyze your inner self with 15 randomized questions.",
    agePlaceholder: "Age",
    ageUnit: "",
    startButton: "Start Test",
    prevButton: "← Previous",
    restartButton: "Restart Test",
    resultTitle: "Test Result",
    resultSub: "Your mental age is...",
    comparisonSimilar: "Your mental age is very close to your actual age! You have a healthy balance.",
    comparisonOlder: "You are about {diff} years more mature and thoughtful than your actual age.",
    comparisonYounger: "You are about {diff} years younger and more flexible in your senses than your actual age!",
    indices: {
      childlike: "Childlike Index",
      stubborn: "Stubborn Index",
      social: "Social Maturity"
    },
    answers: {
      agreeVery: "Strongly Agree",
      agree: "Agree",
      neutral: "Neutral",
      disagree: "Disagree",
      disagreeVery: "Strongly Disagree"
    },
    ageError: "Please enter a valid age!"
  },
  jp: {
    title: "精神年齢テスト",
    subtitle: "ランダムに抽出された15の質問であなたの内面を分析します。",
    agePlaceholder: "年齢",
    ageUnit: "歳",
    startButton: "テスト開始",
    prevButton: "← 戻る",
    restartButton: "もう一度テストする",
    resultTitle: "テスト結果",
    resultSub: "あなたの精神年齢は...",
    comparisonSimilar: "実年齢と精神年齢がとても近いですね！健康なバランスを保っています。",
    comparisonOlder: "実年齢より{diff}歳ほど深く、成熟した考えを持っていますね。",
    comparisonYounger: "実年齢より{diff}歳ほど若く、柔軟な感覚を持っていますね！",
    indices: {
      childlike: "童心指数",
      stubborn: "頑固指数",
      social: "社会性指数"
    },
    answers: {
      agreeVery: "強くそう思う",
      agree: "そう思う",
      neutral: "普通",
      disagree: "そう思わない",
      disagreeVery: "全くそう思わない"
    },
    ageError: "年齢を正確に入力してください！"
  },
  zh: {
    title: "精神年龄测试",
    subtitle: "通过随机抽取的15道题来分析你的内心世界。",
    agePlaceholder: "年龄",
    ageUnit: "岁",
    startButton: "开始测试",
    prevButton: "← 返回",
    restartButton: "重新测试",
    resultTitle: "测试结果",
    resultSub: "你的精神年龄是...",
    comparisonSimilar: "你的心理年龄和实际年龄非常接近！保持了健康的平衡。",
    comparisonOlder: "你比实际年龄成熟约{diff}岁，思考更加深思熟虑。",
    comparisonYounger: "你比实际年龄年轻约{diff}岁，保持着灵活的感官！",
    indices: {
      childlike: "童心指数",
      stubborn: "顽固指数",
      social: "社会性指数"
    },
    answers: {
      agreeVery: "非常同意",
      agree: "同意",
      neutral: "一般",
      disagree: "不同意",
      disagreeVery: "非常不同意"
    },
    ageError: "请输入正确的年龄！"
  },
  lt: {
    title: "Mentalinio amžiaus testas",
    subtitle: "Išanalizuokite savo vidinį pasaulį su 15 atsitiktinių klausimų.",
    agePlaceholder: "Amžius",
    ageUnit: " m.",
    startButton: "Pradėti testą",
    prevButton: "← Atgal",
    restartButton: "Pradėti iš naujo",
    resultTitle: "Testo rezultatas",
    resultSub: "Jūsų mentalinis amžius yra...",
    comparisonSimilar: "Jūsų mentalinis amžius labai artimas jūsų tikram amžiui! Jūs išlaikote sveiką balansą.",
    comparisonOlder: "Jūs esate apie {diff} metus brandesnis ir mąstantis giliau nei jūsų tikrasis amžius.",
    comparisonYounger: "Jūs esate apie {diff} metus jaunesnis ir lankstesnis nei jūsų tikrasis amžius!",
    indices: {
      childlike: "Vaikiškumo indeksas",
      stubborn: "Užsispyrimo indeksas",
      social: "Socialinė branda"
    },
    answers: {
      agreeVery: "Visiškai sutinku",
      agree: "Sutinku",
      neutral: "Neutralu",
      disagree: "Nesutinku",
      disagreeVery: "Visiškai nesutinku"
    },
    ageError: "Prašome įvesti teisingą amžių!"
  }
};

export type Language = keyof typeof translations;
