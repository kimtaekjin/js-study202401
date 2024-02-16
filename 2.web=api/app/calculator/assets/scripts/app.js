// 현재 계산기에 그려질 숫자
let currentResult = 0;

// 계산 이력을 모아 둘 배열
const logEntries = [];

let seq = 0; // 로그번호

// 입력창에 입력한 숫자 읽기
// parseInt()=Int 형태로 형변환
const $getUserNumberInput = () => parseInt($userInput.value);

// 로그 이력을 만드는 함수
const writeToLog = (operation, prevResult, number, result) => {
  // 하나의 로그 객체(연산타입, 이전결과, 연산숫자, 연산결과)
  const logObject = {
    operation,
    prevResult,
    number,
    result
  };

  logEntries.push(logObject);

  // 화면에 로그를 li로 렌더링하는 함수 호출
  renderToLog(logObject);
  console.log(logEntries);
};

// 로그 이력을 화면에 렌더링하는 함수
// 매개변수로 객체가 전달된다면 매개변수 위치에서 디스트럭쳐링이 가능합니다.
const renderToLog = (obj) => {
  // 로그를 렌더링하는 코드
};

// 계산 기능을 담당하는 함수
const calculate = (type) => {
  let mark;

  // 계산 전 값 기억
  const originalResult = currentResult;
  const $enteredNumber = $getUserNumberInput();



  ///NaN은 자신과 일치하지 않는 유일한 값 


  if (type === 'ADD') {
    mark = '+';
    currentResult += $enteredNumber;
  } else if (type === 'SUB') {
    mark = '-';
    currentResult -= $enteredNumber;
  } else if (type === 'multy') {
    mark = 'x';
    currentResult *= $enteredNumber;
  } else if (type === 'divide') {
    mark = '/';
    currentResult /= $enteredNumber;
  } else {
    if (!$enteredNumber && $enteredNumber === 0) {
      alert('문제발생!');
      return;
    }
  }

  // 연산식과 결과값을 두 번째 section에 렌더링
  $currentCalculationOutput.textContent = `${originalResult}${mark}${$enteredNumber}`;
  $currentReultOutput.textContent = currentResult;

  // 로그 이력 쌓기
  writeToLog(type, originalResult, $enteredNumber, currentResult);
};

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  calculate('ADD');
};

const subHandler = () => {
  calculate('SUB');
};

const multyHandler = () => {
  calculate('multy');
};

const divideHandler = () => {
  calculate('divide');
};

// ============ 이벤트 핸들러 바인딩 ================ //

$addbtn.addEventListener('click', addHandler);
$subbtn.addEventListener('click', subHandler);
$multybtn.addEventListener('click', multyHandler);
$dividebtn.addEventListener('click', divideHandler);