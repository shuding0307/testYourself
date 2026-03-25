export type Language = "ko" | "en" | "jp" | "zh" | "lt";

export const commonTranslations = {
  ko: {
    home: {
      title: "나를 알아가는\n테스트 플랫폼",
      subtitle: "당신의 내면을 들여다보는 시간",
      startButton: "정신연령 테스트",
      startDescription: "내 안에 잠든 진짜 나이는 몇 살일까?",
      dopamineButton: "도파민 중독 테스트",
      dopamineDescription: "나의 뇌는 얼마나 자극에 중독되어 있을까?",
      strengthButton: "나의 강점 테스트",
      strengthDescription: "나만 모르는 나의 특별한 강점은 무엇일까?",
      backToHome: "메인으로",
    },
    footer: {
      privacy: "개인정보처리방침",
      terms: "이용약관",
      contact: "문의하기",
      rights: "© 2026 Test Yourself. All rights reserved.",
      description:
        "Test Yourself는 다양한 테스트를 통해 자신의 성향과 감정을 더 깊이 이해할 수 있도록 돕는 심리 테스트 플랫폼입니다. 각 테스트는 일상 속 행동 패턴과 심리 이론을 참고해 구성되었으며, 누구나 공감할 수 있는 인사이트를 제공하는 것을 목표로 합니다. 본 결과는 재미와 참고를 위한 콘텐츠로, 자신을 돌아보는 하나의 가벼운 계기로 활용해 주세요.",
    },
    contact: {
      title: "문의하기",
      subtitle: "궁금한 점이나 피드백이 있으신가요?",
      description: "서비스 이용 중 불편한 점이나 제안하고 싶은 아이디어가 있다면 언제든 알려주세요. 여러분의 소중한 의견은 서비스 개선에 큰 도움이 됩니다.",
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
          title: "1. 수집하는 개인정보 항목",
          content:
            "Test Yourself는 사용자의 개인정보를 서버에 저장하거나 수집하지 않습니다. 테스트 과정에서 입력하는 나이 등의 정보는 브라우저 내에서만 처리되며, 페이지를 새로고침하거나 닫으면 소멸됩니다.",
        },
        {
          title: "2. 쿠키 및 광고 식별자",
          content:
            "본 사이트는 구글 애드센스(Google AdSense)를 통해 광고를 제공합니다. 구글은 사용자의 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. 사용자는 구글의 광고 설정 페이지에서 이를 거부할 수 있습니다.",
        },
        {
          title: "3. 제3자 서비스 및 데이터 보안",
          content:
            "우리는 사용자의 데이터를 제3자에게 판매하거나 공유하지 않습니다. 모든 테스트 로직은 클라이언트 사이드(Client-side)에서 실행되므로 데이터 유출 위험을 최소화하고 있습니다.",
        },
      ],
    },
    terms: {
      title: "이용약관",
      lastUpdated: "최종 수정일: 2026년 3월 25일",
      sections: [
        {
          title: "1. 서비스 이용 안내",
          content:
            "Test Yourself에서 제공하는 모든 테스트는 오직 재미와 자기 성찰을 돕기 위한 목적으로 제작되었습니다. 본 서비스의 결과는 어떠한 경우에도 전문적인 심리 상담이나 의학적 진단을 대신할 수 없습니다.",
        },
        {
          title: "2. 책임의 한계",
          content:
            "사용자가 테스트 결과를 바탕으로 내린 결정이나 행동에 대해 본 서비스는 어떠한 책임도 지지 않습니다. 결과는 통계적 경향성과 심리 이론을 바탕으로 한 추정치일 뿐입니다.",
        },
        {
          title: "3. 저작권 보호",
          content:
            "본 사이트의 디자인, 로직, 질문 문항 및 결과 텍스트 등 모든 콘텐츠의 저작권은 Test Yourself에 있습니다. 무단 복제, 배포 및 상업적 이용을 엄격히 금지합니다.",
        },
      ],
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
      dopamineButton: "Dopamine Addiction Test",
      dopamineDescription: "How much is your brain addicted to stimulation?",
      strengthButton: "Strength Test",
      strengthDescription: "What are your special strengths you didn't know?",
      backToHome: "Home",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      rights: "© 2026 Test Yourself. All rights reserved.",
      description:
        "Test Yourself is a psychological testing platform that helps you gain a deeper understanding of your personality and emotions through various tests. Each test is designed based on daily behavior patterns and psychological theories, aiming to provide insights that anyone can relate to. Please use these results for fun and reference, as a lighthearted opportunity for self-reflection.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have any questions or feedback?",
      description: "If you have any inconveniences or ideas to suggest while using the service, please let us know at any time. Your valuable feedback is a great help in improving the service.",
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
            "Test Yourself does not store or collect user personal information on its servers. Information entered during tests, such as age, is processed only within the browser and is discarded when the page is refreshed or closed.",
        },
        {
          title: "2. Cookies and Ad Identifiers",
          content:
            "This site provides advertisements through Google AdSense. Google may use cookies to provide personalized ads based on a user's visit history. Users can opt out of this on Google's ad settings page.",
        },
        {
          title: "3. Third-Party Services and Data Security",
          content:
            "We do not sell or share user data with third parties. All test logic runs on the client-side, minimizing the risk of data leakage.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 25, 2026",
      sections: [
        {
          title: "1. Service Usage Guide",
          content:
            "All tests provided by Test Yourself are for fun and self-reflection purposes only. The results of this service can never replace professional psychological counseling or medical diagnosis.",
        },
        {
          title: "2. Limitation of Liability",
          content:
            "This service assumes no responsibility for decisions or actions taken by users based on test results. Results are merely estimates based on statistical trends and psychological theories.",
        },
        {
          title: "3. Copyright Protection",
          content:
            "The copyright for all content on this site, including design, logic, questions, and result texts, belongs to Test Yourself. Unauthorized reproduction, distribution, and commercial use are strictly prohibited.",
        },
      ],
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
      startDescription: "自分の中に眠る本当の年齢は何歳だろう？",
      dopamineButton: "ドーパミン中毒テスト",
      dopamineDescription: "あなたの脳はどれほど刺激に依存していますか？",
      strengthButton: "あなたの強みテスト",
      strengthDescription:
        "あなただけが知らないあなたの特別な強みは何でしょうか？",
      backToHome: "ホームへ",
    },
    footer: {
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      rights: "© 2026 Test Yourself. All rights reserved.",
      description:
        "Test Yourselfは、様々なテストを通じて自分の傾向や感情をより深く理解できるよう支援する心理テストプラットフォームです。各テストは日常の行動パターンや心理学の理論を参考に構成されており、誰もが共感できるインサイトを提供することを目指しています。本結果は楽しみと参考のためのコンテンツとして、自分を振り返る一つの気軽なきっかけとして活用してください。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご質問やフィードバックはありますか？",
      description: "サービスの利用中に不便な点や提案したいアイデアがあれば、いつでもお知らせください。皆様の貴重なご意見は、サービスの改善に役立てさせていただきます。",
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
          title: "1. 収集する個人情報の項目",
          content:
            "Test Yourselfは、ユーザーの個人情報をサーバーに保存または収集しません。テスト中に入力する年齢などの情報はブラウザ内でのみ処理され、ページを更新したり閉じたりすると消去されます。",
        },
        {
          title: "2. クッキーおよび広告識別子",
          content:
            "当サイトはGoogle AdSenseを通じて広告を提供しています。Googleは、ユーザーの訪問履歴に基づいたカスタマイズ広告を提供するためにクッキーを使用することがあります。ユーザーはGoogleの広告設定ページでこれを拒否できます。",
        },
        {
          title: "3. 第三者サービスおよびデータセキュリティ",
          content:
            "私たちはユーザーのデータを第三者に販売または共有しません。すべてのテストロジックはクライアントサイドで実行されるため、データ流出のリスクを最小限に抑えています。",
        },
      ],
    },
    terms: {
      title: "利用規約",
      lastUpdated: "最終更新日: 2026年3月25日",
      sections: [
        {
          title: "1. サービス利用案内",
          content:
            "Test Yourselfで提供されるすべてのテストは、楽しみと自己省察を助ける目的でのみ制作されています。当サービスの結果は、いかなる場合でも専門的な心理カウンセリングや医学的診断に代わるものではありません。",
        },
        {
          title: "2. 責任の制限",
          content:
            "ユーザーがテスト結果に基づいて下した決定や行動について、当サービスは一切の責任を負いません。結果は統計的な傾向と心理学的な理論に基づいた推定値に過ぎません。",
        },
        {
          title: "3. 著作権保護",
          content:
            "当サイトのデザイン、ロジック、質問項目、結果テキストなど、すべてのコンテンツの著作権はTest Yourselfにあります。無断転載、配布および商業目的の利用を厳禁します。",
        },
      ],
    },
    common: {
      startButton: "テスト開始",
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
      disagreeVery: "全くそう思わない",
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
    footer: {
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系我们",
      rights: "© 2026 Test Yourself. All rights reserved.",
      description:
        "Test Yourself 是一个心理测试平台，通过各种测试帮助您更深入地了解自己的性格和情感。每个测试都参考了日常行为模式和心理学理论，旨在提供任何人都能产生共鸣的见解。本结果仅供娱乐和参考，请将其作为反思自我的一种轻松契机。",
    },
    contact: {
      title: "联系我们",
      subtitle: "有任何问题或反馈吗？",
      description: "如果您在服务使用过程中有任何不便或想提议的想法，请随时告诉我们。您的宝贵意见对改进服务大有帮助。",
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
          title: "1. 个人信息收集",
          content:
            "Test Yourself 不会在服务器上存储或收集用户的个人信息。在测试过程中输入的年龄等信息仅在浏览器内处理，刷新或关闭页面后即会消失。",
        },
        {
          title: "2. Cookie 和广告标识符",
          content:
            "本网站通过 Google AdSense 提供广告。Google 可能会使用 Cookie 根据用户的访问历史提供个性化广告。用户可以在 Google 的广告设置页面中选择拒绝。",
        },
        {
          title: "3. 第三方服务与数据安全",
          content:
            "我们不会向第三方出售或共享用户数据。所有测试逻辑均在客户端运行，从而最大限度地降低了数据泄露的风险。",
        },
      ],
    },
    terms: {
      title: "服务条款",
      lastUpdated: "最后更新日期：2026年3月25日",
      sections: [
        {
          title: "1. 服务使用指南",
          content:
            "Test Yourself 提供的所有测试仅用于娱乐和自我反省的目的。本服务的结果在任何情况下都不能替代专业的心理咨询或医学诊断。",
        },
        {
          title: "2. 责任限制",
          content:
            "对于用户根据测试结果做出的决定或采取的行动，本服务不承担任何责任。结果仅是基于统计倾向和心理学理论的估计值。",
        },
        {
          title: "3. 版权保护",
          content:
            "本网站的设计、逻辑、测试题目和结果文本等所有内容的版权均属于 Test Yourself。严禁未经授权的复制、分发和商业用途。",
        },
      ],
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
      dopamineButton: "Dopamino priklausomybės testas",
      dopamineDescription:
        "Kiek jūsų smegenys yra priklausomos nuo stimuliacijos?",
      strengthButton: "Mano stiprybių testas",
      strengthDescription: "Kokia yra tavo ypatinga stiprybė, kurios nežinai?",
      backToHome: "Į pradžią",
    },
    footer: {
      privacy: "Privatumo politika",
      terms: "Naudojimo taisyklės",
      contact: "Kontaktai",
      rights: "© 2026 Test Yourself. All rights reserved.",
      description:
        "„Test Yourself“ yra psichologinių testų platforma, padedanti giliau suprasti savo asmenybę ir emocijas atliekant įvairius testus. Kiekvienas testas sukurtas remiantis kasdienio elgesio modeliais ir psichologinėmis teorijomis, siekiant pateikti įžvalgas, su kuriomis galėtų susitapatinti kiekvienas. Prašome šiuos rezultatus naudoti pramogai ir kaip informacinio pobūdžio turinį – tai lengvas būdas geriau pažinti save.",
    },
    contact: {
      title: "Kontaktai",
      subtitle: "Turite klausimų ar atsiliepimų?",
      description: "Jei naudojantis paslauga iškilo kokių nors nepatogumų arba turite idėjų, kurias norėtumėte pasiūlyti, praneškite mums bet kuriuo metu. Jūsų vertingi atsiliepimai labai padeda tobulinti paslaugą.",
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
            "„Test Yourself“ savo serveriuose nesaugo ir nerenka vartotojų asmeninės informacijos. Testų metu įvesta informacija, pavyzdžiui, amžius, apdorojama tik naršyklėje ir yra pašalinama atnaujinus arba uždarius puslapį.",
        },
        {
          title: "2. Slapukai ir reklamos identifikatoriai",
          content:
            "Ši svetainė teikia reklamas per „Google AdSense“. „Google“ gali naudoti slapukus, kad pateiktų suasmenintas reklamas pagal vartotojo lankymosi istoriją. Vartotojai gali to atsisakyti „Google“ reklamos nustatymų puslapyje.",
        },
        {
          title: "3. Trečiųjų šalių paslaugos ir duomenų saugumas",
          content:
            "Mes neparduodame ir nesidaliname vartotojų duomenimis su trečiosiomis šalimis. Visa testų logika veikia vartotojo pusėje, todėl duomenų nutekėjimo rizika yra minimali.",
        },
      ],
    },
    terms: {
      title: "Naudojimo taisyklės",
      lastUpdated: "Paskutinį kartą atnaujinta: 2026 m. kovo 25 d.",
      sections: [
        {
          title: "1. Paslaugos naudojimo vadovas",
          content:
            "Visi „Test Yourself“ pateikiami testai skirti tik pramogai ir savirefleksijai. Šios paslaugos rezultatai jokiu būdu negali pakeisti profesionalios psichologinės konsultacijos ar medicininės diagnozės.",
        },
        {
          title: "2. Atsakomybės ribojimas",
          content:
            "Ši paslauga neprisiima jokios atsakomybės už vartotojų sprendimus ar veiksmus, priimtus remiantis testų rezultatais. Rezultatai yra tik apytiksliai įvertinimai, pagrįsti statistinėmis tendencijomis ir psichologinėmis teorijomis.",
        },
        {
          title: "3. Autorių teisių apsauga",
          content:
            "Viso šios svetainės turinio, įskaitant dizainą, logiką, klausimus ir rezultatų tekstus, autorių teisės priklauso „Test Yourself“. Griežtai draudžiamas neteisėtas kopijavimas, platinimas ir komercinis naudojimas.",
        },
      ],
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
