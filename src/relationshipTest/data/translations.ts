import type { RelationshipType } from "./types";

export interface RelationshipTranslation {
  title: string;
  subtitle: string;
  startBtn: string;
  nextBtn: string;
  resultBtn: string;
  retryBtn: string;
  shareBtn: string;
  strengthLabel: string;
  strengthDescription: string;
  results: Record<
    RelationshipType,
    {
      title: string;
      subTitle: string;
      desc: string;
      strengthId: string;
      strengthReason: string;
    }
  >;
}

export const relationshipTranslations: Record<string, RelationshipTranslation> =
  {
    ko: {
      title: "연애 타입 테스트",
      subtitle: "당신은 어떤 사랑을 하고 있나요?",
      startBtn: "테스트 시작하기",
      nextBtn: "다음",
      resultBtn: "결과 확인하기",
      retryBtn: "다시 하기",
      shareBtn: "공유하기",
      strengthLabel: "💡 당신의 기본 성향:",
      strengthDescription: "그래서 연애에서도 {desc}",
      results: {
        direct_lover: {
          title: "🔥 직진형 사랑러",
          subTitle: "감정에 솔직한 열정가",
          desc: "당신은 감정을 숨기기보다는 표현하는 데 익숙한 사람입니다. 좋아하는 마음이 생기면 자연스럽게 행동으로 이어지고, 관계에서도 솔직함을 가장 중요하게 생각합니다.\n\n상대방에게 자신의 감정을 분명하게 전달하려고 하기 때문에 오해가 쌓이는 일이 적고, 관계가 빠르게 깊어지는 경우가 많아요. 다만 때로는 상대의 속도보다 앞서 나가면서 부담을 줄 수도 있습니다.\n\n그럼에도 불구하고, 당신의 진심은 분명하게 전달되는 편이며, 연애에서 가장 중요한 ‘확실함’을 만들어내는 타입입니다. 감정을 행동으로 옮길 줄 아는 사람, 그래서 관계를 움직이게 만드는 사람이 바로 당신입니다.",
          strengthId: "drive_creativity",
          strengthReason: "감정보다 행동이 먼저 나오는 편이에요.",
        },
        wary_flirt: {
          title: "👀 눈치형 밀당러",
          subTitle: "관계의 흐름을 읽는 전략가",
          desc: "당신은 감정보다 상황과 흐름을 먼저 보는 타입입니다. 상대방의 말투, 행동, 연락 속도까지 세심하게 관찰하며 관계의 균형을 맞추려고 합니다.\n\n먼저 다가가기보다는 “이 타이밍이 맞을까?”를 고민하는 경우가 많아요. 그래서 쉽게 상처받지 않지만, 동시에 기회를 놓칠 수도 있는 타입입니다.\n\n주변에서는 당신을 신중하고 센스 있는 사람으로 보지만, 속으로는 꽤 많은 생각을 하고 있는 경우가 많습니다. 확신이 생기면 움직이지만, 그 전까지는 절대 쉽게 행동하지 않는 사람입니다.",
          strengthId: "analytical_empathy",
          strengthReason: "상대의 반응을 세심하게 살피며 움직이는 편이에요.",
        },
        devoted_giver: {
          title: "🫶 헌신형 퍼주러",
          subTitle: "아낌없이 주는 나무",
          desc: "당신은 연애를 시작하면 상대방을 중심에 두는 타입입니다. 좋아하는 사람이 생기면 자연스럽게 맞춰주고, 상대가 편한 방향으로 관계를 유지하려고 합니다.\n\n그래서 상대방 입장에서는 굉장히 편안하고 안정적인 연애를 느낄 수 있어요. 다만 그 과정에서 자신의 감정이나 욕구를 뒤로 미루는 경우가 많습니다.\n\n가끔은 “왜 나만 맞추지?”라는 생각이 들 수도 있지만, 그만큼 상대를 깊이 생각하는 사람입니다. 사랑을 줄 줄 아는 사람, 하지만 때로는 자신도 챙겨야 하는 타입입니다.",
          strengthId: "empathy_patience",
          strengthReason: "상대의 행복에서 자신의 기쁨을 찾는 편이에요.",
        },
        emotion_hider: {
          title: "🧊 감정 숨김형",
          subTitle: "알면 알수록 깊은 진국",
          desc: "당신은 감정이 없는 게 아니라, 표현이 어려운 타입입니다. 좋아하는 마음이 있어도 쉽게 드러내지 않고, 스스로 정리하려고 하는 경향이 있습니다.\n\n그래서 상대방 입장에서는 당신의 마음을 파악하기 어려울 수도 있어요. 하지만 한 번 마음을 열면 깊고 안정적인 관계를 만들어가는 사람입니다.\n\n겉으로는 차분해 보이지만, 속에서는 많은 생각과 감정이 오가고 있는 타입이에요. 표현보다 진심이 더 큰 사람입니다.",
          strengthId: "patience_drive",
          strengthReason:
            "감정을 겉으로 드러내기보다 속으로 단단히 다지는 편이에요.",
        },
        immersive_obsessive: {
          title: "🎯 몰입 집착형",
          subTitle: "온 마음을 다하는 사랑꾼",
          desc: "당신은 연애를 시작하면 깊이 빠져드는 타입입니다. 상대방이 삶에서 차지하는 비중이 커지고, 자연스럽게 많은 시간과 감정을 투자하게 됩니다.\n\n사랑을 가볍게 하지 않는 만큼, 관계에서도 진지함이 강하게 드러납니다. 하지만 그만큼 상대의 행동 하나하나에 영향을 많이 받기도 합니다.\n\n감정의 깊이가 큰 만큼 기쁨도 크고, 상처도 깊을 수 있는 타입입니다. 누군가를 진심으로 사랑할 수 있는 사람입니다.",
          strengthId: "drive_patience",
          strengthReason:
            "한 사람에게 깊게 집중하고 모든 에너지를 쏟는 편이에요.",
        },
        stability_seeker: {
          title: "🐢 안정 추구형",
          subTitle: "편안한 쉼터 같은 사랑",
          desc: "당신은 빠른 감정보다 오래 갈 수 있는 관계를 중요하게 생각하는 타입입니다. 연애에서도 급하게 가까워지기보다는, 시간을 두고 천천히 관계를 쌓아갑니다.\n\n상대방과의 신뢰, 안정감, 편안함을 중요하게 여기며, 감정의 기복이 크지 않은 편이에요. 그래서 관계가 오래 지속되는 경우가 많습니다.\n\n자극적이지는 않지만 가장 현실적이고 건강한 연애를 하는 타입입니다.",
          strengthId: "analytical_drive",
          strengthReason:
            "관계의 미래를 신중하게 설계하고 안정감을 우선시하는 편이에요.",
        },
        atmosphere_sensitive: {
          title: "🎭 분위기 감성형",
          subTitle: "낭만을 꿈꾸는 로맨티스트",
          desc: "당신은 연애에서 ‘느낌’을 굉장히 중요하게 생각하는 타입입니다. 설렘, 분위기, 감정의 흐름에 민감하고, 그 순간의 감정을 깊이 느끼는 사람입니다.\n\n그래서 연애가 시작될 때의 설렘을 중요하게 여기고, 관계 속에서도 감정적인 교류를 중요하게 생각합니다. 다만 분위기에 영향을 많이 받기 때문에 감정 기복이 생길 수도 있습니다.\n\n연애를 하나의 경험으로 깊게 느끼는 타입입니다.",
          strengthId: "creativity_drive",
          strengthReason:
            "매 순간의 감정과 분위기를 창의적으로 즐기는 편이에요.",
        },
        deep_emotionalist: {
          title: "🌊 감정 깊이형",
          subTitle: "바다보다 깊은 내면의 소유자",
          desc: "당신은 겉으로 드러나는 것보다 훨씬 깊은 감정을 가지고 있는 타입입니다. 사랑을 가볍게 하지 않고, 한 번 마음이 생기면 오래 지속되는 편입니다.\n\n관계에서도 깊은 유대감을 중요하게 생각하고, 쉽게 정리하지 못하는 경우가 많아요. 그래서 이별 이후에도 감정이 오래 남는 편입니다.\n\n하지만 그만큼 진짜 관계를 만들 수 있는 사람입니다.",
          strengthId: "patience_creativity",
          strengthReason:
            "눈에 보이지 않는 깊은 유대감을 소중히 여기는 편이에요.",
        },
      },
    },
    en: {
      title: "Relationship Type Test",
      subtitle: "What kind of love are you in?",
      startBtn: "Start Test",
      nextBtn: "Next",
      resultBtn: "View Results",
      retryBtn: "Retry",
      shareBtn: "Share",
      strengthLabel: "💡 Your Core Nature:",
      strengthDescription: "That's why in love, {desc}",
      results: {
        direct_lover: {
          title: "🔥 Direct Lover",
          subTitle: "An honest and passionate expresser",
          desc: "You are someone who is accustomed to expressing your feelings rather than hiding them. When you develop a liking for someone, it naturally leads to action, and you value honesty most in relationships.\n\nYou try to clearly convey your feelings to the other person, so misunderstandings rarely build up, and relationships often deepen quickly. However, sometimes you might move faster than the other person's pace, potentially causing pressure.\n\nNevertheless, your sincerity is clearly delivered, and you are the type who creates 'certainty,' which is most important in romance. You are someone who knows how to put emotions into action, moving the relationship forward.",
          strengthId: "drive_creativity",
          strengthReason: "Action tends to come before emotion.",
        },
        wary_flirt: {
          title: "👀 Observant Flirt",
          subTitle: "A strategist who reads the flow",
          desc: "You are the type who looks at the situation and flow before your emotions. You carefully observe the other person's tone, behavior, and even texting speed to balance the relationship.\n\nYou often worry about whether 'this timing is right' rather than approaching first. Thus, while you aren't easily hurt, you might also miss opportunities.\n\nOthers see you as a prudent and sensible person, but you often have quite a lot on your mind. You move once you're certain, but you never act easily before that.",
          strengthId: "analytical_empathy",
          strengthReason:
            "You move while carefully observing the other person's reaction.",
        },
        devoted_giver: {
          title: "🫶 Devoted Giver",
          subTitle: "A tree that gives generously",
          desc: "You are the type who puts the other person at the center once you start dating. When you like someone, you naturally adapt to them and try to maintain the relationship in a direction comfortable for them.\n\nThus, the other person can feel a very comfortable and stable romance. However, in that process, you often push your own emotions or desires to the background.\n\nYou might occasionally wonder 'Why am I the only one adapting?', but you are someone who thinks deeply about your partner. You know how to give love, but you are also the type who needs to take care of yourself.",
          strengthId: "empathy_patience",
          strengthReason: "You find your own joy in your partner's happiness.",
        },
        emotion_hider: {
          title: "🧊 Emotion Hider",
          subTitle: "Deep and genuine as you get to know them",
          desc: "It's not that you don't have emotions, but rather that you find it difficult to express them. Even if you have feelings of liking someone, you tend to not reveal them easily and try to organize them yourself.\n\nThus, it might be difficult for the other person to grasp your heart. However, once you open your heart, you are someone who builds deep and stable relationships.\n\nWhile you appear calm on the outside, you are the type where many thoughts and emotions are moving within. Your sincerity is bigger than your expression.",
          strengthId: "patience_drive",
          strengthReason:
            "You tend to solidify your emotions internally rather than revealing them.",
        },
        immersive_obsessive: {
          title: "🎯 Immersive Lover",
          subTitle: "A lover who gives their whole heart",
          desc: "You are the type who falls deeply once you start dating. Your partner takes up a large portion of your life, and you naturally invest a lot of time and emotion.\n\nAs much as you don't take love lightly, your seriousness is strongly revealed in the relationship. However, you are also heavily influenced by every single action of your partner.\n\nAs your emotional depth is large, your joy can be great, but your hurt can also be deep. You are someone who can truly love someone sincerely.",
          strengthId: "drive_patience",
          strengthReason:
            "You concentrate deeply on one person and pour in all your energy.",
        },
        stability_seeker: {
          title: "🐢 Stability Seeker",
          subTitle: "Love like a comfortable shelter",
          desc: "You are the type who values long-lasting relationships over fast emotions. In romance, you build relationships slowly over time rather than getting close in a hurry.\n\nYou value trust, stability, and comfort with your partner, and your emotional fluctuations aren't very large. Thus, your relationships often last for a long time.\n\nWhile not stimulating, you are the type who has the most realistic and healthy romance.",
          strengthId: "analytical_drive",
          strengthReason:
            "You carefully design the future of the relationship and prioritize stability.",
        },
        atmosphere_sensitive: {
          title: "🎭 Romantic Moodist",
          subTitle: "A romanticist who dreams of romance",
          desc: "You are the type who values 'feeling' very importantly in romance. You are sensitive to excitement, atmosphere, and the flow of emotions, and you feel the emotions of that moment deeply.\n\nThus, you value the excitement when a relationship starts and consider emotional exchange important within the relationship. However, because you are heavily influenced by the atmosphere, emotional swings might occur.\n\nYou are the type who feels romance deeply as an experience.",
          strengthId: "creativity_drive",
          strengthReason:
            "You creatively enjoy every moment's emotion and atmosphere.",
        },
        deep_emotionalist: {
          title: "🌊 Deep Emotionalist",
          subTitle: "Possessor of an inner self deeper than the sea",
          desc: "You are the type who has much deeper emotions than what is revealed on the outside. You don't take love lightly, and once a feeling develops, it tends to last for a long time.\n\nYou value deep bonds in relationships and often find it difficult to organize your feelings easily. Thus, emotions tend to linger for a long time even after a breakup.\n\nHowever, you are someone who can create a truly genuine relationship.",
          strengthId: "patience_creativity",
          strengthReason: "You value deep, invisible bonds preciously.",
        },
      },
    },
    lt: {
      title: "Santykių tipo testas",
      subtitle: "Kokią meilę jūs išgyvenate?",
      startBtn: "Pradėti testą",
      nextBtn: "Kitas",
      resultBtn: "Peržiūrėti rezultatus",
      retryBtn: "Bandyti dar kartą",
      shareBtn: "Dalintis",
      strengthLabel: "💡 Jūsų pagrindinė prigimtis:",
      strengthDescription: "Štai kodėl meilėje {desc}",
      results: {
        direct_lover: {
          title: "🔥 Tiesmukas mylėtojas",
          subTitle: "Sąžiningas ir aistringas jausmų reiškėjas",
          desc: "Esate žmogus, kuris yra įpratęs išreikšti savo jausmus, o ne juos slėpti. Kai kas nors jums pradeda patikti, tai natūraliai virsta veiksmais, o santykiuose labiausiai vertinate sąžiningumą.\n\nStengiatės aiškiai perteikti savo jausmus kitam asmeniui, todėl retai kyla nesusipratimų, o santykiai dažnai greitai pagilėja. Tačiau kartais galite judėti greičiau nei kito asmens tempas, o tai gali sukelti spaudimą.\n\nNepaisant to, jūsų nuoširdumas yra aiškiai perduodamas, ir jūs esate tas tipas, kuris sukuria „tikrumą“, kuris yra svarbiausias romantikoje. Esate žmogus, kuris žino, kaip emocijas paversti veiksmais, judant santykius į priekį.",
          strengthId: "drive_creativity",
          strengthReason: "Veiksmas linkęs eiti pirmiau nei emocija.",
        },
        wary_flirt: {
          title: "👀 Stebintis flirto meistras",
          subTitle: "Strategas, skaitantis situaciją",
          desc: "Esate tipas, kuris pirmiausia žiūri į situaciją ir eigą, o ne į savo emocijas. Atidžiai stebite kito asmens toną, elgesį ir net žinučių rašymo greitį, kad išlaikytumėte santykių pusiausvyrą.\n\nDažnai nerimaujate, ar „šis momentas yra tinkamas“, užuot kreipęsi pirmi. Taigi, nors nesate lengvai įžeidžiamas, galite praleisti progas.\n\nKiti jus mato kaip protingą ir protingą žmogų, tačiau jūsų galvoje dažnai sukasi daugybė minčių. Judate tada, kai esate tikras, bet niekada nesiimate veiksmų neapgalvoję.",
          strengthId: "analytical_empathy",
          strengthReason: "Judate atidžiai stebėdami kito asmens reakciją.",
        },
        devoted_giver: {
          title: "🫶 Atsidavęs davėjas",
          subTitle: "Dosniai duodantis medis",
          desc: "Esate tipas, kuris, pradėjęs susitikinėti, kitą asmenį iškelia į centrą. Kai kas nors jums patinka, natūraliai prie jo prisitaikote ir stengiatės išlaikyti santykių jam patogia kryptimi.\n\nTaigi, kitas asmuo gali jausti labai patogią ir stabilią romantiką. Tačiau šiame procese dažnai nustumiate savo emocijas ar troškimus į antrą planą.\n\nKartais galite susimąstyti: „Kodėl aš vienintelis prisitaikau?“, tačiau esate žmogus, kuris giliai galvoja apie savo partnerį. Žinote, kaip duoti meilę, bet taip pat esate tipas, kuriam reikia pasirūpinti savimi.",
          strengthId: "empathy_patience",
          strengthReason: "Savo džiaugsmą randate partnerio laimėje.",
        },
        emotion_hider: {
          title: "🧊 Emocijų slėpėjas",
          subTitle: "Gilus ir tikras, kai geriau pažįstate",
          desc: "Ne tai, kad neturite emocijų, bet greičiau tai, kad jums sunku jas išreikšti. Net jei jaučiate simpatiją kam nors, esate linkęs to lengvai neparodyti ir stengiatės juos susitvarkyti pats.\n\nTaigi kitam asmeniui gali būti sunku suprasti jūsų širdį. Tačiau kartą atvėręs širdį, esate žmogus, kuris kuria gilius ir stabilius santykius.\n\nNors iš išorės atrodote ramus, esate tipas, kuriame juda daugybė minčių ir emocijų. Jūsų nuoširdumas yra didesnis už jūsų išraišką.",
          strengthId: "patience_drive",
          strengthReason:
            "Esate linkęs stiprinti savo emocijas viduje, o ne jas rodyti.",
        },
        immersive_obsessive: {
          title: "🎯 Įtraukiantis mylėtojas",
          subTitle: "Mylėtojas, atiduodantis visą širdį",
          desc: "Esate tipas, kuris giliai įsimyli, kai pradeda susitikinėti. Partneris užima didelę jūsų gyvenimo dalį, ir jūs natūraliai investuojate daug laiko ir emocijų.\n\nKiek rimtai žiūrite į meilę, jūsų rimtumas stipriai pasireiškia santykiuose. Tačiau jus taip pat stipriai veikia kiekvienas jūsų partnerio veiksmas.\n\nKadangi jūsų emocinis gylis yra didelis, jūsų džiaugsmas gali būti didelis, bet jūsų skausmas taip pat gali būti gilus. Esate žmogus, kuris gali nuoširdžiai mylėti.",
          strengthId: "drive_patience",
          strengthReason:
            "Giliai susikoncentruojate į vieną asmenį ir atiduodate visą savo energiją.",
        },
        stability_seeker: {
          title: "🐢 Stabilumo ieškotojas",
          subTitle: "Meilė kaip patogi pastogė",
          desc: "Esate tipas, kuris vertina ilgalaikius santykius labiau nei greitas emocijas. Romantikoje santykius kuriate lėtai, o ne skubate suartėti.\n\nVertinate pasitikėjimą, stabilumą ir komfortą su savo partneriu, o jūsų emociniai svyravimai nėra labai dideli. Taigi jūsų santykiai dažnai trunka ilgą laiką.\n\nNors ir nestimuliuojantis, esate tipas, turintis realistiškiausią ir sveikiausią romantiką.",
          strengthId: "analytical_drive",
          strengthReason:
            "Atidžiai projektuojate santykių ateitį ir teikiate pirmenybę stabilumui.",
        },
        atmosphere_sensitive: {
          title: "🎭 Romantiškas nuotaikos žmogus",
          subTitle: "Romantikas, svajojantis apie romantiką",
          desc: "Esate tipas, kuriam „jausmas“ romantikoje yra labai svarbus. Esate jautrus jauduliui, atmosferai ir emocijų tėkmei, giliai jaučiate tos akimirkos emocijas.\n\nTodėl vertinate jaudulį, kai prasideda santykiai, ir laikote emocinį apsikeitimą svarbiu santykiuose. Tačiau, kadangi jus stipriai veikia atmosfera, gali atsirasti emocinių svyravimų.\n\nEsate tipas, kuris giliai jaučia romantiką kaip patirtį.",
          strengthId: "creativity_drive",
          strengthReason:
            "Kūrybiškai mėgaujatės kiekvienos akimirkos emocija ir atmosfera.",
        },
        deep_emotionalist: {
          title: "🌊 Gilus emocionalistas",
          subTitle: "Vidinio aš, gilesnio už jūrą, savininkas",
          desc: "Esate tipas, turintis daug gilesnes emocijas nei tai, kas matoma išorėje. Į meilę nežiūrite lengvai, o atsiradus jausmui, jis linkęs išlikti ilgą laiką.\n\nVertinate gilius ryšius santykiuose ir dažnai jums sunku lengvai susitvarkyti jausmus. Todėl emocijos linkusios išlikti ilgą laiką net po išsiskyrimo.\n\nTačiau esate žmogus, kuris gali sukurti tikrai tikrą ryšį.",
          strengthId: "patience_creativity",
          strengthReason: "Branginate gilius, nematomus ryšius.",
        },
      },
    },
    jp: {
      title: "恋愛タイプ診断",
      subtitle: "あなたはどのような恋愛をしていますか？",
      startBtn: "診断を始める",
      nextBtn: "次へ",
      resultBtn: "結果を確認する",
      retryBtn: "もう一度やり直す",
      shareBtn: "シェアする",
      strengthLabel: "💡 あなたの基本傾向:",
      strengthDescription: "そのため、恋愛でも {desc}",
      results: {
        direct_lover: {
          title: "🔥 直球型の情熱家",
          subTitle: "感情に正直な情熱家",
          desc: "あなたは感情を隠すよりも表現することに慣れている人です。好きな気持ちが芽生えると自然に行動に移し、関係においても誠実さを最も大切にします。\n\n相手に自分の感情をはっきりと伝えようとするため、誤解が溜まることが少なく、関係が急速に深まることが多いです。ただ、時には相手のペースよりも先走ってしまい、プレッシャーを与えてしまうこともあります。\n\nそれでも、あなたの真心ははっきりと伝わる方であり、恋愛において最も重要な「確信」を作り出すタイプです。感情を行動に移せる人、そして関係を動かす力を持っているのがあなたです。",
          strengthId: "drive_creativity",
          strengthReason: "感情よりも行動が先に出るタイプです。",
        },
        wary_flirt: {
          title: "👀 空気を読む戦略家",
          subTitle: "関係の流れを読む戦略家",
          desc: "あなたは感情よりも状況や流れを先に見るタイプです。相手の口調、行動、連絡の頻度まで細かく観察し、関係のバランスを保とうとします。\n\n自分から近づくよりも、「このタイミングで合っているかな？」と悩むことが多いです。そのため、簡単に傷つくことはありませんが、同時にチャンスを逃してしまうこともあります。\n\n周囲からは慎重でセンスのある人だと思われていますが、心の中ではかなり多くのことを考えている場合が多いです。確信が持てれば動きますが、それまでは決して安易に行動しない人です。",
          strengthId: "analytical_empathy",
          strengthReason: "相手の反応を細かく伺いながら動くタイプです。",
        },
        devoted_giver: {
          title: "🫶 献身的なギバー",
          subTitle: "惜しみなく与える木",
          desc: "あなたは恋愛を始めると相手を優先するタイプです。好きな人ができると自然に相手に合わせ、相手が心地よい方向に共に関係を維持しようとします。\n\nそのため、相手から見れば非常にリラックスした安定した恋愛を感じることができます。ただ、その過程で自分の感情や欲求を後回しにしてしまうことが多いです。\n\n時には「なぜ自分ばかり合わせているのだろう？」と思うこともありますが、それだけ相手を深く想っている証拠です。愛を与えることができる人、しかし時には自分自身も大切にする必要があるタイプです。",
          strengthId: "empathy_patience",
          strengthReason: "相手の幸せの中に自分の喜びを見出すタイプです。",
        },
        emotion_hider: {
          title: "🧊 感情を秘めるタイプ",
          subTitle: "知れば知るほど深い人",
          desc: "あなたは感情がないのではなく、表現が苦手なタイプです。好きな気持ちがあっても簡単には表に出さず、自分の中で整理しようとする傾向があります。\n\nそのため、相手から見ればあなたの本心を把握するのが難しいかもしれません。しかし、一度心を開けば、深く安定した関係を築いていける人です。\n\n表面的には冷静に見えますが、内面では多くの思考や感情が渦巻いているタイプです。言葉よりも真心の重みが大きい人です。",
          strengthId: "patience_drive",
          strengthReason: "感情を表に出すよりも、心の中に留めるタイプです。",
        },
        immersive_obsessive: {
          title: "🎯 一途な恋人",
          subTitle: "全心を捧げる愛妻家/愛夫家",
          desc: "あなたは恋愛を始めると深くのめり込むタイプです。相手が生活の中で占める割合が大きくなり、自然と多くの時間と感情を投資することになります。\n\n恋愛を軽く考えない分、関係においても真剣さが強く表れます。しかし、その分相手の些細な行動一つ一つに大きな影響を受けることもあります。\n\n感情の深さが大きい分、喜びも大きいですが、傷つくことも深いタイプです。誰かを心から誠実に愛することができる人です。",
          strengthId: "drive_patience",
          strengthReason:
            "一人の人に深く集中し、すべてのエネルギーを注ぐタイプです。",
        },
        stability_seeker: {
          title: "🐢 安定志向派",
          subTitle: "居心地の良いシェルターのような愛",
          desc: "あなたは一過性の感情よりも、長く続く関係を大切にするタイプです。恋愛においても急いで距離を縮めるのではなく、時間をかけてゆっくりと関係を築いていきます。\n\n相手との信頼、安心感、心地よさを重要視し、感情の起伏が少ない方です。そのため、関係が長く持続することが多いです。\n\n刺激的ではありませんが、最も現実的で健康的な恋愛をするタイプです。",
          strengthId: "analytical_drive",
          strengthReason:
            "関係の未来を慎重に見据え、安定を最優先するタイプです。",
        },
        atmosphere_sensitive: {
          title: "🎭 ロマンチスト",
          subTitle: "ロマンを夢見るロマンチスト",
          desc: "あなたは恋愛において「フィーリング」を非常に大切にするタイプです。ときめき、雰囲気、感情の流れに敏感で、その瞬間の感情を深く感じる人です。\n\nそのため、恋愛が始まる時のときめきを重視し、関係の中でも感情的な交流を大切にします。ただ、雰囲気に左右されやすいため、感情の起伏が生じることもあります。\n\n恋愛を一つの「体験」として深く味わうタイプです。",
          strengthId: "creativity_drive",
          strengthReason:
            "その時々の感情や雰囲気をクリエイティブに楽しむタイプです。",
        },
        deep_emotionalist: {
          title: "🌊 深い愛情の持ち主",
          subTitle: "海よりも深い内面の持ち主",
          desc: "あなたは表面に見えるものよりも、はるかに深い感情を持っているタイプです。恋愛を軽く考えず、一度芽生えた感情は長く続く傾向があります。\n\n関係においても深い絆を大切にし、簡単には諦められないことが多いです。そのため、別れた後も感情が長く残る方です。\n\nしかし、それだけ本物の関係を築くことができる人です。",
          strengthId: "patience_creativity",
          strengthReason: "目に見えない深い絆を大切にするタイプです。",
        },
      },
    },
    zh: {
      title: "恋爱类型测试",
      subtitle: "你正在谈什么样的恋爱？",
      startBtn: "开始测试",
      nextBtn: "下一题",
      resultBtn: "查看结果",
      retryBtn: "重新开始",
      shareBtn: "分享",
      strengthLabel: "💡 你的基本倾向:",
      strengthDescription: "因此在恋爱中，{desc}",
      results: {
        direct_lover: {
          title: "🔥 直球型恋人",
          subTitle: "坦诚热情的表达者",
          desc: "你是一个习惯于表达情感而非隐藏情感的人。当你产生好感时，会自然而然地付诸行动，在关系中你最看重的是坦诚。\n\n由于你倾向于清晰地向对方传达你的感受，因此误会很少积压，关系往往会迅速加深。然而，有时你可能比对方的步伐走得更快，这可能会带来压力。\n\n尽管如此，你的真心是能够被清晰传达的，你是那种能创造出浪漫中最核心的“确定感”的人。你懂得如何将情感转化为行动，推动关系向前发展。",
          strengthId: "drive_creativity",
          strengthReason: "行动往往先于情感。",
        },
        wary_flirt: {
          title: "👀 察言观色型选手",
          subTitle: "洞察局势的策略家",
          desc: "你是那种在情感之前先观察情况和局势的人。你会仔细观察对方的语气、行为甚至回消息的速度，以平衡彼此的关系。\n\n比起主动出击，你更常纠结于“这个时机对不对”。因此，虽然你不容易受伤，但也可能会错失良机。\n\n在他人眼中，你是一个谨慎且明智的人，但你内心往往思虑周全。一旦确定，你就会行动，但在那之前，你绝不会轻易草率行事。",
          strengthId: "analytical_empathy",
          strengthReason: "在仔细观察对方反应的同时采取行动。",
        },
        devoted_giver: {
          title: "🫶 奉献型付出者",
          subTitle: "慷慨奉献的大树",
          desc: "一旦开始恋爱，你就是那种以对方为中心的人。当你喜欢上一个人，你会自然地去适应对方，并努力让关系朝着对方感到舒适的方向发展。\n\n因此，对方能感受到一段非常舒适且稳定的恋情。然而，在这个过程中，你经常会将自己的情感或欲望推向幕后。\n\n你偶尔可能会想：“为什么只有我在迁就？”，但你是一个会为伴侣深思熟虑的人。你懂得如何付出爱，但你也是那种需要学会照顾自己的人。",
          strengthId: "empathy_patience",
          strengthReason: "在对方的幸福中寻找自己的快乐。",
        },
        emotion_hider: {
          title: "🧊 情感隐藏型",
          subTitle: "越了解越深沉的真诚之人",
          desc: "并不是你没有情感，而是你觉得表达情感很难。即使你对某人有好感，你也倾向于不轻易流露，并试图自己消化。\n\n因此，对方可能很难捉摸你的心意。然而，一旦你敞开心扉，你就是一个能建立深厚而稳定关系的人。\n\n虽然你外表看起来很平静，但内心却有许多想法和情感在波动。你的真心远比你的表达更深沉。",
          strengthId: "patience_drive",
          strengthReason: "倾向于将情感内化而非外露。",
        },
        immersive_obsessive: {
          title: "🎯 沉浸式痴情者",
          subTitle: "全心全意的痴情者",
          desc: "一旦开始恋爱，你就是那种会深陷其中的人。伴侣占据了你生活的很大一部分，你会自然地投入大量的时间和情感。\n\n正因为你从不轻视爱情，你在关系中的严肃认真会表现得很明显。然而，你也容易受到伴侣每一个微小举动的影响。\n\n由于你的情感深度很大，你的快乐会很强烈，但你的痛苦也可能很深。你是一个能够真心实意去爱的人。",
          strengthId: "drive_patience",
          strengthReason: "深情地专注于一个人并投入所有精力。",
        },
        stability_seeker: {
          title: "🐢 追求稳定型",
          subTitle: "如舒适避风港般的爱",
          desc: "你是一个比起一时的激情，更看重长久关系的人。在恋爱中，你倾向于通过时间慢慢建立关系，而不是匆忙靠近。\n\n你重视与伴侣之间的信任、稳定和舒适，你的情绪波动通常不大。因此，你的关系往往能维持很长时间。\n\n虽然不够刺激，但你是那种拥有最务实、最健康的恋爱关系的人。",
          strengthId: "analytical_drive",
          strengthReason: "谨慎规划关系的未来并优先考虑稳定性。",
        },
        atmosphere_sensitive: {
          title: "🎭 氛围感性型",
          subTitle: "追求浪漫的梦想家",
          desc: "你是那种在恋爱中非常看重“感觉”的人。你对心跳感、氛围和情感流动非常敏感，能深刻体会那一刻的情绪。\n\n因此，你很看重恋情开始时的心动感，并认为关系中的情感交流至关重要。然而，由于你受氛围影响很大，情绪可能会出现波动。\n\n你是那种将恋爱视为一种深刻体验的人。",
          strengthId: "creativity_drive",
          strengthReason: "富有创意地享受每一刻的情感和氛围。",
        },
        deep_emotionalist: {
          title: "🌊 情感深厚型",
          subTitle: "拥有比海洋还深沉的内心",
          desc: "你是那种内心深处的情感远比外表流露出的要丰富得多的人。你从不轻言爱，一旦产生感情，往往会持续很长时间。\n\n你在关系中非常看重深层的纽带，往往很难轻易放下感情。因此，即使在分手后，情感往往也会残留很长时间。\n\n然而，正因为如此，你是一个能创造真正纯粹关系的人。",
          strengthId: "patience_creativity",
          strengthReason: "珍视深层且无形的纽带。",
        },
      },
    },
  };

export type RelationshipTranslationType = typeof relationshipTranslations.ko;
