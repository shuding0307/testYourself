export type Language = "ko" | "en" | "jp" | "zh" | "lt";

const koData = {
  home: {
    title: "나를 알아가는\n테스트 플랫폼",
    subtitle: "당신의 내면을 들여다보는 시간",
    startButton: "정신연령 테스트",
    startDescription: "내 안에 잠든 진짜 나이는 몇 살일까?",
    dopamineButton: "도파민 중독 테스트",
    dopamineDescription: "나의 뇌는 얼마나 자극에 중독되어 있을까?",
    strengthButton: "나의 강점 테스트",
    strengthDescription: "나만 모르는 나의 특별한 강점은 무엇일까?",
    backToHome: "처음으로",
  },
  title: "정신연령 테스트",
  subtitle: "무작위로 추출된 15개의 문항으로 당신의 내면을 분석합니다.",
  dopamineTitle: "도파민 중독 테스트",
  dopamineSub: "나의 뇌는 얼마나 자극에 중독되어 있을까?",
  strengthTitle: "나의 강점 테스트",
  strengthSub: "숨겨진 당신의 잠재력과 강점을 찾아보세요.",
  agePlaceholder: "나이",
  ageUnit: "세",
  startButton: "테스트 시작",
  prevButton: "← 이전 질문으로",
  restartButton: "다시 테스트하기",
  questionLabel: "질문",
  resultTitle: "테스트 결과",
  resultSub: "당신의 상태는...",
  indices: {
    childlike: "동심 지수",
    stubborn: "꼰대 지수",
    social: "사회성 지수",
    digital: "디지털 의존도",
    food: "자극적 식습관",
    habit: "습관적 탐닉",
    emotion: "정서적 민감도",
    brainTemp: "뇌의 온도",
  },
  brainStatus: {
    cool: "Lv.1 청정 숲의 현자 ",
    warm: "Lv.15 도시의 평범한 시민",
    hot: "Lv.40 자극 사냥꾼",
    burnt: "Lv.99 도파민의 노예",
  },
  answers: {
    agreeVery: "매우 그렇다",
    agree: "그렇다",
    neutral: "보통이다",
    disagree: "아니다",
    disagreeVery: "전혀 아니다",
  },
  ageError: "나이를 정확히 입력해 주세요!",
  results: {
    child: {
      title: "[초딩 멘탈]",
      desc: "호기심 천국, 자기중심적이지만 순수한 영혼.",
    },
    teen: {
      title: "[질풍노도 중고딩]",
      desc: "자의식이 강하고 감정 기복이 있지만 에너지가 넘침.",
    },
    adult: {
      title: "[갓생 사는 어른이]",
      desc: "사회적 예의를 갖췄고 적절히 타협할 줄 아는 상태.",
    },
    sage: {
      title: "[인생 2회차 선비]",
      desc: "해탈의 경지. 어떤 상황에서도 흔들리지 않는 편안함.",
    },
    dopamineLow: {
      title: "🌿 도파민 청정구역 (갓생러)",
      desc: '특징: 일상의 소소한 행복을 즐길 줄 아는 건강한 뇌.\n\n코멘트: "당신은 도파민의 주인입니다! 숲길 산책과 독서를 즐기는 당신, 정말 멋져요."',
    },
    dopamineMid: {
      title: "⚠️ 도파민 경계경보 (평범한 현대인)",
      desc: '특징: 조금씩 스마트폰에 절여지는 중. 가끔 멍 때리기가 필요함.\n\n코멘트: "알림 설정을 끄는 것부터 시작해볼까요? 아직은 돌아올 수 있는 강입니다."',
    },
    dopamineHigh: {
      title: "🔥 도파민 풀충전 (쇼츠 중독자)",
      desc: '특징: 뇌가 쉴 틈 없이 자극을 갈구함. 집중력이 눈에 띄게 떨어졌을 확률 높음.\n\n코멘트: "당신의 뇌는 지금 비명을 지르고 있어요! 스마트폰 스크린 타임을 확인하고 절제가 필요합니다."',
    },
    dopamineDanger: {
      title: "🚨 도파민 디톡스 시급 (브레인 포그)",
      desc: '특징: 자극 없이는 일상 수행이 어려운 상태. 늘 안개 낀 듯 멍한 느낌.\n\n코멘트: "지금 당장 폰을 내려놓으세요! 24시간 디지털 디톡스가 생존을 위해 필요합니다."',
    },
  },
  specialMsgs: {
    childlike:
      "✨ 몸은 어른이지만 마음만은 여전히 순수한 동심을 간직하고 계시네요!",
    stubborn:
      "⚠️ 나이에 비해 생각이 조금 딱딱하게 굳어있을 수 있으니 유연한 사고가 필요해요.",
    social:
      "🤝 타인에 대한 배려와 사회적 성숙도가 매우 높으신 멋진 분이시군요.",
    digitalDetox:
      "📱 디지털 기기 사용을 줄이고 자연과 함께하는 시간을 늘려보세요.",
    meditation: "🧘 명상을 통해 자극 없이도 행복을 느끼는 연습이 필요합니다.",
  },
  comparisonSimilar:
    "실제 나이와 정신 연령이 아주 비슷하시네요! 건강한 밸런스를 유지하고 있습니다.",
  comparisonOlder:
    "실제 나이보다 {diff}살 정도 더 깊고 성숙한 생각을 가지고 계시군요.",
  comparisonYounger:
    "실제 나이보다 {diff}살 정도 더 젊고 유연한 감각을 유지하고 계시네요!",
  dopamineActions: {
    digital: {
      title: "📱 디지털 디톡스 솔루션",
      items: [
        "[아침 폰 확인 방지] 침대와 스마트폰 사이에 물리적 거리 두기 (알람시계 따로 사기)",
        "[식사 중 영상 차단] 식사 전 스마트폰을 보이지 않는 곳에 두거나 화면을 뒤집어 놓기",
        "[무한 스크롤 방지] SNS 앱 사용 제한 시간 설정하기 (스크린 타임 기능 활용)",
        "[수면 질 향상] 취침 1시간 전 '스마트폰 감옥(상자)'에 폰 넣기",
        "[숏폼 중독 탈출] 유튜브 쇼츠 대신 긴 호흡의 다큐멘터리나 영화 한 편 끝까지 보기",
        "[습관적 확인 방지] 스마트폰의 모든 알림을 끄고(방해금지 모드), 흑백 모드 설정하기",
      ],
    },
    food: {
      title: "🍕 미각 정화 솔루션",
      items: [
        "[미각 정화] 가공식품 대신 원재료의 맛을 느낄 수 있는 신선한 채소나 과일 먹기",
        "[수분 섭취] 가짜 허기가 느껴질 때 시원한 물 한 잔 마시고 10분 기다리기",
      ],
    },
    habit: {
      title: "🏃 집중력 강화 솔루션",
      items: [
        "[포모도로 학습] 25분 집중, 5분 휴식 타이머를 활용해 집중 근육 키우기",
        "[소비 디톡스] 사고 싶은 물건이 생기면 장바구니에 담고 48시간 뒤에 다시 보기",
        "[기다림 연습] 엘리베이터나 신호등 앞에서 폰을 꺼내지 않고 주변 풍경 관찰하기",
      ],
    },
    emotion: {
      title: "🧠 정서적 자립 솔루션",
      items: [
        "[멍 때리기] 하루 5분, 아무것도 하지 않고 천장만 보거나 창밖 보기",
        "[오프라인 연결] 온라인 '좋아요' 대신 친구에게 직접 전화하거나 짧은 손편지 써보기",
      ],
    },
  },
};

export type TranslationType = typeof koData;

export const translations: Record<Language, TranslationType> = {
  ko: koData,
  en: {
    home: {
      title: "Self-Discovery\nTest Platform",
      subtitle: "A time to look into your inner self",
      startButton: "Mental Age Test",
      startDescription: "How old is your inner self really?",
      dopamineButton: "Dopamine Addiction Test",
      dopamineDescription: "How much is your brain addicted to stimulation?",
      strengthButton: "Strength Test",
      strengthDescription: "What are your special strengths you didn't know?",
      backToHome: "Home",
    },
    title: "Mental Age Test",
    subtitle: "Analyze your inner self with 15 randomized questions.",
    dopamineTitle: "Dopamine Addiction Test",
    dopamineSub: "How much is your brain addicted to stimulation?",
    strengthTitle: "Strength Test",
    strengthSub: "Discover your hidden potential and strengths.",
    agePlaceholder: "Age",
    ageUnit: "",
    startButton: "Start Test",
    prevButton: "← Previous",
    restartButton: "Restart Test",
    questionLabel: "Question",
    resultTitle: "Test Result",
    resultSub: "Your status is...",
    indices: {
      childlike: "Childlike Index",
      stubborn: "Stubborn Index",
      social: "Social Maturity",
      digital: "Digital Dependency",
      food: "Stimulating Diet",
      habit: "Habitual Indulgence",
      emotion: "Emotional Sensitivity",
      brainTemp: "Brain Temp",
    },
    brainStatus: {
      cool: "Lv.1 Sage of the Pristine Forest",
      warm: "Lv.15 Ordinary City Dweller",
      hot: "Lv.40 Stimulation Hunter",
      burnt: "Lv.99 Slave to Dopamine",
    },
    answers: {
      agreeVery: "Strongly Agree",
      agree: "Agree",
      neutral: "Neutral",
      disagree: "Disagree",
      disagreeVery: "Strongly Disagree",
    },
    ageError: "Please enter a valid age!",
    results: {
      child: {
        title: "[Elementary School Mind]",
        desc: "Curious, self-centered but a pure soul.",
      },
      teen: {
        title: "[Restless Teenager]",
        desc: "Self-conscious with mood swings, but full of energy.",
      },
      adult: {
        title: "[Responsible Adult]",
        desc: "Socially polite and knows how to compromise appropriately.",
      },
      sage: {
        title: "[Old Soul Sage]",
        desc: "State of enlightenment. Comfortable and unshakable in any situation.",
      },
      dopamineLow: {
        title: "Clean Brain (Dopamine Clean)",
        desc: "You maintain inner peace without being swayed by stimulation.",
      },
      dopamineMid: {
        title: "Caution Stage (Dopamine Warning)",
        desc: "You rely on stimulation sometimes, but you can still control yourself.",
      },
      dopamineHigh: {
        title: "Addiction Risk (Dopamine Storm)",
        desc: "You feel bored without strong stimulation, and your concentration has decreased.",
      },
      dopamineDanger: {
        title: "Severe Addiction (Dopamine Slave)",
        desc: "Your brain is soaked in strong stimulation. Digital detox is needed immediately!",
      },
    },
    specialMsgs: {
      childlike:
        "✨ You are an adult, but your heart still holds a pure childlike innocence!",
      stubborn:
        "⚠️ Your thinking might be a bit rigid for your age; flexible thinking is needed.",
      social:
        "🤝 You are a wonderful person with high consideration for others and social maturity.",
      digitalDetox:
        "📱 Reduce your use of digital devices and spend more time with nature.",
      meditation:
        "🧘 You need to practice feeling happy without stimulation through meditation.",
    },
    comparisonSimilar:
      "Your mental age is very close to your actual age! You have a healthy balance.",
    comparisonOlder:
      "Your actual age is about {diff} years more mature and thoughtful than your mental age.",
    comparisonYounger:
      "Your actual age is about {diff} years younger and more flexible in your senses than your mental age!",
    dopamineActions: {
      digital: {
        title: "📱 Digital Detox Solution",
        items: [
          "[Morning Phone Check] Keep a physical distance between bed and smartphone.",
          "[No Video While Eating] Put your phone away or flip it over before meals.",
          "[Anti-Scrolling] Set time limits for social media apps.",
          "[Sleep Quality] Use a 'phone jail' box 1 hour before bedtime.",
          "[Exit Short-form] Watch a long documentary or movie instead of YouTube Shorts.",
          "[Notification Clean] Turn off all notifications and set to Grayscale mode.",
        ],
      },
      food: {
        title: "🍕 Taste Bud Reset",
        items: [
          "[Clean Taste] Eat fresh vegetables or fruits instead of processed foods.",
          "[Hydration] Drink a glass of water and wait 10 minutes when feeling fake hunger.",
        ],
      },
      habit: {
        title: "🏃 Concentration Boost",
        items: [
          "[Pomodoro] Use 25min work / 5min break timers to build focus muscles.",
          "[Shopping Detox] Leave items in the cart for 48 hours before buying.",
          "[Wait Practice] Observe surroundings instead of taking out your phone when waiting.",
        ],
      },
      emotion: {
        title: "🧠 Emotional Independence",
        items: [
          "[Spacing Out] Spend 5 mins a day just looking at the ceiling or out the window.",
          "[Offline Connection] Call or write a short note to a friend instead of 'Likes'.",
        ],
      },
    },
  },
  jp: {
    home: {
      title: "自分を知るための\nテストプラットフォーム",
      subtitle: "あなたの内面を見つめる時間",
      startButton: "精神年齢テスト",
      startDescription: "自分の中に眠る本当の年齢は何歳だろう？",
      dopamineButton: "ドーパミン中毒テスト",
      dopamineDescription: "あなたの脳はどれほど刺激に依存していますか？",
      strengthButton: "あなたの強みテスト",
      strengthDescription: "あなただけが知らないあなたの特別な強みは何でしょうか？",
      backToHome: "ホームへ",
    },
    title: "精神年齢テスト",
    subtitle: "ランダムに抽出された15の質問であなたの内面を分析します。",
    dopamineTitle: "ドーパミン中毒テスト",
    dopamineSub: "あなたの脳はどれほど刺激に依存していますか？",
    strengthTitle: "あなたの強みテスト",
    strengthSub: "隠されたあなたの可能性と強みを見つけてください。",
    agePlaceholder: "年齢",
    ageUnit: "歳",
    startButton: "テスト開始",
    prevButton: "← 戻る",
    restartButton: "もう一度テストする",
    questionLabel: "質問",
    resultTitle: "テスト結果",
    resultSub: "あなたの状態は...",
    indices: {
      childlike: "童心指数",
      stubborn: "頑固指数",
      social: "社会性指数",
      digital: "デジタル依存度",
      food: "刺激的な食習慣",
      habit: "習慣的な耽溺",
      emotion: "情緒的過敏度",
      brainTemp: "脳の温度",
    },
    brainStatus: {
      cool: "Lv.1 清らかな森の賢者",
      warm: "Lv.15 都市の平凡な市民",
      hot: "Lv.40 刺激ハンター",
      burnt: "Lv.99 ドーパミンの奴隷",
    },
    answers: {
      agreeVery: "強くそう思う",
      agree: "そう思う",
      neutral: "普通",
      disagree: "そう思わない",
      disagreeVery: "全くそう思わない",
    },
    ageError: "年齢を正確に入力してください！",
    results: {
      child: {
        title: "[小学生メンタル]",
        desc: "好奇心旺盛で自己中心的ですが、純粋な魂の持ち主。",
      },
      teen: {
        title: "[疾風怒濤の中高生]",
        desc: "自意識が強く、感情の起伏がありますが、エネルギーに満ちています。",
      },
      adult: {
        title: "[立派な大人]",
        desc: "社会的礼儀をわきまえ、適切に妥協することを知っている状態。",
      },
      sage: {
        title: "[人生2回目の隠者]",
        desc: "解脱の境地。どんな状況でも揺るがない心の安らぎ。",
      },
      dopamineLow: {
        title: "クリーンな脳 (ドーパミンクリーン)",
        desc: "刺激に振り回されず、内面の平穏をうまく維持しています。",
      },
      dopamineMid: {
        title: "注意段階 (ドーパミン警告)",
        desc: "時々刺激的なものに依存しますが、自分で調節可能な状態です。",
      },
      dopamineHigh: {
        title: "依存リスク (ドーパミンストーム)",
        desc: "強い刺激がないと退屈を感じ、日常の集中力が低下した状態です。",
      },
      dopamineDanger: {
        title: "深刻な依存 (ドーパミンの奴隷)",
        desc: "脳が強い刺激に染まっています。今すぐデジタルデトックスが必要です！",
      },
    },
    specialMsgs: {
      childlike:
        "✨ 体は大人ですが、心には依然として純粋な童心を秘めていますね！",
      stubborn:
        "⚠️ 年齢のわりに考えが少し凝り固まっているかもしれないので、柔軟な思考が必要です。",
      social: "🤝 他人への配慮と社会的成熟度が非常に高い、素敵な方ですね。",
      digitalDetox:
        "📱 デジタル機器の使用を減らし、自然と過ごす時間を増やしてみてください。",
      meditation: "🧘 瞑想を通じて、刺激がなくても幸せを感じる練習が必要です。",
    },
    comparisonSimilar:
      "実年齢と精神年齢がとても近いです！健康なバランスを維持しています。",
    comparisonOlder:
      "実年齢より {diff} 歳ほど深く成熟した考えを持っていますね。",
    comparisonYounger:
      "실제 나이보다 {diff}살 정도 더 젊고 유연한 감각을 유지하고 계시네요!",
    dopamineActions: {
      digital: {
        title: "📱 デジタルデトックス・ソリューション",
        items: [
          "[起床時のスマホ確認防止] ベッドとスマホの間に物理的な距離を置く (目覚まし時計を別に買う)",
          "[食事中の映像遮断] 食事の前にスマホを見えない場所に置くか、画面を伏せておく",
          "[無限スクロール防止] SNSアプリの使用制限時間を設定する (スクリーンタイム機能の活用)",
          "[睡眠の質向上] 就寝1時間前に「スマホ監獄(ボックス)」にスマホを入れる",
          "[ショート動画中毒脱出] YouTubeショートの代わりに、長いドキュメンタリーや映画を1本最後まで見る",
          "[習慣的な確認防止] スマホのすべての通知を切り（おやすみモード）、モノクロモードを設定する",
        ],
      },
      food: {
        title: "🍕 味覚浄化ソリューション",
        items: [
          "[味覚浄化] 加工食品の代わりに、原材料の味を感じられる新鮮な野菜や果物を食べる",
          "[水分摂取] 偽の空腹を感じたとき、冷たい水を一杯飲んで10分待つ",
        ],
      },
      habit: {
        title: "🏃 集中力強化ソリューション",
        items: [
          "[ポモドーロ学習] 25分集中、5分休憩のタイマーを活用して集中力を鍛える",
          "[消費デトックス] 欲しいものがあればカートに入れ、48時間後に見直す",
          "[待ち時間の練習] エレベーターや信号待ちでスマホを取り出さず、周りの風景を観察する",
        ],
      },
      emotion: {
        title: "🧠 情緒的自立ソリューション",
        items: [
          "[ぼーっとする] 1日5分、何もしないで天井を眺めたり外の景色を見る",
          "[オフラインの繋がり] オンラインの「いいね」の代わりに、友達に直接電話したり短い手紙を書いてみる",
        ],
      },
    },
  },
  zh: {
    home: {
      title: "发现自我的\n测试平台",
      subtitle: "审视内心世界的时刻",
      startButton: "精神年龄测试",
      startDescription: "潜藏在内心的真实年龄是多少岁？",
      dopamineButton: "多巴胺上瘾测试",
      dopamineDescription: "你的大脑对刺激有多依赖？",
      strengthButton: "我的优势测试",
      strengthDescription: "你不知道的自己的特别优势是什么？",
      backToHome: "回到主页",
    },
    title: "精神年龄测试",
    subtitle: "通过随机抽取的15道题来分析你的内心世界。",
    dopamineTitle: "多巴胺上瘾测试",
    dopamineSub: "你的大脑对刺激有多依赖？",
    strengthTitle: "我的优势测试",
    strengthSub: "发现你的隐藏潜力和优势。",
    agePlaceholder: "年龄",
    ageUnit: "岁",
    startButton: "开始测试",
    prevButton: "← 返回",
    restartButton: "重新测试",
    questionLabel: "题目",
    resultTitle: "测试结果",
    resultSub: "你的状态是...",
    indices: {
      childlike: "童心指数",
      stubborn: "顽固指数",
      social: "社会性指数",
      digital: "数字依赖度",
      food: "刺激性饮食",
      habit: "习惯性沉溺",
      emotion: "情绪敏感度",
      brainTemp: "大脑温度",
    },
    brainStatus: {
      cool: "Lv.1 纯净森林的贤者",
      warm: "Lv.15 都市的平凡市民",
      hot: "Lv.40 刺激猎人",
      burnt: "Lv.99 多巴胺的奴隶",
    },
    answers: {
      agreeVery: "非常同意",
      agree: "同意",
      neutral: "一般",
      disagree: "不同意",
      disagreeVery: "非常不同意",
    },
    ageError: "请输入正确的年龄！",
    results: {
      child: {
        title: "[小学生心态]",
        desc: "好奇心强，虽然有些自我中心但灵魂纯洁。",
      },
      teen: {
        title: "[叛逆期青少年]",
        desc: "自我意识强，情绪有起伏但充满活力。",
      },
      adult: {
        title: "[成熟的成年人]",
        desc: "具备社会礼仪，懂得适当妥协的状态。",
      },
      sage: {
        title: "[两世为人的智者]",
        desc: "豁达的境界。在任何情况下都能保持内心的平静。",
      },
      dopamineLow: {
        title: "纯净大脑 (多巴胺排毒)",
        desc: "不被刺激左右，保持着内心的平静。",
      },
      dopamineMid: {
        title: "注意阶段 (多巴胺警告)",
        desc: "偶尔依赖刺激，但仍处于可自我调节的状态。",
      },
      dopamineHigh: {
        title: "上瘾风险 (多巴胺风暴)",
        desc: "没有强烈刺激会感到无聊，日常专注力下降。",
      },
      dopamineDanger: {
        title: "严重上瘾 (多巴胺奴隶)",
        desc: "大脑已沉溺于强烈刺激。急需进行数字脱瘾！",
      },
    },
    specialMsgs: {
      childlike: "✨ 虽然身体是成年人，但内心依然保留着纯真的童心！",
      stubborn: "⚠️ 相比年龄，你的想法可能有点僵化，需要更加灵活的思考。",
      social: "🤝 你是一个非常有教养、社会成熟度很高的人。",
      digitalDetox: "📱 减少电子设备的使用，增加亲近自然的时间。",
      meditation: "🧘 需要通过冥想练习在没有刺激的情况下感受幸福。",
    },
    comparisonSimilar: "你的心理年龄和实际年龄非常接近！保持了健康的平衡。",
    comparisonOlder: "你比实际年龄成熟约{diff}岁，思考更加深思虑。",
    comparisonYounger: "你比实际年龄年轻约{diff}岁，保持着灵活的感官！",
    dopamineActions: {
      digital: {
        title: "📱 数字脱瘾方案",
        items: [
          "[防止早起看手机] 手机与床保持物理距离 (单独买个闹钟)",
          "[吃饭时不看视频] 饭前将手机放在看不见的地方或扣放桌上",
          "[防止无限滚动] 设置社交软件的使用时限 (利用屏幕使用时间功能)",
          "[提高睡眠质量] 睡前1小时将手机关进“手机监狱(盒子)”",
          "[告别短视频成瘾] 用完整的纪录片或电影代替短视频",
          "[防止习惯性检查] 关闭所有通知 (勿扰模式)，开启黑白模式",
        ],
      },
      food: {
        title: "🍕 味觉净化方案",
        items: [
          "[味觉净化] 用新鲜蔬菜水果代替加工食品，感受原汁原味",
          "[水分补充] 感到假性饥饿时先喝一杯水，等待10分钟",
        ],
      },
      habit: {
        title: "🏃 专注力强化方案",
        items: [
          "[番茄工作法] 利用25分钟专注+5分钟休息的计时器锻炼专注力",
          "[消费脱瘾] 有想买的东西先放购物车，48小时后再看",
          "[练习等待] 等电梯或红绿灯时不掏手机，观察周围风景",
        ],
      },
      emotion: {
        title: "🧠 情绪独立方案",
        items: [
          "[发呆练习] 每天5分钟，什么都不做，只看天花板或窗外",
          "[线下连接] 用给朋友打个电话或写张小卡片代替网上的“点赞”",
        ],
      },
    },
  },
  lt: {
    home: {
      title: "Saviraiškos\ntestų platforma",
      subtitle: "Laikas pažvelgti į savo vidinį pasaulį",
      startButton: "Mentalinio amžiaus testas",
      startDescription: "Kiek metų tavo vidiniam aš iš tikrųjų?",
      dopamineButton: "Dopamino priklausomybės testas",
      dopamineDescription:
        "Kiek jūsų smegenys yra priklausomos nuo stimuliacijos?",
      strengthButton: "Mano stiprybių testas",
      strengthDescription: "Kokia yra tavo ypatinga stiprybė, kurios než인ai?",
      backToHome: "Į pradžią",
    },
    title: "Mentalinio amžiaus testas",
    subtitle: "Išanalizuokite savo vidinį pasaulį su 15 atsitiktinių klausimų.",
    dopamineTitle: "Dopamino priklausomybės testas",
    dopamineSub: "Kiek jūsų smegenys yra priklausomos nuo stimuliacijos?",
    strengthTitle: "Mano stiprybių testas",
    strengthSub: "Atraskite savo paslėptą potencialą ir stiprybes.",
    agePlaceholder: "Amžius",
    ageUnit: " m.",
    startButton: "Pradėti testą",
    prevButton: "← Atgal",
    restartButton: "Pradėti iš novo",
    questionLabel: "Klausimas",
    resultTitle: "Testo rezultatas",
    resultSub: "Jūsų būsena...",
    indices: {
      childlike: "Vaikiškumo indeksas",
      stubborn: "Užsispyrimo indeksas",
      social: "Socialinė branda",
      digital: "Skaitmeninė priklausomybė",
      food: "Stimuliuojanti mityba",
      habit: "Įpročių tenkinimas",
      emotion: "Emocinis jautrumas",
      brainTemp: "Smegenų temp.",
    },
    brainStatus: {
      cool: "Lv.1 Tyro miško išminčius ",
      warm: "Lv.15 Paprastas miesto gyventojas",
      hot: "Lv.40 Stimuliacijos medžiotojas",
      burnt: "Lv.99 Dopamino vergas",
    },
    answers: {
      agreeVery: "Visiškai sutinku",
      agree: "Sutinku",
      neutral: "Neutralu",
      disagree: "Nesutinku",
      disagreeVery: "Visiškai nesutinku",
    },
    ageError: "Prašome įvesti teisingą amžių!",
    results: {
      child: {
        title: "[Pradinuko mentalitetas]",
        desc: "Smalsus, egocentriškas, bet grynos sielos.",
      },
      teen: {
        title: "[Maištingas paauglys]",
        desc: "Sąmoningas, su nuotaikų kaita, bet kupinas energijos.",
      },
      adult: {
        title: "[Suaugęs žmogus]",
        desc: "Socialiai mandagus ir mokantis tinkamai eiti į kompromisus.",
      },
      sage: {
        title: "[Sena siela]",
        desc: "Nušvitimo būsena. Patogus ir nepalaužiamas bet kokioje situacijoje.",
      },
      dopamineLow: {
        title: "Švarios smegenys (Dopamino švara)",
        desc: "Išlaikote vidinę ramybę nesileisdami valdomi stimuliacijos.",
      },
      dopamineMid: {
        title: "Atsargumo etapas (Dopamino įspėjimas)",
        desc: "Kartais pasikliaujate stimuliacija, bet vis dar galite save kontroliuoti.",
      },
      dopamineHigh: {
        title: "Priklausomybės rizika (Dopamino audra)",
        desc: "Jaučiate nuobodulį be stiprios stimuliacijos, sumažėjo koncentracija.",
      },
      dopamineDanger: {
        title: "Sunki priklausomybė (Dopamino vergas)",
        desc: "Jūsų smegenys yra persmelktos stiprios stimuliacijos. Skubiai reikia skaitmeninio detokso!",
      },
    },
    specialMsgs: {
      childlike:
        "✨ Nors esate suaugęs, jūsų širdis vis dar saugo tyrą vaikišką nekaltumą!",
      stubborn:
        "⚠️ Jūsų mąstymas gali būti kiek per standus jūsų amžiui; reikia lankstumo.",
      social:
        "🤝 Esate nuostabus žmogus, pasižymintis didele pagarba kitiems ir socialine branda.",
      digitalDetox:
        "📱 Sumažinkite skaitmeninių prietaisų naudojimą ir leiskite daugiau laiko gamtoje.",
      meditation:
        "🧘 Jums reikia praktikuoti laimės pojūtį be stimuliacijos per meditaciją.",
    },
    comparisonSimilar:
      "Jūsų mentalinis amžius labai artimas jūsų tikram amžiui! Jūs išlaikote sveiką balansą.",
    comparisonOlder:
      "Jūs esate apie {diff} metus brandesnis ir mąstantis giliau nei jūsų tikrasis amžius.",
    comparisonYounger:
      "Jūs esate apie {diff} metus jaunesnis ir lankstesnis nei jūsų tikrasis amžius!",
    dopamineActions: {
      digital: {
        title: "📱 Digital Detox Solution",
        items: [
          "[Morning Phone Check] Keep a physical distance between bed and smartphone.",
          "[No Video While Eating] Put your phone away or flip it over before meals.",
          "[Anti-Scrolling] Set time limits for social media apps.",
          "[Sleep Quality] Use a 'phone jail' box 1 hour before bedtime.",
          "[Exit Short-form] Watch a long documentary or movie instead of YouTube Shorts.",
          "[Notification Clean] Turn off all notifications and set to Grayscale mode.",
        ],
      },
      food: {
        title: "🍕 Taste Bud Reset",
        items: [
          "[Clean Taste] Eat fresh vegetables or fruits instead of processed foods.",
          "[Hydration] Drink a glass of water and wait 10 minutes when feeling fake hunger.",
        ],
      },
      habit: {
        title: "🏃 Concentration Boost",
        items: [
          "[Pomodoro] Use 25min work / 5min break timers to build focus muscles.",
          "[Shopping Detox] Leave items in the cart for 48 hours before buying.",
          "[Wait Practice] Observe surroundings instead of taking out your phone when waiting.",
        ],
      },
      emotion: {
        title: "🧠 Emotional Independence",
        items: [
          "[Spacing Out] Spend 5 mins a day just looking at the ceiling or out the window.",
          "[Offline Connection] Call or write a short note to a friend instead of 'Likes'.",
        ],
      },
    },
  },
};
