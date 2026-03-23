import React, { useState } from 'react';
import './MentalAgeTest.css';

// 질문 데이터 (총 25문항)
const questions = [
  { id: 1, text: "자신의 한계를 인정하고 도움을 요청하는 데 주저하지 않는다.", direction: "+" },
  { id: 2, text: "새로운 환경이나 상황에 적응하는 데 시간이 오래 걸린다.", direction: "-" },
  { id: 3, text: "갈등 발생 시 평화롭게 해결하려는 노력을 기울이나요?", direction: "+" },
  { id: 4, text: "새로운 아이디어나 관심사에 열정적으로 몰입하는 편인가요?", direction: "-" },
  { id: 5, text: "어려운 상황에서도 자신의 감정을 조절할 수 있나요?", direction: "+" },
  { id: 6, text: "타인의 의견에 비판적으로 생각하고 주관을 가질 수 있나요?", direction: "+" },
  { id: 7, text: "새로운 관계를 형성하고 유지하는 데 노력을 기울이나요?", direction: "+" },
  { id: 8, text: "타인의 요구에 따라 자신의 의사를 억누르는 경향이 있나요?", direction: "-" },
  { id: 9, text: "어린아이가 울며 떼쓰는 광경을 보면 화가 난다.", direction: "-" },
  { id: 10, text: "편식이 심하고 싫어하는 건 반드시 빼고 먹는다.", direction: "-" },
  { id: 11, text: "일상에서 사소한 것에 행복함을 잘 느낀다.", direction: "+" },
  { id: 12, text: "나는 아직 모르는 것이 많다고 생각한다.", direction: "+" },
  { id: 13, text: "내 마음대로 되지 않으면 화가 난다.", direction: "-" },
  { id: 14, text: "집 앞 가까운 거리를 나갈 때도 외모에 신경을 쓴다.", direction: "-" },
  { id: 15, text: "내 의견을 말할 때 주저하게 된다.", direction: "-" },
  { id: 16, text: "갖고 싶은 것이 있다면 꼭 가져야 한다.", direction: "-" },
  // 신규 질문 추가
  { id: 17, text: "식당에서 주문한 음식이 잘못 나왔을 때, 그냥 참고 먹는 편이다.", direction: "-" },
  { id: 18, text: "SNS에 올릴 사진을 고르는 데 10분 이상 고민하곤 한다.", direction: "-" },
  { id: 19, text: "잘못을 저질렀을 때 변명보다는 해결책을 먼저 고민한다.", direction: "+" },
  { id: 20, text: "유행하는 신조어나 밈(Meme)을 모르면 소외감을 느낀다.", direction: "-" },
  { id: 21, text: "부모님이나 어른의 잔소리를 들을 때 감정적으로 대응하지 않는다.", direction: "+" },
  { id: 22, text: "혼자 있는 시간보다 친구들과 떠들썩하게 노는 게 무조건 좋다.", direction: "-" },
  { id: 23, text: "가끔 아무 이유 없이 하늘을 보거나 멍 때리는 시간을 즐긴다.", direction: "+" },
  { id: 24, text: "맞춤법을 틀리는 사람을 보면 속으로 교정해주고 싶은 욕구가 든다.", direction: "+" },
  { id: 25, text: "내일 할 일을 미리 계획해두지 않으면 불안해서 잠이 안 온다.", direction: "+" },
];

const MentalAgeTest: React.FC = () => {
  const [phase, setPhase] = useState<'intro' | 'test' | 'result'>('intro');
  const [actualAge, setActualAge] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const startTest = () => {
    if (!actualAge || isNaN(Number(actualAge)) || Number(actualAge) <= 0) {
      alert('나이를 정확히 입력해 주세요!');
      return;
    }
    setPhase('test');
  };

  const handleAnswer = (value: number) => {
    const newScores = [...scores, value];
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setPhase('result');
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      const score = scores[index];
      totalScore += q.direction === "+" ? score : (6 - score);
    });

    let mentalAge = 0;
    let resultTitle = "";
    let desc = "";
    let icon = "";

    // 25문항 기준 점수 구간 (최소 25점 ~ 최대 125점)
    if (totalScore <= 47) {
      mentalAge = Math.floor(((totalScore - 25) / 22) * (13 - 8) + 8);
      resultTitle = "[초딩 멘탈]";
      desc = "호기심 천국, 자기중심적이지만 순수한 영혼.";
      icon = "🐥";
    } else if (totalScore <= 78) {
      mentalAge = Math.floor(((totalScore - 48) / 30) * (19 - 14) + 14);
      resultTitle = "[질풍노도 중고딩]";
      desc = "자의식이 강하고 감정 기복이 있지만 에너지가 넘침.";
      icon = "🔥";
    } else if (totalScore <= 109) {
      mentalAge = Math.floor(((totalScore - 79) / 30) * (39 - 20) + 20);
      resultTitle = "[갓생 사는 어른이]";
      desc = "사회적 예의를 갖췄고 적절히 타협할 줄 아는 상태.";
      icon = "☕";
    } else {
      mentalAge = Math.floor(((totalScore - 110) / 15) * (65 - 40) + 40);
      resultTitle = "[인생 2회차 선비]";
      desc = "해탈의 경지. 어떤 상황에서도 흔들리지 않는 편안함.";
      icon = "🍵";
    }

    const ageDiff = mentalAge - Number(actualAge);
    let comparisonMsg = "";
    if (Math.abs(ageDiff) <= 2) {
      comparisonMsg = "실제 나이와 정신 연령이 아주 비슷하시네요! 건강한 밸런스를 유지하고 있습니다.";
    } else if (ageDiff > 0) {
      comparisonMsg = `실제 나이보다 ${ageDiff}살 정도 더 깊고 성숙한 생각을 가지고 계시군요.`;
    } else {
      comparisonMsg = `실제 나이보다 ${Math.abs(ageDiff)}살 정도 더 젊고 유연한 감각을 유지하고 계시네요!`;
    }

    return { mentalAge: `${mentalAge}세`, resultTitle, desc, comparisonMsg, icon };
  };

  if (phase === 'intro') {
    return (
      <div className="mental-test-container intro-page">
        <div className="character-icon floating">🤔</div>
        <h2>정신연령 테스트</h2>
        <p>총 25개의 문항으로 당신의 내면을 분석합니다.</p>
        <div className="input-group">
          <input 
            type="number" 
            placeholder="나이" 
            value={actualAge} 
            onChange={(e) => setActualAge(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && startTest()}
          />
          <span className="unit">세</span>
        </div>
        <button className="primary-button" onClick={startTest}>테스트 시작</button>
      </div>
    );
  }

  if (phase === 'result') {
    const result = calculateResult();
    return (
      <div className="mental-test-container result-page">
        <h2>테스트 결과</h2>
        <div className="result-box">
          <div className="character-icon floating">{result.icon}</div>
          <h3>당신의 정신연령은...</h3>
          <p className="age-text">{result.mentalAge}</p>
          <div className="type-badge">{result.resultTitle}</div>
          <p className="desc-text">{result.desc}</p>
          <div className="divider"></div>
          <p className="comparison-text">{result.comparisonMsg}</p>
        </div>
        <button className="primary-button" onClick={() => window.location.reload()}>다시 테스트하기</button>
      </div>
    );
  }

  return (
    <div className="mental-test-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-card">
        <span className="q-number">질문 {currentStep + 1} / {questions.length}</span>
        <h2 className="q-text">{questions[currentStep].text}</h2>
        
        <div className="answer-buttons">
          <button className="answer-btn agree-very" onClick={() => handleAnswer(5)}>매우 그렇다</button>
          <button className="answer-btn agree" onClick={() => handleAnswer(4)}>그렇다</button>
          <button className="answer-btn neutral" onClick={() => handleAnswer(3)}>보통이다</button>
          <button className="answer-btn disagree" onClick={() => handleAnswer(2)}>아니다</button>
          <button className="answer-btn disagree-very" onClick={() => handleAnswer(1)}>전혀 아니다</button>
        </div>
      </div>
    </div>
  );
};

export default MentalAgeTest;
