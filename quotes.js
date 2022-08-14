const quotes = [
  { quote: "일찍 일어나는 새가 더 피곤하다." },
  { quote: "기회는 놓치지 말아라. 딴 놈이 잡는다." },
  { quote: "잠을 자면 꿈을 꾸지만, 안자면 졸리다." },
  {
    quote:
      "긍정적인 생각을 가진 사람은 한계가 없다. 그러나 부정적인 생각을 가진 사람은 한 게 없다.",
  },
  { quote: "하면 된다가 아니고 되면 한다" },
  { quote: "시작이 반이 아니다. 시작은 시작이다." },
  { quote: "지금 놀면 평생 논다." },
  { quote: "치킨은 살 안쪄요, 살은 내가 쪄요" },
  { quote: "흔들리면 살이야" },
  { quote: "늦었다고 생각할 때가 정말 늦었다." },
  { quote: "티끌모아 티끌이다." },
  { quote: "포기하면 편하다." },
  { quote: "즐길 수 없으면 피해라!" },
  { quote: "사람들은 할 말이 없으면 욕을 한다." },
  { quote: "미운 놈 떡하나 더 준다 퍽퍽한걸로 목막히라고" },
  { quote: "돈이라는 건 있다가도 없고, 이따가도 없고" },
];

const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todayQuote.quote;
