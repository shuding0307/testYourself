export interface Question {
  id: number;
  text: {
    ko: string;
    en: string;
    jp: string;
    zh: string;
    lt: string;
  };
  direction: "+" | "-";
  weight: number;
  category: 'childlike' | 'stubborn' | 'social' | 'general';
}

export const questions: Question[] = [
  // 사회성 지수 (Social Maturity)
  { id: 1, text: { 
      ko: "자신의 한계를 인정하고 도움을 요청하는 데 주저하지 않는다.", 
      en: "I do not hesitate to admit my limits and ask for help.", 
      jp: "自分の限界を認め、助けを求めることに躊躇しない。", 
      zh: "我不犹豫承认自己的局限性并寻求帮助。", 
      lt: "Nesuabejoju pripažinti savo galimybių ribas ir paprašyti pagalbos." 
    }, direction: "+", weight: 1.5, category: 'social' },
  { id: 3, text: { 
      ko: "갈등 발생 시 평화롭게 해결하려는 노력을 기울이나요?", 
      en: "Do you make an effort to resolve conflicts peacefully?", 
      jp: "葛藤が生じた際、平和的に解決しようと努力しますか？", 
      zh: "发生冲突时，你会努力和平解决吗？", 
      lt: "Ar stengiatės konfliktus spręsti taikiai?" 
    }, direction: "+", weight: 1.2, category: 'social' },
  { id: 5, text: { 
      ko: "어려운 상황에서도 자신의 감정을 조절할 수 있나요?", 
      en: "Can you control your emotions even in difficult situations?", 
      jp: "困難な状況でも自分の感情をコントロールできますか？", 
      zh: "即使在困难的情况下，你也能控制自己的情绪吗？", 
      lt: "Ar galite suvaldyti savo emocijas net ir sudėtingose situacijose?" 
    }, direction: "+", weight: 1.8, category: 'social' },
  { id: 12, text: { 
      ko: "나는 아직 모르는 것이 많다고 생각한다.", 
      en: "I believe there is still much I do not know.", 
      jp: "自分はまだ知らないことが多いと思う。", 
      zh: "我认为我还有很多不知道的事情。", 
      lt: "Manau, kad dar daug ko nežinau." 
    }, direction: "+", weight: 2.0, category: 'social' },
  { id: 19, text: { 
      ko: "잘못을 저질렀을 때 변명보다는 해결책을 먼저 고민한다.", 
      en: "When I make a mistake, I think about solutions rather than excuses.", 
      jp: "過ちを犯したとき、言い訳よりも解決策を先に考える。", 
      zh: "犯错时，我会先考虑解决方案而不是借口。", 
      lt: "Padaręs klaidą, pirmiausia galvoju apie sprendimą, o ne apie pasiteisinimą." 
    }, direction: "+", weight: 1.7, category: 'social' },
  { id: 20, text: { 
      ko: "다른 사람의 의견이 나와 달라도 끝까지 경청할 수 있다.", 
      en: "I can listen to others' opinions even if they differ from mine.", 
      jp: "他人の意見が自分と違っても、最後まで耳を傾けることができる。", 
      zh: "即使别人的意见与我不同，我也会听完。", 
      lt: "Galiu išklausyti kitų nuomonę, net jei ji skiriasi nuo manosios." 
    }, direction: "+", weight: 1.5, category: 'social' },

  // 동심 지수 (Childlike)
  { id: 4, text: { 
      ko: "새로운 아이디어나 관심사에 열정적으로 몰입하는 편인가요?", 
      en: "Do you tend to immerse yourself passionately in new ideas or interests?", 
      jp: "新しいアイデアや関心事に情熱的に没頭する方ですか？", 
      zh: "你倾向于热衷于新的想法或兴趣吗？", 
      lt: "Ar esate linkęs aistringai pasinerti į naujas idėjas ar pomėgius?" 
    }, direction: "+", weight: 1.0, category: 'childlike' },
  { id: 11, text: { 
      ko: "일상에서 사소한 것에 행복함을 잘 느낀다.", 
      en: "I often feel happiness in small things in daily life.", 
      jp: "日常の些細なことに幸せをよく感じる。", 
      zh: "我在日常生活中经常能感受到小确幸。", 
      lt: "Kasdienybėje dažnai jaučiu laimę dėl smulkmenų." 
    }, direction: "+", weight: 1.4, category: 'childlike' },
  { id: 23, text: { 
      ko: "가끔 아무 이유 없이 하늘을 보거나 멍 때리는 시간을 즐긴다.", 
      en: "Sometimes I enjoy looking at the sky or spacing out for no reason.", 
      jp: "時々、理由もなく空を眺めたり、ぼーっとする時間を楽しむ。", 
      zh: "有时我喜欢无缘无故地仰望天空或发呆。", 
      lt: "Kartais man patinka be jokios priežasties žiūrėti į dangų ar tiesiog svajoti." 
    }, direction: "+", weight: 1.2, category: 'childlike' },
  { id: 26, text: { 
      ko: "애니메이션이나 판타지 영화를 보며 감동을 받곤 한다.", 
      en: "I am often moved by watching animation or fantasy movies.", 
      jp: "アニメやファンタジー映画を見て感動することがある。", 
      zh: "看动画或奇幻电影时，我经常会感到触动。", 
      lt: "Mane dažnai sujaudina animaciniai ar fantastiniai filmai." 
    }, direction: "+", weight: 1.1, category: 'childlike' },
  { id: 27, text: { 
      ko: "길가에 핀 꽃이나 길고양이를 보면 그냥 지나치지 못한다.", 
      en: "I can't just pass by flowers on the street or stray cats.", 
      jp: "道端に咲く花や野良猫を見ると、素通りできない。", 
      zh: "看到路边的花或流浪猫，我无法视而不见。", 
      lt: "Negaliu tiesiog praeiti pro gėles gatvėje ar benamius katinus." 
    }, direction: "+", weight: 1.3, category: 'childlike' },

  // 꼰대 지수 (Stubborn)
  { id: 9, text: { 
      ko: "어린아이가 울며 떼쓰는 광경을 보면 화가 난다.", 
      en: "I get angry when I see a child crying and throwing a tantrum.", 
      jp: "子供が泣いてわがままを言っている光景を見ると腹が立つ。", 
      zh: "看到小孩哭闹，我会感到生气。", 
      lt: "Supykstu pamatęs verkšlenantį ir ožiuojantįsi vaiką." 
    }, direction: "+", weight: 1.5, category: 'stubborn' },
  { id: 35, text: { 
      ko: "요즘 젊은 사람들의 태도나 문화를 이해하기 어려울 때가 많다.", 
      en: "I often find it difficult to understand the attitudes or culture of young people today.", 
      jp: "最近の若者の態度や文化を理解しにくいことがよくある。", 
      zh: "我经常觉得很难理解现在年轻人的态度或文化。", 
      lt: "Man dažnai sunku suprasti šiuolaikinio jaunimo požiūrį ar kultūrą." 
    }, direction: "+", weight: 1.7, category: 'stubborn' },
  { id: 24, text: { 
      ko: "맞춤법을 틀리는 사람을 보면 속으로 교정해주고 싶은 욕구가 든다.", 
      en: "I feel the urge to correct people's grammar internally when I see mistakes.", 
      jp: "誤字脱字をする人を見ると、心の中で訂正したくなる欲求に駆られる。", 
      zh: "看到别人写错别字，我内心会有想纠正의冲动。", 
      lt: "Pamatęs gramatines klaidas, jaučiu norą jas mintyse ištaisyti." 
    }, direction: "+", weight: 0.8, category: 'stubborn' },
  { id: 36, text: { 
      ko: "나보다 어린 사람이 충고를 하면 기분이 나쁘다.", 
      en: "I feel bad when someone younger than me gives me advice.", 
      jp: "自分より若い人に忠告されると気分が悪い。", 
      zh: "当比我年轻的人给我建议时，我会感到不舒服。", 
      lt: "Jaučiuosi blogai, kai kas nors jaunesnis už mane duoda patarimą." 
    }, direction: "+", weight: 1.8, category: 'stubborn' },
  { id: 37, text: { 
      ko: "상대방의 말이 끝나기도 전에 내 주장을 먼저 말하고 싶다.", 
      en: "I want to state my point even before the other person finishes speaking.", 
      jp: "相手の話が終わる前に、自分の主張を先に言いたい。", 
      zh: "在对方还没说完之前，我就想先表达自己的观点。", 
      lt: "Noriu pasakyti savo nuomonę dar kitam žmogui nebaigus kalbėti." 
    }, direction: "+", weight: 1.6, category: 'stubborn' },

  // 일반 (General)
  { id: 2, text: { 
      ko: "새로운 환경이나 상황에 적응하는 데 시간이 오래 걸린다.", 
      en: "It takes me a long time to adjust to new environments or situations.", 
      jp: "新しい環境や状況に適応するのに時間がかかる。", 
      zh: "我需要很长时间才能适应新的环境或情况。", 
      lt: "Man užtrunka daug laiko prisitaikyti prie naujos aplinkos ar situacijų." 
    }, direction: "-", weight: 1.0, category: 'general' },
  { id: 10, text: { 
      ko: "편식이 심하고 싫어하는 건 반드시 빼고 먹는다.", 
      en: "I am a picky eater and always pick out things I dislike.", 
      jp: "好き嫌いが激しく、嫌いなものは必ず除いて食べる。", 
      zh: "我很挑食，总是把不喜欢的东西挑出来。", 
      lt: "Esu išrankus maistui ir visada išimu tai, ko nemėgstu." 
    }, direction: "-", weight: 1.0, category: 'general' },
  { id: 38, text: { 
      ko: "미래에 대한 걱정 때문에 현재를 즐기지 못할 때가 많다.", 
      en: "I often cannot enjoy the present because of worries about the future.", 
      jp: "将来への不安のせいで、現在を楽しめないことがよくある。", 
      zh: "我经常因为担心未来而无法享受现在。", 
      lt: "Dažnai negaliu mėgautis dabartimi dėl rūpesčių apie ateitį." 
    }, direction: "-", weight: 1.2, category: 'general' },
  { id: 39, text: { 
      ko: "결정을 내릴 때 타인의 시선을 많이 의식하는 편이다.", 
      en: "I tend to be very conscious of others' views when making decisions.", 
      jp: "決定を下す際、他人の目をかなり気にする方だ。", 
      zh: "在做决定时，我往往会非常在意他人的眼光。", 
      lt: "Priimdamas sprendimus esu linkęs labai atsižvelgti į kitų nuomonę." 
    }, direction: "-", weight: 1.1, category: 'general' },
  { id: 40, text: { 
      ko: "스스로가 꽤 어른스럽다고 생각한다.", 
      en: "I think I am quite mature.", 
      jp: "自分はかなり大人だと思う。", 
      zh: "我觉得自己挺成熟的。", 
      lt: "Manau, kad esu gana subrendęs." 
    }, direction: "+", weight: 1.0, category: 'general' },
  { id: 41, text: { 
      ko: "혼자 있는 시간보다 사람들과 어울리는 시간이 더 즐겁다.", 
      en: "I enjoy spending time with people more than being alone.", 
      jp: "一人でいる時間より、人々と過ごす時間の方が楽しい。", 
      zh: "比起独处，我更喜欢和人待在一起。", 
      lt: "Man labiau patinka leisti laiką su žmonėmis nei būti vienam." 
    }, direction: "+", weight: 0.9, category: 'general' },
  { id: 42, text: { 
      ko: "가끔은 책임감에서 벗어나 자유로워지고 싶다.", 
      en: "Sometimes I want to be free from responsibility.", 
      jp: "時々、責任感から解放されて自由になりたい。", 
      zh: "有时我想从责任中解脱出来，获得自由。", 
      lt: "Kartais noriu būti laisvas nuo atsakomybės." 
    }, direction: "+", weight: 0.8, category: 'general' },
  { id: 43, text: { 
      ko: "내 감정을 솔직하게 표현하는 것이 어렵지 않다.", 
      en: "It is not difficult for me to express my emotions honestly.", 
      jp: "自分の感情を正直に表現することは難しくない。", 
      zh: "对我来说，诚实地表达情感并不难。", 
      lt: "Man nėra sunku nuoširdžiai išreikšti savo emocijas." 
    }, direction: "+", weight: 1.2, category: 'general' },
  { id: 44, text: { 
      ko: "새로운 물건을 사면 설명서를 꼼꼼히 읽어본다.", 
      en: "When I buy something new, I read the manual carefully.", 
      jp: "新しい物を買うと、説明書をじっくり読む。", 
      zh: "买新东西时，我会仔细阅读说明书。", 
      lt: "Nusipirkęs naują daiktą, atidžiai perskaitau instrukciją." 
    }, direction: "+", weight: 0.7, category: 'general' }
];
