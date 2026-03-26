export type Language = "ko" | "en" | "jp" | "zh" | "lt";

export const commonTranslations = {
  ko: {
    home: {
      title: "나를 알아가는\n테스트 플랫폼",
      subtitle: "당신의 내면을 들여다보는 시간",
      startButton: "정신연령 테스트",
      startDescription: "내 안에 잠든 진짜 나이는 몇 살일까?",
      mentalTags: "#정신연령 #자아탐구",
      dopamineButton: "도파민 중독 테스트",
      dopamineDescription: "나의 뇌는 얼마나 자극에 중독되어 있을까?",
      dopamineTags: "#도파민 #중독체크",
      strengthButton: "나의 강점 테스트",
      strengthDescription: "나만 모르는 나의 특별한 강점은 무엇일까?",
      strengthTags: "#나의강점 #잠재력",
      dessertButton: "디저트 성격 테스트",
      dessertDescription: "나는 어떤 달콤함을 닮았을까?",
      dessertTags: "#디저트 #성격유형",
      relationshipButton: "연애 타입 테스트",
      relationshipDescription: "당신은 어떤 사랑을 하고 있나요?",
      relationshipTags: "#연애스타일 #심리테스트",
      backToHome: "메인으로",
    },
    footer: {
      about: "소개",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      contact: "문의하기",
      rights: "© 2026 Naora. All rights reserved.",
      description:
        "Naora는 다양한 테스트를 통해 자신의 성향과 감정을 더 깊이 이해할 수 있도록 돕는 심리 테스트 플랫폼입니다. 각 테스트는 일상 속 행동 패턴과 심리 이론을 참고해 구성되었으며, 누구나 공감할 수 있는 인사이트를 제공하는 것을 목표로 합니다. 본 결과는 재미와 참고를 위한 콘텐츠로, 자신을 돌아보는 하나의 가벼운 계기로 활용해 주세요.",
    },
    contact: {
      title: "문의하기",
      subtitle: "궁금한 점이나 피드백이 있으신가요?",
      description:
        "서비스 이용 중 불편한 점이나 제안하고 싶은 아이디어가 있다면 언제든 알려주세요. 여러분의 소중한 의견은 서비스 개선에 큰 도움이 됩니다.",
      emailLabel: "이메일 주소",
      revealButton: "이메일 보기",
      copyButton: "주소 복사",
      copied: "복사되었습니다!",
      businessHours: "평일 기준 2~3일 내에 답변을 드리도록 노력하겠습니다.",
    },
    privacy: {
      title: "개인정보처리방침",
      lastUpdated: "최종 수정일: 2026년 3월 25일",
      sections: [
        {
          title: "1. 개인정보의 수집",
          content:
            "Naora는 사용자를 식별할 수 있는 개인정보를 수집하지 않습니다. 다만, 서비스 개선을 위해 연령대, 지역 등 개인을 식별할 수 없는 비식별 통계 데이터는 수집될 수 있습니다.",
        },
        {
          title: "2. 이용 목적",
          content:
            "수집된 비식별 데이터는 오직 테스트 결과 생성(재미 및 자기 성찰)과 광고 환경 최적화를 위해서만 사용됩니다.",
        },
        {
          title: "3. 보유 기간",
          content:
            "모든 데이터는 세션 기반으로 일시적으로 유지되며, 브라우저 탭을 닫거나 페이지를 새로고침할 경우 즉시 삭제됩니다.",
        },
        {
          title: "4. 쿠키 및 광고 식별자",
          content:
            "본 사이트는 Google AdSense 및 Google Analytics와 같은 제3자 서비스를 사용하여 사용자의 관심사에 따른 맞춤형 광고를 제공하고 트래픽을 분석합니다. 이 과정에서 쿠키나 광고 식별자가 사용될 수 있습니다.",
        },
        {
          title: "5. 제3자 서비스",
          content:
            "광고 및 분석을 위해 Google의 서비스를 이용하며, 해당 서비스 제공업체는 자체적인 개인정보 처리방침을 따릅니다.",
        },
        {
          title: "6. 데이터 보안",
          content:
            "통계용 데이터는 암호화되어 안전한 프로토콜을 통해 전송 및 보호됩니다. 사용자의 프라이버시 보호를 최우선으로 합니다.",
        },
        {
          title: "7. 문의처",
          content:
            "개인정보 보호와 관련된 문의사항은 하단의 '문의하기' 섹션에 기재된 이메일을 통해 연락해 주시기 바랍니다.",
        },
      ],
    },
    terms: {
      title: "이용약관",
      lastUpdated: "최종 수정일: 2026년 3월 25일",
      sections: [
        {
          title: "1. 서비스 목적",
          content:
            "Naora는 재미와 자기 성찰을 돕기 위한 심리 테스트 콘텐츠를 제공합니다.",
        },
        {
          title: "2. 서비스 이용",
          content:
            "본 서비스는 오직 오락 목적으로만 제공됩니다. 어떠한 경우에도 의학적, 심리적 또는 전문적인 진단이나 조언을 대신할 수 없습니다.",
        },
        {
          title: "3. 책임의 한계",
          content:
            "사용자가 테스트 결과를 바탕으로 내린 결정이나 행동에 대해 본 서비스는 어떠한 법적 책임도 지지 않습니다. 서비스 이용은 사용자의 자발적 판단에 따릅니다.",
        },
        {
          title: "4. 저작권",
          content:
            "본 사이트의 디자인, 로직, 질문 문항 및 결과 텍스트를 포함한 모든 콘텐츠의 지적 재산권은 Naora에 있습니다.",
        },
        {
          title: "5. 서비스 변경 및 중단",
          content:
            "운영상의 필요에 따라 사전 고지 없이 서비스 내용이 변경되거나 일시 중단될 수 있습니다.",
        },
        {
          title: "6. 사용자의 의무",
          content:
            "사용자는 서비스를 해킹하거나 역설계해서는 안 되며, 콘텐츠를 무단으로 배포하거나 상업적으로 이용해서는 안 됩니다.",
        },
        {
          title: "7. 준거법",
          content: "본 약관은 대한민국 법률에 따라 해석되고 규율됩니다.",
        },
      ],
    },
    about: {
      title: "✨ About Naora",
      description:
        "Naora는 자신을 조금 더 이해하고 싶은 순간에서 시작된 심리 테스트 플랫폼입니다.\n우리는 일상 속에서 자연스럽게 드러나는 선택과 행동을 바탕으로, 누구나 공감할 수 있는 질문과 결과를 만들고자 합니다.",
      whyTitle: "💡 왜 만들었나요?",
      whyContent:
        "가끔은 “나는 왜 이런 선택을 할까?” “연애할 때 왜 항상 비슷한 패턴일까?” 이런 생각이 들 때가 있습니다.\nNaora는 이런 작은 궁금증에서 출발해 자신의 성향과 감정을 가볍게 돌아볼 수 있는 경험을 제공하고자 만들어졌습니다.",
      howTitle: "🧠 어떤 방식인가요?",
      howContent:
        "각 테스트는 심리 이론과 실제 행동 패턴을 참고해 구성되며, 결과는 사용자가 자신의 모습을 더 쉽게 이해할 수 있도록 돕는 데 초점을 맞추고 있습니다.\n다만, 모든 결과는 재미와 참고를 위한 콘텐츠이며 전문적인 진단이나 상담을 대체하지 않습니다.",
      valuesTitle: "🌱 우리가 중요하게 생각하는 것",
      values: [
        "누구나 공감할 수 있는 결과",
        "부담 없이 즐길 수 있는 경험",
        "나를 조금 더 이해하는 계기",
      ],
      outro:
        "앞으로 더 다양한 테스트와 기능을 통해, 자신을 이해하는 경험을 확장해 나갈 예정입니다.",
    },
    common: {
      startButton: "테스트 시작",
      prevButton: "← 이전 질문으로",
      restartButton: "다시 테스트하기",
      questionLabel: "질문",
      resultTitle: "테스트 결과",
      resultSub: "당신의 상태는...",
      agePlaceholder: "나이",
      ageUnit: "세",
      ageError: "나이를 정확히 입력해 주세요!",
    },
    answers: {
      agreeVery: "매우 그렇다",
      agree: "그렇다",
      neutral: "보통이다",
      disagree: "아니다",
      disagreeVery: "전혀 아니다",
    },
  },
  en: {
    home: {
      title: "Self-Discovery\nTest Platform",
      subtitle: "A time to look into your inner self",
      startButton: "Mental Age Test",
      startDescription: "How old is your inner self really?",
      mentalTags: "#MentalAge #SelfDiscovery",
      dopamineButton: "Dopamine Addiction Test",
      dopamineDescription: "How much is your brain addicted to stimulation?",
      dopamineTags: "#Dopamine #Addiction",
      strengthButton: "Strength Test",
      strengthDescription: "What are your special strengths you didn't know?",
      strengthTags: "#MyStrength #Potential",
      dessertButton: "Dessert Personality Test",
      dessertDescription: "What kind of sweetness are you?",
      dessertTags: "#Dessert #Personality",
      relationshipButton: "Relationship Type Test",
      relationshipDescription: "What kind of love are you in?",
      relationshipTags: "#LoveStyle #Psychology",
      backToHome: "Home",
    },
    footer: {
      about: "About",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      rights: "© 2026 Naora. All rights reserved.",
      description:
        "Naora is a psychological testing platform that helps you gain a deeper understanding of your personality and emotions through various tests. Each test is designed based on daily behavior patterns and psychological theories, aiming to provide insights that anyone can relate to. Please use these results for fun and reference, as a lighthearted opportunity for self-reflection.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have any questions or feedback?",
      description:
        "If you have any inconveniences or ideas to suggest while using the service, please let us know at any time. Your valuable feedback is a great help in improving the service.",
      emailLabel: "Email Address",
      revealButton: "Show Email",
      copyButton: "Copy Address",
      copied: "Copied!",
      businessHours: "We will try to respond within 2-3 business days.",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 25, 2026",
      sections: [
        {
          title: "1. Information Collection",
          content:
            "Naora does not collect identifiable personal information. However, minimal de-identified statistical data (such as age range and region) may be collected to improve our services.",
        },
        {
          title: "2. Purpose of Use",
          content:
            "Data is used solely for generating test results (for entertainment and self-reflection) and for advertisement optimization.",
        },
        {
          title: "3. Retention Period",
          content:
            "Data is temporary and session-based. It is immediately deleted when you close the browser tab or refresh the page.",
        },
        {
          title: "4. Cookies and Ad Identifiers",
          content:
            "We use third-party services like Google AdSense and Google Analytics, which may use cookies or advertising identifiers to serve personalized ads based on your interests and analyze traffic.",
        },
        {
          title: "5. Third-Party Services",
          content:
            "We utilize Google services for ads and analytics. These providers operate under their own privacy policies.",
        },
        {
          title: "6. Data Security",
          content:
            "Statistical data is encrypted and protected using secure transmission protocols. We prioritize the protection of your privacy.",
        },
        {
          title: "7. Contact Information",
          content:
            "For inquiries regarding privacy, please contact us via the email provided in the 'Contact' section.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 25, 2026",
      sections: [
        {
          title: "1. Purpose of the Service",
          content:
            "Naora provides psychological test content intended for entertainment and self-reflection purposes.",
        },
        {
          title: "2. Service Usage",
          content:
            "This service is for entertainment only. It is not a substitute for medical, psychological, or professional diagnosis or advice.",
        },
        {
          title: "3. Limitation of Liability",
          content:
            "We assume no legal responsibility for any decisions or actions taken by users based on the test results. Use the service at your own discretion.",
        },
        {
          title: "4. Copyright",
          content:
            "All content, including design, code logic, test questions, and results, is the intellectual property of Naora.",
        },
        {
          title: "5. Service Changes/Suspension",
          content:
            "We reserve the right to modify or suspend the service at any time without prior notice.",
        },
        {
          title: "6. User Obligations",
          content:
            "Users must not attempt to hack, reverse engineer, or distribute the content without authorization.",
        },
        {
          title: "7. Governing Law",
          content:
            "These terms are governed by and construed in accordance with the laws of the Republic of Korea.",
        },
      ],
    },
    about: {
      title: "✨ About Naora",
      description:
        "Naora is a psychological testing platform born from moments when we want to understand ourselves a little better.\nWe aim to create questions and results that anyone can relate to, based on the choices and behaviors that naturally emerge in daily life.",
      whyTitle: "💡 Why did we create this?",
      whyContent:
        "Sometimes we wonder, 'Why do I make these choices?' or 'Why do I always have similar patterns in relationships?'\nNaora was created to provide an experience where you can lightly reflect on your tendencies and emotions, starting from these small curiosities.",
      howTitle: "🧠 How does it work?",
      howContent:
        "Each test is constructed with reference to psychological theories and actual behavioral patterns. The results focus on helping users understand themselves more easily.\nHowever, all results are for fun and reference and do not replace professional diagnosis or counseling.",
      valuesTitle: "🌱 What we value",
      values: [
        "Results that anyone can relate to",
        "An experience to enjoy without burden",
        "An opportunity to understand myself a little more",
      ],
      outro:
        "We plan to expand the experience of understanding yourself through a wider variety of tests and features in the future.",
    },
    common: {
      startButton: "Start Test",
      prevButton: "← Previous",
      restartButton: "Restart Test",
      questionLabel: "Question",
      resultTitle: "Test Result",
      resultSub: "Your status is...",
      agePlaceholder: "Age",
      ageUnit: "",
      ageError: "Please enter a valid age!",
    },
    answers: {
      agreeVery: "Strongly Agree",
      agree: "Agree",
      neutral: "Neutral",
      disagree: "Disagree",
      disagreeVery: "Strongly Disagree",
    },
  },
  jp: {
    home: {
      title: "自分を知るための\nテストプラットフォーム",
      subtitle: "あなたの内面を見つめる時間",
      startButton: "精神年齢テスト",
      startDescription: "自分の中に眠る本当의年齢は何歳だろう？",
      mentalTags: "#精神年齢 #自己分析",
      dopamineButton: "ドーパミン中毒テスト",
      dopamineDescription: "あなたの脳はどれほど刺激に依存していますか？",
      dopamineTags: "#ドーパミン #依存度チェック",
      strengthButton: "あなたの強みテスト",
      strengthDescription:
        "あなただけが知らないあなたの特別な強みは何でしょうか？",
      strengthTags: "#私の強み #ポテンシャル",
      dessertButton: "デザート性格診断",
      dessertDescription: "あなたはどんな甘さに似ていますか？",
      dessertTags: "#デザート #性格診断",
      relationshipButton: "恋愛タイプ診断",
      relationshipDescription: "あなたはどのような恋愛をしていますか？",
      relationshipTags: "#恋愛スタイル #心理テスト",
      backToHome: "ホームへ",
    },
    footer: {
      about: "紹介",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      rights: "© 2026 Naora. All rights reserved.",
      description:
        "Naoraは、様々なテストを通じて自分の傾向や感情をより深く理解できるよう支援하는心理テストプラットフォームです。各テストは日常の行動パターンや心理学の理論を参考に構成されており、誰もが共感できるインサイトを提供することを目指しています。本結果は楽しみと参考のためのコンテンツとして、自分を振り返る一つの気軽なきっかけとして活用してください。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご質問やフィードバックはありますか？",
      description:
        "サービスの利用中に不便な点や提案したいアイデアがあれば、いつでもお知らせください。皆様の貴重なご意見は、サービスの改善に役立てさせていただきます。",
      emailLabel: "メールアドレス",
      revealButton: "メールを表示",
      copyButton: "アドレスをコピー",
      copied: "コピーしました！",
      businessHours: "平日基準で2〜3日以内に回答できるよう努めます。",
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日: 2026年3月25日",
      sections: [
        {
          title: "1. 情報の収集",
          content:
            "Naora は、ユーザーを特定できる個人情報を収集しません。ただし、サービス向上のため、年齢層や地域など、個人を特定できない非識別統計データを収集する場合があります。",
        },
        {
          title: "2. 利用目的",
          content:
            "収集された非識別データは、テスト結果の生成（娯楽および自己省察）と広告環境の最適化のためにのみ使用されます。",
        },
        {
          title: "3. 保存期間",
          content:
            "すべてのデータはセッションベースで一時的に保持され、ブラウザのタブを閉じるかページを更新すると即座に削除されます。",
        },
        {
          title: "4. クッキーおよび広告識別子",
          content:
            "当サイトは Google AdSense および Google Analytics などの第三者サービスを使用して、ユーザーの興味に基づいたパーソナライズ広告の提供やトラフィック分析を行います。この過程でクッキーや広告識別子が使用されることがあります。",
        },
        {
          title: "5. 第三者サービス",
          content:
            "広告および分析のために Google のサービスを利用しており、これらのプロバイダーは独自のプライバシーポリシーに従って運用されています。",
        },
        {
          title: "6. データセキュリティ",
          content:
            "統計用データは暗号化され、安全なプロトコルを通じて送信および保護されます。ユーザーのプライバシー保護を最優先事項としています。",
        },
        {
          title: "7. お問い合わせ",
          content:
            "プライバシーに関するお問い合わせは、お問い合わせセクションに記載されているメールアドレスまでご連絡ください。",
        },
      ],
    },
    terms: {
      title: "利用規約",
      lastUpdated: "最終更新日: 2026年3月25日",
      sections: [
        {
          title: "1. サービスの目的",
          content:
            "Naora は、娯楽と自己省察を目的とした心理テストコンテンツを提供します。",
        },
        {
          title: "2. サービスの利用",
          content:
            "本サービスは娯楽目的のみで提供されています。いかなる場合も、医学的、心理的、または専門的な診断や助言に代わるものではありません。",
        },
        {
          title: "3. 責任の制限",
          content:
            "ユーザーがテスト結果に基づいて下した決定や行動について、本サービスは一切의法的責任を負いません。サービスの利用はユーザー自身の判断で行ってください。",
        },
        {
          title: "4. 著作権",
          content:
            "デザイン、ロジック、質問項目、結果テキストを含む当サイトのすべてのコンテンツの知的財産権は Naora に帰属します。",
        },
        {
          title: "5. サービスの変更・中断",
          content:
            "運営上の必要に応じて、事前の通知なしにサービス内容の変更や一時的な中断を行う場合があります。",
        },
        {
          title: "6. ユーザーの義務",
          content:
            "ユーザーはサービスのハッキングやリバースエンジニアリングを行ってはならず、コンテンツを無断で配布したり商業的に利用したりしてはなりません。",
        },
        {
          title: "7. 準拠法",
          content: "本規約は大韓民国の法律に従って解釈され、規定されます。",
        },
      ],
    },
    about: {
      title: "✨ Naora について",
      description:
        "Naora は、自分自身をもう少し理解したいと思った瞬間から始まった心理テストプラットフォームです。\n私たちは、日常の中で自然に現れる選択や行動に基づき、誰もが共感できる質問と結果を作ることを目指しています。",
      whyTitle: "💡 なぜ作ったのですか？",
      whyContent:
        "「なぜ自分はこのような選択をするのだろう？」「恋愛をするとき、なぜいつも似たようなパターンなんだろう？」ふとそんな風に思うことがあります。\nNaora は、こうした小さな疑問から出発し、自分の傾向や感情を気軽に振り返ることができる体験を提供するために作られました。",
      howTitle: "🧠 どのような仕組みですか？",
      howContent:
        "各テストは心理学の理論や実際の行動パターンを参考に構成されており、結果はユーザーが自分自身の姿をより簡単に理解できるよう手助けすることに焦点を当てています。\nただし、すべての結果は楽しみと参考のためのコンテンツであり、専門的な診断やカウンセリングに代わるものではありません。",
      valuesTitle: "🌱 私たちが大切にしていること",
      values: [
        "誰もが共感できる結果",
        "負担なく楽しめる体験",
        "自分をもう少し理解するきっかけ",
      ],
      outro:
        "今後、より多様なテストや機能を通じて、自分自身を理解する体験を広げていく予定です。",
    },
    common: {
      startButton: "테스트 시작",
      prevButton: "← 戻る",
      restartButton: "もう一度テストする",
      questionLabel: "質問",
      resultTitle: "テスト結果",
      resultSub: "あなたの状態は...",
      agePlaceholder: "年齢",
      ageUnit: "歳",
      ageError: "年齢を正確に入力してください！",
    },
    answers: {
      agreeVery: "強くそう思う",
      agree: "そう思う",
      neutral: "普通",
      disagree: "そう思わない",
      disagreeVery: "全くそう思うわない",
    },
  },
  zh: {
    home: {
      title: "发现自我的\n测试平台",
      subtitle: "审视内心世界的时刻",
      startButton: "精神年龄测试",
      startDescription: "潜藏在内心的真实年龄是多少岁？",
      mentalTags: "#精神年龄 #自我发现",
      dopamineButton: "多巴胺上瘾测试",
      dopamineDescription: "你的大脑对刺激有多依赖？",
      dopamineTags: "#多巴胺 #成瘾检查",
      strengthButton: "我的优势测试",
      strengthDescription: "你不知道的自己的特别优势是什么？",
      strengthTags: "#我的优势 #潜力",
      dessertButton: "甜点性格测试",
      dessertDescription: "你像哪种甜味？",
      dessertTags: "#甜点 #性格测试",
      relationshipButton: "恋爱类型测试",
      relationshipDescription: "你正在谈什么样的恋爱？",
      relationshipTags: "#恋爱风格 #心理测试",
      backToHome: "回到主页",
    },
    footer: {
      about: "关于",
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系我们",
      rights: "© 2026 Naora. All rights reserved.",
      description:
        "Naora 是一个心理测试平台，通过各种测试帮助您更深入地了解自己的性格和情感。每个测试都参考了日常行为模式和心理学理论，旨在提供任何人都能产生共鸣的见解。本结果仅供娱乐和参考，请将其作为反思自我的一种轻松契机。",
    },
    contact: {
      title: "联系我们",
      subtitle: "有任何问题 or 反馈吗？",
      description:
        "如果您在服务使用过程中有任何不便或想提议的想法，请随时告诉我们。您的宝贵意见对改进服务大有帮助。",
      emailLabel: "电子邮件地址",
      revealButton: "显示电子邮件",
      copyButton: "复制地址",
      copied: "已复制！",
      businessHours: "我们将努力在 2-3 个工作日内给予答复。",
    },
    privacy: {
      title: "隐私政策",
      lastUpdated: "最后更新日期：2026年3月25日",
      sections: [
        {
          title: "1. 信息收集",
          content:
            "Naora 不收集可识别用户的个人信息。但是，为了改进服务，可能会收集年龄段、地区等经过去标识化的统计数据。",
        },
        {
          title: "2. 使用目的",
          content:
            "数据仅用于生成测试结果（娱乐和自我反思）以及优化广告体验。",
        },
        {
          title: "3. 保留期限",
          content:
            "所有数据均基于会话临时保存，当您关闭浏览器标签或刷新页面时将立即删除。",
        },
        {
          title: "4. Cookie 和广告标识符",
          content:
            "我们使用 Google AdSense 和 Google Analytics 等第三方服务，这些服务可能会使用 Cookie 或广告标识符根据您的兴趣提供个性化广告并分析流量。",
        },
        {
          title: "5. 第三方服务",
          content:
            "我们利用 Google 服务进行广告 and 分析。这些提供商根据其各自的隐私政策运营。",
        },
        {
          title: "6. 데이터 security",
          content:
            "统计数据经过加密，并通过安全协议进行传输 and 保护。我们优先保护用户的隐私。",
        },
        {
          title: "7. 联系信息",
          content:
            "有关隐私的咨询，请通过“联系我们”部分提供的电子邮件与我们联系。",
        },
      ],
    },
    terms: {
      title: "服务条款",
      lastUpdated: "最后更新日期：2026年3月25日",
      sections: [
        {
          title: "1. 服务目的",
          content: "Naora 提供旨在娱乐和自我反思的心理测试内容。",
        },
        {
          title: "2. 服务使用",
          content:
            "本服务仅供娱乐。它不能替代医学、心理 or 专业的诊断 or 建议。",
        },
        {
          title: "3. 责任限制",
          content:
            "对于用户根据测试结果做出的任何决定 or 采取的行动，我们不承担任何法律责任。请自行决定是否使用本服务。",
        },
        {
          title: "4. 版权",
          content:
            "所有内容，包括设计、代码逻辑、测试问题 and 结果，均为 Naora 的知识产权。",
        },
        {
          title: "5. 服务变更/暂停",
          content: "我们保留随时修改 or 暂停服务的权利，恕不另行通知。",
        },
        {
          title: "6. 用户义务",
          content: "用户不得尝试黑客攻击、逆向工程 or 擅自分发内容。",
        },
        {
          title: "7. 适用法律",
          content: "本条款受大韩民国法律管辖并按其解释。",
        },
      ],
    },
    about: {
      title: "✨ 关于 Naora",
      description:
        "Naora 是一个始于想要多了解自己一点的瞬间的心理测试平台。\n我们旨在以日常生活中自然显现的选择和行为为基础，创造任何人都能产生共鸣的问题和结果。",
      whyTitle: "💡 为什么创建它？",
      whyContent:
        "有时我们会想，“我为什么会做出这种选择？”“为什么恋爱时总是有相似的模式？”\nNaora 始于这些小小的疑虑，旨在提供一个可以轻松回顾自己倾向 and 情感的体验。",
      howTitle: "🧠 它是如何运作的？",
      howContent:
        "每个测试都参考了心理学理论 and 实际行为模式，结果侧重于帮助用户更轻松地了解自己。\n但是，所有结果仅供娱乐 and 参考，不能替代专业的诊断 or 咨询。",
      valuesTitle: "🌱 我们重视的事情",
      values: [
        "任何人都能产生共鸣的结果",
        "可以毫无负担享受的体验",
        "多了解自己一点的契机",
      ],
      outro: "未来，我们将通过更多样化的测试 and 功能，不断扩展了解自我的体验。",
    },
    common: {
      startButton: "开始测试",
      prevButton: "← 返回",
      restartButton: "重新测试",
      questionLabel: "题目",
      resultTitle: "测试结果",
      resultSub: "你的状态...",
      agePlaceholder: "年龄",
      ageUnit: "岁",
      ageError: "请输入正确的年龄！",
    },
    answers: {
      agreeVery: "非常同意",
      agree: "同意",
      neutral: "一般",
      disagree: "不同意",
      disagreeVery: "非常不同意",
    },
  },
  lt: {
    home: {
      title: "Saviraiškos\ntestų platforma",
      subtitle: "Laikas pažvelgti į savo vidinį pasaulį",
      startButton: "Mentalinio amžiaus testas",
      startDescription: "Kiek metų tavo vidiniam aš iš tikrųjų?",
      mentalTags: "#PsichologinisAmžius #SavęsPažinimas",
      dopamineButton: "Dopamino priklausomybės testas",
      dopamineDescription:
        "Kiek jūsų smegenys yra priklausomos nuo stimuliacijos?",
      dopamineTags: "#Dopaminas #Priklausomybė",
      strengthButton: "Mano stiprybių testas",
      strengthDescription: "Kokia yra tavo ypatinga stiprybė, kurios než인ai?",
      strengthTags: "#ManoStiprybė #Potencialas",
      dessertButton: "Deserto asmenybės testas",
      dessertDescription: "Kokio saldumo esi tu?",
      dessertTags: "#Desertas #Asmenybė",
      relationshipButton: "Santykių tipo testas",
      relationshipDescription: "Kokią meilę jūs išgyvenate?",
      relationshipTags: "#MeilėsStilius #PsichologinisTestas",
      backToHome: "Į pradžią",
    },
    footer: {
      about: "Apie",
      privacy: "Privatumo politika",
      terms: "Naudojimo taisyklės",
      contact: "Kontaktai",
      rights: "© 2026 Naora. All rights reserved.",
      description:
        "„Naora“ yra psichologinių testų platforma, padedanti giliau suprasti savo asmenybę ir emocijas atliekant įvairius testus. Kiekvienas testas sukurtas remiantis kasdienio elgesio modeliais ir psichologinėmis teorijomis, siekiant pateikti įžvalgas, su kuriomis galėtų susitapatinti kiekvienas. Prašome šiuos rezultatus naudoti pramogai ir kaip informacinio pobūdžio turinį – tai lengvas būdas geriau pažinti save.",
    },
    contact: {
      title: "Kontaktai",
      subtitle: "Turite klausimų ar atsiliepimų?",
      description:
        "Jei naudojantis paslauga iškilo kokių nors nepatogumų arba turite idėjų, kurias norėtumėte pasiūlyti, praneškite mums bet kuriuo metu. Jūsų vertingi atsiliepimai labai padeda tobulinti paslaugą.",
      emailLabel: "El. pašto adresas",
      revealButton: "Rodyti el. paštą",
      copyButton: "Kopijuoti adresą",
      copied: "Nukopijuota!",
      businessHours: "Pasistengsime atsakyti per 2–3 darbo dienas.",
    },
    privacy: {
      title: "Privatumo politika",
      lastUpdated: "Paskutinį kartą atnaujinta: 2026 m. kovo 25 d.",
      sections: [
        {
          title: "1. Informacijos rinkimas",
          content:
            "„Naora“ nerenka identifikuojamos asmeninės informacijos. Tačiau siekiant tobulinti paslaugas, gali būti renkami nuasmeninti statistiniai duomenys (pvz., amžiaus grupė ir regionas).",
        },
        {
          title: "2. Naudojimo tikslas",
          content:
            "Duomenys naudojami tik testų rezultatams generuoti (pramogai ir savirefleksijai) bei reklamos optimizavimui.",
        },
        {
          title: "3. Saugojimo laikotarpis",
          content:
            "Duomenys yra laikinai saugomi sesijos metu ir yra nedelsiant ištrinami, kai uždarote naršyklės kortelę arba atnaujinate puslapį.",
        },
        {
          title: "4. Slapukai ir reklamos identifikatoriai",
          content:
            "Mes naudojame trečiųjų šalių paslaugas, tokias kaip „Google AdSense“ ir „Google Analytics“, kurios gali naudoti slapukus ar reklamos identifikatorius, kad pateiktų personalizuotas reklamas pagal jūsų interesus ir analizuotų srautą.",
        },
        {
          title: "5. Trečiųjų šalių paslaugos",
          content:
            "Reklamai ir analitikai naudojame „Google“ paslaugas. Šie teikėjai veikia pagal savo privatumo politikas.",
        },
        {
          title: "6. Duomenų saugumas",
          content:
            "Statistiniai duomenys yra užšifruojami ir saugomi naudojant saugius perdavimo protokolus. Mes teikiame pirmenybę jūsų privatumo apsaugai.",
        },
        {
          title: "7. Kontaktinė informacija",
          content:
            "Jei turite klausimų dėl privatumo, susisiekite su mumis el. paštu, nurodytu skiltyje „Kontaktai“.",
        },
      ],
    },
    terms: {
      title: "Naudojimo taisyklės",
      lastUpdated: "Paskutinį kartą atnaujinta: 2026 m. kovo 25 d.",
      sections: [
        {
          title: "1. Paslaugos tikslas",
          content:
            "„Naora“ teikia psichologinių testų turinį, skirtą pramogai ir savirefleksijai.",
        },
        {
          title: "2. Paslaugos naudojimas",
          content:
            "Ši paslauga skirta tik pramogai. Ji nepakeičia medicininės, psichologinės ar profesionalios diagnozės ar patarimo.",
        },
        {
          title: "3. Atsakomybės ribojimas",
          content:
            "Mes neprisiimame jokios teisinės atsakomybės už bet kokius vartotojų sprendimus ar veiksmus, priimtus remiantis testų rezultatais. Paslauga naudojatės savo pačių nuožiūra.",
        },
        {
          title: "4. Autorių teisės",
          content:
            "Visas turinys, įskaitant dizainą, kodo logiką, testų klausimus ir rezultatus, yra „Naora“ intelektinė nuosavybė.",
        },
        {
          title: "5. Paslaugos pakeitimai/sustabdymas",
          content:
            "Mes pasiliekame teisę bet kuriuo metu be išankstinio įspėjimo keisti ar sustabdyti paslaugos teikimą.",
        },
        {
          title: "6. Vartotojų įsipareigojimai",
          content:
            "Vartotojai neturi bandyti įsilaužti, atlikti atvirkštinės inžinerijos ar platinti turinio be leidimo.",
        },
        {
          title: "7. Taikoma teisė",
          content:
            "Šioms sąlygoms taikomi ir jos aiškinamos pagal Korėjos Respublikos įstatymus.",
        },
      ],
    },
    about: {
      title: "✨ Apie Naora",
      description:
        "„Naora“ yra psichologinių testų platforma, sukurta tiems momentams, kai norime šiek tiek geriau suprasti save.\nSiekime sukurti klausimus ir rezultatus, su kuriais galėtų susitapatinti kiekvienas, remdamiesi kasdieniame gyvenime natūraliai pasireiškiančiais pasirinkimais ir elgesiu.",
      whyTitle: "💡 Kodėl tai sukūrėme?",
      whyContent:
        "Kartais kyla klausimas: „Kodėl aš taip renkuosi?“ arba „Kodėl santykiuose visada kartojasi tie patys modeliai?“\n„Naora“ atsirado iš šių nedidelių smalsumų, siekiant suteikti patirtį, leidžiančią lengvai pažvelgti į savo polinkius ir emocijas.",
      howTitle: "🧠 Kaip tai veikia?",
      howContent:
        "Kiekvienas testas sudarytas remiantis psichologinėmis teorijomis ir realiais elgesio modeliais. Rezultatai orientuoti į tai, kad vartotojai galėtų lengviau suprasti save.\nTačiau visi rezultatai yra skirti pramogai bei savišvietai ir nepakeičia profesionalios diagnozės ar konsultacijos.",
      valuesTitle: "🌱 Kas mums svarbu",
      values: [
        "Rezultatai, su kuriais kiekvienas gali susitapatinti",
        "Patirtis, kuria galima mėgautis be įtampos",
        "Galimybė šiek tiek geriau suprasti save",
      ],
      outro:
        "Ateityje planuojame plėsti savęs paž인imo patirtį siūlydami dar daugiau įvairių testų ir funkcijų.",
    },
    common: {
      startButton: "Pradėti testą",
      prevButton: "← Atgal",
      restartButton: "Pradėti iš naujo",
      questionLabel: "Klausimas",
      resultTitle: "Testo rezultatas",
      resultSub: "Jūsų būsena...",
      agePlaceholder: "Amžius",
      ageUnit: " m.",
      ageError: "Prašome įvesti teisingą amžių!",
    },
    answers: {
      agreeVery: "Visiškai sutinku",
      agree: "Sutinku",
      neutral: "Neutralu",
      disagree: "Nesutinku",
      disagreeVery: "Visiškai nesutinku",
    },
  },
};

export type CommonTranslationType = typeof commonTranslations.ko;
