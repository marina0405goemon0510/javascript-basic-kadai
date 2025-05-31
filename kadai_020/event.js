// btn、textというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
const text=document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行する
  Btn.addEventListener('click', () => {
     // クリックされたときに文字を変更するidを取得する
   text.textContent="ボタンをクリックしました"
  })
  