export interface DopamineQuestion {
  id: number;
  text: {
    ko: string;
    en: string;
    jp: string;
    zh: string;
    lt: string;
  };
  category: 'digital' | 'food' | 'habit' | 'emotion';
  weight: number;
}

export const dopamineQuestions: DopamineQuestion[] = [
  { id: 1, text: { 
      ko: "아침에 눈을 뜨자마자 스마트폰부터 확인하시나요?", 
      en: "Do you check your smartphone as soon as you wake up in the morning?", 
      jp: "朝起きてすぐにスマートフォンをチェックしますか？", 
      zh: "你早上起床后会立即查看智能手机吗？", 
      lt: "Ar tikrinate savo išmanųjį telefoną vos prabudę ryte?" 
    }, category: 'digital', weight: 1.5 },
  { id: 2, text: { 
      ko: "밥을 먹을 때 유튜브나 넷플릭스를 보지 않으면 허전함을 느끼나요?", 
      en: "Do you feel empty if you don't watch YouTube or Netflix while eating?", 
      jp: "食事中にYouTubeやNetflixを見ないと、物足りなさを感じますか？", 
      zh: "吃饭时不看YouTube或Netflix会感到空虚吗？", 
      lt: "Ar jaučiate tuštumą, jei valgydami nežiūrite YouTube ar Netflix?" 
    }, category: 'digital', weight: 1.2 },
  { id: 3, text: { 
      ko: "자극적이고 매운 음식이나 단 음식을 강하게 원할 때가 많나요?", 
      en: "Do you often strongly crave stimulating, spicy, or sweet foods?", 
      jp: "刺激的で辛い食べ物や甘い食べ物を強く欲することが多いですか？", 
      zh: "你是否经常强烈渴望刺激性、辛辣或甜食？", 
      lt: "Ar dažnai stipriai trokštate aštraus ar saldaus maisto?" 
    }, category: 'food', weight: 1.3 },
  { id: 4, text: { 
      ko: "특별한 목적 없이 SNS 피드를 계속 새로고침하며 시간을 보내나요?", 
      en: "Do you spend time constantly refreshing SNS feeds without a specific purpose?", 
      jp: "特別な目的なく、SNSのフィードを更新し続けて時間を過ごしますか？", 
      zh: "你是否在没有特定目的的情况下不断刷新社交媒体动态？", 
      lt: "Ar leidžiate laiką nuolat atnaujindami socialinių tinklų srautus be jokio tikslo?" 
    }, category: 'digital', weight: 1.8 },
  { id: 5, text: { 
      ko: "한 자리에 앉아 30분 이상 독서나 공부에 집중하기가 어렵나요?", 
      en: "Is it difficult for you to concentrate on reading or studying for more than 30 minutes at a time?", 
      jp: "30分以上、読書や勉強に集中して座り続けるのが難しいですか？", 
      zh: "你很难坐下来集中精力阅读或学习超过30分钟吗？", 
      lt: "Ar jums sunku susikoncentruoti skaitymui ar mokymuisi ilgiau nei 30 minučių?" 
    }, category: 'habit', weight: 2.0 },
  { id: 6, text: { 
      ko: "심심함을 견디지 못해 즉각적인 즐거움을 줄 수 있는 것을 바로 찾나요?", 
      en: "Can you not tolerate boredom and immediately look for something that gives instant pleasure?", 
      jp: "退屈さに耐えられず、すぐに楽しみを与えてくれるものを探しますか？", 
      zh: "你无法忍受无聊，会立即寻找能带来即时快乐的事情吗？", 
      lt: "Ar negalite ištverti nuobodulio ir iškart ieškote ko nors, kas suteiktų greitą malonumą?" 
    }, category: 'emotion', weight: 1.6 },
  { id: 7, text: { 
      ko: "쇼핑 앱에서 물건을 고르고 결제할 때 강한 쾌감을 느끼나요?", 
      en: "Do you feel strong pleasure when choosing and paying for items on shopping apps?", 
      jp: "ショッピングアプリで商品を選んで決済するとき、強い快感を感じますか？", 
      zh: "在购物应用中选择商品并支付时，你会感到强烈的快感吗？", 
      lt: "Ar jaučiate didelį malonumą rinkdamiesi ir pirkdami daiktus programėlėse?" 
    }, category: 'habit', weight: 1.4 },
  { id: 8, text: { 
      ko: "밤늦게까지 스마트폰을 하느라 수면 시간이 부족한 경우가 잦나요?", 
      en: "Do you often lack sleep because you stay up late using your smartphone?", 
      jp: "夜遅くまでスマートフォンをいじっていて、睡眠不足になることが多いですか？", 
      zh: "你是否经常因为深夜使用手机而睡眠不足？", 
      lt: "Ar dažnai neišsimiegate, nes vėlai vakare naudojatės išmaniuoju telefonu?" 
    }, category: 'digital', weight: 1.7 },
  { id: 9, text: { 
      ko: "게임이나 짧은 영상(숏폼)을 한 번 시작하면 멈추기가 힘든가요?", 
      en: "Is it hard for you to stop once you start playing games or watching short videos?", 
      jp: "ゲームやショート動画を一度始めると、止めるのが難しいですか？", 
      zh: "一旦开始玩游戏或看短视频，你很难停下来吗？", 
      lt: "Ar jums sunku sustoti pradėjus žaisti žaidimus ar žiūrėti trumpus vaizdo įrašus?" 
    }, category: 'digital', weight: 1.9 },
  { id: 10, text: { 
      ko: "현실의 인간관계보다 온라인상의 반응(좋아요, 댓글)에 더 민감한가요?", 
      en: "Are you more sensitive to online reactions (likes, comments) than real-life relationships?", 
      jp: "現実の人間関係より、オンライン上の反応（いいね、コメント）に敏感ですか？", 
      zh: "比起现实的人际关系，你是否对网上的反馈（点赞、评论）更敏感？", 
      lt: "Ar esate jautresnis internetinėms reakcijoms nei realaus gyvenimo santykiams?" 
    }, category: 'emotion', weight: 1.3 }
];
