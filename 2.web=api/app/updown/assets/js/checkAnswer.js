
function caseUp($icon) {

  // 1. #begin인 em의 숫자값을 선택한 값 + 1로 변경
  document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1;

  // 2. up 또는 down 요소에 애니메이션을 넣을 것. -> .selected를 추가해서.
  // #down 요소의 .selected를 제거, #up에 추가
  document.getElementById('down').classList.remove('selected');
  document.getElementById('up').classList.add('selected');

  // 3. 자기 자신 아이콘 포함 이전 형제 요소들 전부 삭제
  const $numbers = document.getElementById('numbers');

  let $delTarget = $icon;
  // 삭제되는 요소는 자신의 이전 형제 요소를 지목해 놓고 삭제됩니다.
  // 삭제되는 요소가 1번 아이콘인 경우에는 이전 요소가 없기 때문에 $delTarget이 null이 됩니다.
  // $delTarget이 null이 되는 순간 반복문을 종료시키겠다는 조건식을 작성.
  while($delTarget) {

    const $nextTarget = $delTarget.previousElementSibling;
    $numbers.removeChild($delTarget);

    $delTarget = $nextTarget;
  }


}

function caseDown($icon) {

    // 1. #end인 em의 숫자값을 선택한 값 - 1로 변경
    document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;

    // #down 요소의 .selected를 추가, #up에 제거
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');
  
    // 3. 자기 자신 아이콘 포함 다음 형제 요소들 전부 삭제
    const $numbers = document.getElementById('numbers');
  
    let $delTarget = $icon;
    // 삭제되는 요소는 자신의 이전 형제 요소를 지목해 놓고 삭제됩니다.
    // 삭제되는 요소가 1번 아이콘인 경우에는 이전 요소가 없기 때문에 $delTarget이 null이 됩니다.
    // $delTarget이 null이 되는 순간 반복문을 종료시키겠다는 조건식을 작성.
    while($delTarget) {
  
      const $nextTarget = $delTarget.nextElementSibling;
      $numbers.removeChild($delTarget);
  
      $delTarget = $nextTarget;
    }
  

}

function correctAnswer($icon) {
  
  // 1. #finish 박스에 class 'show' 부여

  // 2. #numbers 클릭 이벤트 해제
  $numbers.onclick = null;

  // 3. 사용자가 선택한 아이콘에 id 'move' 추가

}

export {caseUp, caseDown, correctAnswer};