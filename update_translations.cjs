const fs = require('fs');

const dessertTranslationsData = {
  ko: {
    tiramisu: { bestMatch: "크림브륄레 / 바클라바", worstMatch: "젤라또", memes: ["“겉은 조용, 속은 깊음”", "“생각 진짜 많이 함”", "“감정 오래 가는 타입”", "“한 번 좋아하면 깊게 감”", "“혼자 정리하는 시간 필요”", "“말보다 마음이 큼”", "“작은 거에 의미 부여함”", "“티 안 내고 신경 많이 씀”", "“관계 쉽게 안 끊음”", "“시간 지날수록 진해짐”"] },
    macaron: { bestMatch: "젤라또 / 빙수", worstMatch: "브라우니", memes: ["“겉은 화려한데 속은 생각보다 섬세함”", "“아무렇지 않은 척 잘함 (사실 다 신경씀)”", "“기분 좋으면 티 바로 남”", "“사람 좋아하지만 상처도 잘 받음”", "“분위기 타는 타입”", "“예쁜 거 좋아하는데 감정도 예쁨”", "“좋아하면 티 못 숨김”", "“감정 롤러코스터 은근 있음”", "“사람 때문에 기분 바뀌는 타입”", "“겉보다 속이 더 진짜임”"] },
    brownie: { bestMatch: "크림브륄레 / 티라미수", worstMatch: "마카롱", memes: ["“조용한데 한 번 친해지면 끝까지 감”", "“겉은 무심, 속은 집착(?)”", "“감정 깊은데 표현은 안 함”", "“사람 오래 보는 타입”", "“한 번 마음 주면 오래 감”", "“혼자 생각 많이 하는 편”", "“겉으로는 아무렇지도 않은 척”", "“알고 보면 제일 진국”", "“관계 끊는 거 어려워함”", "“느리지만 확실함”"] },
    pudding: { bestMatch: "빙수 / 모찌", worstMatch: "바클라바", memes: ["“그냥 같이 있으면 편한 사람”", "“웬만하면 다 맞춰줌”", "“싸우는 거 싫어함”", "“분위기 깨는 거 제일 싫어함”", "“착해서 손해 보는 타입”", "“사람들 사이에서 완충제 역할”", "“조용히 챙겨주는 스타일”", "“티 안 내고 배려함”", "“편안함 끝판왕”", "“누구랑 있어도 무난하게 잘 지냄”"] },
    gelato: { bestMatch: "마카롱 / 빙수", worstMatch: "크림브륄레", memes: ["“재밌는 거 못 참음”", "“즉흥적인 거 좋아함”", "“사람 만나는 거 좋아함”", "“기분이 얼굴에 다 드러남”", "“행동이 빠름 생각보다”", "“노잼이면 바로 흥미 잃음”", "“계획? 일단 놀고 보자”", "“에너지 넘치는 타입”", "“분위기 메이커”", "“재미 없으면 못 버팀”"] },
    baklava: { bestMatch: "티라미수 / 브라우니", worstMatch: "푸딩", memes: ["“강한 사람 옆에 강한 사람”", "“자기주장 확실함”", "“밀당 잘함”", "“호불호 명확함”", "“좋으면 좋다 싫으면 싫다”", "“애매한 거 싫어함”", "“자기 기준 뚜렷함”", "“카리스마 있는 타입”", "“쉽게 휘둘리지 않음”", "“강하게 끌리는 스타일”"] },
    bingsu: { bestMatch: "마카롱 / 푸딩", worstMatch: "바클라바", memes: ["“같이 있으면 그냥 좋음”", "“분위기 편하게 만드는 사람”", "“사람들 사이 연결고리 역할”", "“어디 가도 잘 어울림”", "“부담 없는 타입”", "“다 같이 있는 거 좋아함”", "“친구 많은 스타일”", "“적당한 거리감 잘 지킴”", "“편안함이 매력”", "“누구랑 있어도 자연스러움”"] },
    mochi: { bestMatch: "푸딩 / 에그타르트", worstMatch: "젤라또", memes: ["“말랑해 보이는데 속은 단단함”", "“상처 잘 받지만 잘 안 티냄”", "“혼자만의 시간 중요”", "“사람 깊게 사귀는 스타일”", "“조용히 오래 가는 타입”", "“감정 쌓아두는 편”", "“낯가림 있음”", "“편해지면 완전 달라짐”", "“은근히 고집 있음”", "“겉과 속 갭 있음”"] },
    creme_brulee: { bestMatch: "브라우니 / 티라미수", worstMatch: "젤라또", memes: ["“겉은 단단, 속은 부드러움”", "“처음엔 다가가기 어려움”", "“친해지면 완전 다름”", "“감정 쉽게 안 드러냄”", "“속으로는 다 생각함”", "“신뢰 중요하게 생각함”", "“사람 오래 봄”", "“차분한데 따뜻함 있음”", "“겉보기보다 다정함”", "“시간 지나야 진짜 보임”"] },
    egg_tart: { bestMatch: "모찌 / 푸딩", worstMatch: "바클라바", memes: ["“조용한데 은근 따뜻함”", "“말보다 행동으로 보여줌”", "“편한 사람한테만 열림”", "“신중하게 관계 맺음”", "“한 번 친해지면 오래 감”", "“감정 표현은 서툼”", "“속으로는 많이 생각함”", "“작은 것도 기억함”", "“안정감 주는 타입”", "“은은하게 스며드는 스타일”"] }
  },
  en: {
    tiramisu: { bestMatch: "Creme Brulee / Baklava", worstMatch: "Gelato", memes: ["\"Quiet outside, deep inside\"", "\"Thinking a lot\"", "\"Emotions last a long time\"", "\"Goes deep once they like someone\"", "\"Needs time to organize alone\"", "\"Heart is bigger than words\"", "\"Assigns meaning to small things\"", "\"Cares a lot without showing it\"", "\"Doesn't easily cut ties\"", "\"Becomes richer as time passes\""] },
    macaron: { bestMatch: "Gelato / Bingsu", worstMatch: "Brownie", memes: ["\"Looks flashy but more delicate than expected\"", "\"Good at pretending to be fine (actually cares about everything)\"", "\"Happiness shows instantly\"", "\"Likes people but gets hurt easily\"", "\"Moody type\"", "\"Likes pretty things, emotions are pretty too\"", "\"Can't hide feelings when in love\"", "\"Has emotional rollercoasters\"", "\"Mood changes because of people\"", "\"Inside is more real than outside\""] },
    brownie: { bestMatch: "Creme Brulee / Tiramisu", worstMatch: "Macaron", memes: ["\"Quiet but stays until the end once close\"", "\"Indifferent outside, obsessive(?) inside\"", "\"Deep emotions but no expression\"", "\"Takes a long time to know someone\"", "\"Once heart is given, it lasts long\"", "\"Thinks a lot alone\"", "\"Pretends to be nothing on the outside\"", "\"Actually the most genuine once known\"", "\"Difficulty in ending relationships\"", "\"Slow but certain\""] },
    pudding: { bestMatch: "Bingsu / Mochi", worstMatch: "Baklava", memes: ["\"Comfortable person to be with\"", "\"Adjusts to others mostly\"", "\"Hates fighting\"", "\"Hates breaking the mood the most\"", "\"Type to lose out because of kindness\"", "\"Buffer role among people\"", "\"Quietly caring style\"", "\"Cares without showing off\"", "\"King of comfort\"", "\"Gets along well with anyone\""] },
    gelato: { bestMatch: "Macaron / Bingsu", worstMatch: "Creme Brulee", memes: ["\"Can't stand not having fun\"", "\"Likes spontaneous things\"", "\"Likes meeting people\"", "\"Mood shows on face instantly\"", "\"Faster actions than expected\"", "\"Loses interest immediately if it's boring\"", "\"Plans? Let's play first\"", "\"High energy type\"", "\"Mood maker\"", "\"Can't survive if it's not fun\""] },
    baklava: { bestMatch: "Tiramisu / Brownie", worstMatch: "Pudding", memes: ["\"Strong person next to strong person\"", "\"Certain about self-assertion\"", "\"Good at push and pull\"", "\"Clear likes and dislikes\"", "\"If it's good, it's good; if it's bad, it's bad\"", "\"Hates ambiguity\"", "\"Clear personal standards\"", "\"Charismatic type\"", "\"Not easily influenced\"", "\"Strongly attracting style\""] },
    bingsu: { bestMatch: "Macaron / Pudding", worstMatch: "Baklava", memes: ["\"Just good to be with\"", "\"Person who makes atmosphere comfortable\"", "\"Link role among people\"", "\"Fits in well anywhere\"", "\"No pressure type\"", "\"Likes being together\"", "\"Has many friends style\"", "\"Keeps appropriate distance well\"", "\"Comfort is the charm\"", "\"Natural with anyone\""] },
    mochi: { bestMatch: "Pudding / Egg Tart", worstMatch: "Gelato", memes: ["\"Looks soft but firm inside\"", "\"Gets hurt easily but doesn't show it\"", "\"Alone time is important\"", "\"Deeply bonding style\"", "\"Quietly lasting type\"", "\"Tends to stack up emotions\"", "\"Has shyness\"", "\"Completely different once comfortable\"", "\"Secretly stubborn\"", "\"Gap between outside and inside\""] },
    creme_brulee: { bestMatch: "Brownie / Tiramisu", worstMatch: "Gelato", memes: ["\"Hard outside, soft inside\"", "\"Hard to approach at first\"", "\"Completely different once close\"", "\"Doesn't show emotions easily\"", "\"Thinks everything inside\"", "\"Values trust highly\"", "\"Watches people for a long time\"", "\"Calm but has warmth\"", "\"Kinder than they look\"", "\"Real self shows over time\""] },
    egg_tart: { bestMatch: "Mochi / Pudding", worstMatch: "Baklava", memes: ["\"Quiet but subtly warm\"", "\"Shows through actions rather than words\"", "\"Opens only to comfortable people\"", "\"Builds relationships carefully\"", "\"Lasts long once close\"", "\"Clumsy at expressing emotions\"", "\"Thinks a lot inside\"", "\"Remembers even small things\"", "\"Type that gives stability\"", "\"Style that permeates subtly\""] }
  },
  jp: {
    tiramisu: { bestMatch: "クレームブリュレ / バクラヴァ", worstMatch: "ジェラート", memes: ["「外は静か、中は深い」", "「考えが本当に多い」", "「感情が長く続くタイプ」", "「一度好きになると深く行く」", "「一人で整理する時間が必要」", "「言葉より心が大きい」", "「小さなことに意味を置く」", "「顔に出さずに気遣いをする」", "「関係を簡単に切らない」", "「時間が経つほど濃くなる」"] },
    macaron: { bestMatch: "ジェラート / かき氷", worstMatch: "ブラウニー", memes: ["「外は華やかだが、中は思ったより繊細」", "「何ともないふりをするのが上手（実は全部気にしてる）」", "「気分が良いとすぐ顔に出る」", "「人が好きだが傷つきやすい」", "「雰囲気に流されるタイプ」", "「きれいなものが好きで感情もきれい」", "「好きになると隠せない」", "「感情の起伏が密かにある」", "「人のせいで気分が変わるタイプ」", "「外より中がもっと本物」"] },
    brownie: { bestMatch: "クレームブリュレ / ティラミス", worstMatch: "マカロン", memes: ["「静かだが一度親しくなると最後まで行く」", "「外は無関心、中は執着（？）」", "「感情は深いが表現はしない」", "「人を長く見るタイプ」", "「一度心を与えると長く続く」", "「一人で考えることが多い」", "「外では何ともないふり」", "「知ってみれば一番の真面目」", "「関係を切るのが苦手」", "「遅いが確実」"] },
    pudding: { bestMatch: "かき氷 / もち", worstMatch: "バクラヴァ", memes: ["「ただ一緒にいると楽な人」", "「大抵のことは合わせてくれる」", "「喧嘩するのが嫌い」", "「雰囲気を壊すのが一番嫌い」", "「優しくて損をするタイプ」", "「人々の間で緩衝材の役割」", "「静かに気遣ってくれるスタイル」", "「顔に出さずに配慮する」", "「心地よさの極致」", "「誰といても無難に過ごせる」"] },
    gelato: { bestMatch: "マカロン / かき氷", worstMatch: "クレームブリュレ", memes: ["「楽しいことが我慢できない」", "「即興的なことが好き」", "「人に会うのが好き」", "「気分が顔に全部出る」", "「思ったより行動が早い」", "「つまらないとすぐに興味を失う」", "「計画？とりあえず遊ぼう」", "「エネルギーあふれるタイプ」", "「ムードメーカー」", "「楽しくないと耐えられない」"] },
    baklava: { bestMatch: "ティラミス / ブラウニー", worstMatch: "プリン", memes: ["「強い人の隣に強い人」", "「自己主張がはっきりしている」", "「駆け引きが上手」", "「好き嫌いが明確」", "「良ければ良い、嫌なら嫌」", "「曖昧なのが嫌い」", "「自分の基準がはっきりしている」", "「カリスマ性のあるタイプ」", "「簡単に振り回されない」", "「強く惹かれるスタイル」"] },
    bingsu: { bestMatch: "マカロン / プリン", worstMatch: "バクラヴァ", memes: ["「一緒にいるだけでいい」", "「雰囲気を楽にする人」", "「人々の間の繋ぎ役」", "「どこへ行っても馴染める」", "「負担のないタイプ」", "「みんなでいるのが好き」", "「友達が多いスタイル」", "「適度な距離感を保つのが上手」", "「心地よさが魅力」", "「誰といても自然」"] },
    mochi: { bestMatch: "プリン / エッグタルト", worstMatch: "ジェラート", memes: ["「柔らかそうに見えて中は硬い」", "「傷つきやすいが顔に出さない」", "「一人だけの時間が重要」", "「人を深く付き合うスタイル」", "「静かに長く続くタイプ」", "「感情を溜め込む方」", "「人見知りがある」", "「親しくなると全然違う」", "「密かにこだわりがある」", "「外と中のギャップがある」"] },
    creme_brulee: { bestMatch: "ブラウニー / ティラミス", worstMatch: "ジェラート", memes: ["「外は硬く、中は柔らかい」", "「最初は近づきにくい」", "「親しくなると全然違う」", "「感情を簡単に表に出さない」", "「心の中では全部考えている」", "「信頼を重要視する」", "「人を長く見る」", "「落ち着いているが温かみがある」", "「見た目より優しい」", "「時間が経ってから本音が見える」"] },
    egg_tart: { bestMatch: "もち / プリン", worstMatch: "バクラヴァ", memes: ["「静かだが密かに温かい」", "「言葉より行動で見せる」", "「心地よい人にだけ心を開く」", "「慎重に関係を築く」", "「一度親しくなると長く続く」", "「感情表現は苦手」", "「心の中ではたくさん考えている」", "「小さなことも覚えている」", "「安定感を与えるタイプ」", "「密かに染み込むスタイル」"] }
  },
  zh: {
    tiramisu: { bestMatch: "焦糖布丁 / 巴克拉瓦", worstMatch: "意式冰淇淋", memes: ["“外表安静，内心深沉”", "“想得真的很多”", "“感情持久的类型”", "“一旦喜欢就会很深”", "“需要独自整理的时间”", "“心意比言语更重”", "“对小事赋予意义”", "“默默关心不露声色”", "“不轻易断绝关系”", "“随时间流逝而愈发浓厚”"] },
    macaron: { bestMatch: "意式冰淇淋 / 刨冰", worstMatch: "布朗尼", memes: ["“外表华丽但内心比想象中细腻”", "“擅长装作若无其事（其实全在心上）”", "“心情好就立刻写在脸上”", "“喜欢人但也容易受伤”", "“随气氛而动的类型”", "“喜欢美好的事物，情感也很美好”", "“喜欢就藏不住”", "“内心有情感过山车”", "“心情因人而异”", "“内心比外表更真实”"] },
    brownie: { bestMatch: "焦糖布丁 / 提拉米苏", worstMatch: "马卡龙", memes: ["“安静但一旦亲近就会走到底”", "“外表冷淡，内心执着（？）”", "“感情深沉但不表达”", "“观察人很久的类型”", "“一旦付出真心就很持久”", "“习惯独自思考”", "“外表装作无所谓”", "“了解后发现最真实”", "“很难断绝关系”", "“虽慢但确定”"] },
    pudding: { bestMatch: "刨冰 / 糯米糍", worstMatch: "巴克拉瓦", memes: ["“在一起就很舒服的人”", "“大部分情况都能配合”", "“讨厌吵架”", "“最讨厌破坏气氛”", "“善良到吃亏的类型”", "“人际关系中的缓冲剂”", "“默默照顾人的风格”", "“不露声色地体贴”", "“舒适感巅峰”", "“和谁都能相处得不错”"] },
    gelato: { bestMatch: "马카롱 / 刨冰", worstMatch: "焦糖布丁", memes: ["“受不了没趣的事”", "“喜欢即兴”", "“喜欢见人”", "“心情全写在脸上”", "“行动比想象中快”", "“没趣就立刻失去兴趣”", "“计划？先玩再说”", "“精力充沛型”", "“气氛组核心”", "“没趣就待不下去”"] },
    baklava: { bestMatch: "提拉米苏 / 布朗尼", worstMatch: "布丁", memes: ["“强强联手”", "“自我主张明确”", "“擅长推拉”", "“好恶分明”", "“好就是好，坏就是坏”", "“讨厌暧昧”", "“个人标准清晰”", "“有魅力的类型”", "“不易受影响”", "“极具吸引力的风格”"] },
    bingsu: { bestMatch: "马卡龙 / 布丁", worstMatch: "巴克拉瓦", memes: ["“在一起就很好”", "“让气氛变轻松的人”", "“人际关系中的纽带”", "“去哪都能融入”", "“没压力的类型”", "“喜欢大家聚在一起”", "“朋友很多的风格”", "“擅长保持适当距离”", "“魅力在于舒适感”", "“和谁都能自然相处”"] },
    mochi: { bestMatch: "布丁 / 蛋挞", worstMatch: "意式冰淇淋", memes: ["“看起来软糯但内心坚韧”", "“容易受伤但不表现”", "“独处时间很重要”", "“深交型”", "“默默持久型”", "“习惯积压情感”", "“有些怕生”", "“亲近后完全不同”", "“骨子里有点固执”", "“内外有反差”"] },
    creme_brulee: { bestMatch: "布朗尼 / 提拉米苏", worstMatch: "意式冰淇淋", memes: ["“外硬内软”", "“起初难以接近”", "“亲近后完全不同”", "“不易流露情感”", "“内心想了很多”", "“非常看重信任”", "“观察人很久”", "“沉稳但有温度”", "“比看起来温柔”", "“时间久了才见真心”"] },
    egg_tart: { bestMatch: "糯米糍 / 布丁", worstMatch: "巴克拉瓦", memes: ["“安静但默默温暖”", "“行动胜过言语”", "“只对舒服的人敞开”", "“谨慎建立关系”", "“一旦亲近就很持久”", "“不擅长表达感情”", "“内心想了很多”", "“记得细微的小事”", "“给人安定感的类型”", "“潜移默化的风格”"] }
  },
  lt: {
    tiramisu: { bestMatch: "Krembriulė / Baklava", worstMatch: "Dželato", memes: ["„Išorėje tylus, viduje gilus“", "„Tikrai daug galvoja“", "„Emocijos trunka ilgai“", "„Jei pamilsta, tai giliai“", "„Reikia laiko susitvarkyti vienam“", "„Širdis didesnė už žodžius“", "„Suteikia prasmę smulkmenoms“", "„Daug rūpinasi nerodydamas“", "„Lengvai nenutraukia ryšių“", "„Laikui bėgant tampa tikresnis“"] },
    macaron: { bestMatch: "Dželato / Bingsu", worstMatch: "Braunis", memes: ["„Išorė prabangi, bet vidus jautresnis nei manote“", "„Gerai apsimeta, kad viskas gerai (iš tikrųjų viskas rūpi)“", "„Jei nuotaika gera, tai iškart matosi“", "„Mėgsta žmones, bet lengvai įskaudinamas“", "„Pasiduodantis atmosferai tipas“", "„Mėgsta gražius dalykus, jausmai irgi gražūs“", "„Jei patinka, negali paslėpti“", "„Turi emocinius kalnelius“", "„Nuotaika keičiasi dėl žmonių“", "„Vidus yra tikresnis nei išorė“"] },
    brownie: { bestMatch: "Krembriulė / Tiramisu", worstMatch: "Makarūnas", memes: ["„Tylus, bet susidraugavęs lieka iki galo“", "„Išorėje abejingas, viduje prisirišęs(?)“", "„Emocijos gilios, bet jų nereiškia“", "„Žmones stebi ilgai“", "„Atidavęs širdį, ją palieka ilgam“", "„Daug galvoja vienas“", "„Išorėje apsimeta, kad nieko nevyksta“", "„Pažinus pasirodo esąs nuoširdžiausias“", "„Sunku nutraukti santykius“", "„Lėtas, bet užtikrintas“"] },
    pudding: { bestMatch: "Bingsu / Moči", worstMatch: "Baklava", memes: ["„Tiesiog patogus žmogus šalia“", "„Dažniausiai prisitaiko prie kitų“", "„Nemėgsta pyktis“", "„Labiausiai nemėgsta gadinti nuotaikos“", "„Geras, todėl kartais nukenčia“", "„Buferio vaidmuo tarp žmonių“", "„Tyliai besirūpinantis stilius“", "„Rūpinasi nerodydamas“", "„Patogumo viršūnė“", "„Su bet kuo sutaria neblogai“"] },
    gelato: { bestMatch: "Makarūnas / Bingsu", worstMatch: "Krembriulė", memes: ["„Negali pakęsti nuobodulio“", "„Mėgsta spontaniškumą“", "„Mėgsta susitikti su žmonėmis“", "„Nuotaika iškart matosi veide“", "„Veikia greičiau nei galvoja“", "„Jei neįdomu, iškart praranda susidomėjimą“", "„Planai? Pirmiausia pasilinksminkim“", "„Energingas tipas“", "„Nuotaikos kūrėjas“", "„Negali ištverti be linksmybių“"] },
    baklava: { bestMatch: "Tiramisu / Braunis", worstMatch: "Pudingas", memes: ["„Stiprus žmogus šalia stipraus“", "„Aiškiai išreiškia savo nuomonę“", "„Gerai moka žaisti jausmais“", "„Aiškiai žino, kas patinka, o kas ne“", "„Jei gerai, tai gerai; jei blogai, tai blogai“", "„Nemėgsta dviprasmiškumo“", "„Turi aiškius asmeninius standartus“", "„Charizmatiškas tipas“", "„Lengvai nepasiduoda įtakai“", "„Stipriai traukiantis stilius“"] },
    bingsu: { bestMatch: "Makarūnas / Pudingas", worstMatch: "Baklava", memes: ["„Tiesiog gera būti kartu“", "„Žmogus, sukuriantis patogią atmosferą“", "„Jungiamoji grandis tarp žmonių“", "„Bet kur gerai prisitaiko“", "„Nespaudžiantis tipas“", "„Mėgsta būti kartu su visais“", "„Turi daug draugų“", "„Gerai išlaiko tinkamą atstumą“", "„Žavesys slypi patogume“", "„Natūralus su bet kuo“"] },
    mochi: { bestMatch: "Pudingas / Kiaušinių tartas", worstMatch: "Dželato", memes: ["„Atrodo minkštas, bet viduje tvirtas“", "„Lengvai įskaudinamas, bet nerodo“", "„Vienatvė yra svarbi“", "„Gilaus ryšio siekiantis stilius“", "„Tyliai ilgai išliekantis tipas“", "„Linkęs kaupti emocijas“", "„Yra drovumo“", "„Atsipalaidavęs tampa visai kitoks“", "„Slapta užsispyręs“", "„Didelis skirtumas tarp išorės ir vidaus“"] },
    creme_brulee: { bestMatch: "Braunis / Tiramisu", worstMatch: "Dželato", memes: ["„Išorėje kietas, viduje minkštas“", "„Iš pradžių sunku prieiti“", "„Susidraugavus tampa visai kitoks“", "„Lengvai nerodo emocijų“", "„Viską apgalvoja viduje“", "„Ypač vertina pasitikėjimą“", "„Žmones stebi ilgai“", "„Ramus, bet turi šilumos“", "„Mielesnis nei atrodo“", "„Tikrasis „aš“ pasimato po kurio laiko“"] },
    egg_tart: { bestMatch: "Moči / Pudingas", worstMatch: "Baklava", memes: ["„Tylus, bet slapta šiltas“", "„Rodo veiksmais, o ne žodžiais“", "„Atsiveria tik patogiems žmonėms“", "„Santykius kuria atsargiai“", "„Susidraugavęs lieka ilgam“", "„Nėra geras reikšti emocijas“", "„Daug galvoja viduje“", "„Prisimena net smulkmenas“", "„Suteikia stabilumo jausmą“", "„Stilius, kuris pamažu prisijaukina“"] }
  }
};

const originalContent = fs.readFileSync('src/dessertTest/data/translations.ts', 'utf8');

let updatedContent = originalContent;

const languages = ['ko', 'en', 'jp', 'zh', 'lt'];
const desserts = ['tiramisu', 'macaron', 'brownie', 'pudding', 'gelato', 'baklava', 'bingsu', 'egg_tart', 'mochi', 'creme_brulee'];

for (const lang of languages) {
    const langStart = updatedContent.indexOf(`  ${lang}: {`);
    let langEnd;
    if (lang === 'lt') {
        langEnd = updatedContent.lastIndexOf('    }\n  }\n};');
    } else {
        const nextLangs = { ko: 'en', en: 'jp', jp: 'zh', zh: 'lt' };
        langEnd = updatedContent.indexOf(`  ${nextLangs[lang]}: {`, langStart);
    }
    
    let langBlock = updatedContent.substring(langStart, langEnd);
    const originalLangBlock = langBlock;

    for (const dessert of desserts) {
        // Regex to find the dessert block precisely
        const dessertRegex = new RegExp(`      ${dessert}: \\{[\\s\\S]*?      \\},?`, 'g');
        const match = dessertRegex.exec(langBlock);
        if (!match) continue;
        
        let dessertBlock = match[0];
        const data = dessertTranslationsData[lang][dessert];
        
        let newDessertBlock = dessertBlock;
        newDessertBlock = newDessertBlock.replace(/bestMatch: ".*",/, `bestMatch: "${data.bestMatch}",`);
        newDessertBlock = newDessertBlock.replace(/worstMatch: ".*",/, `worstMatch: "${data.worstMatch}",`);
        
        const formattedMemes = '[\n          ' + data.memes.map(m => `"${m.replace(/"/g, '\\"')}"`).join(',\n          ') + '\n        ]';
        newDessertBlock = newDessertBlock.replace(/meme: ".*",/, `memes: ${formattedMemes},`);
        
        langBlock = langBlock.replace(dessertBlock, newDessertBlock);
    }
    updatedContent = updatedContent.replace(originalLangBlock, langBlock);
}

fs.writeFileSync('src/dessertTest/data/translations.ts', updatedContent);
console.log('Successfully updated src/dessertTest/data/translations.ts');
