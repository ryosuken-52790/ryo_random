let btn = document.getElementById('btn');

btn.addEventListener('click',btn);
function changeWords(){

let changeWords = document.getElementById('result');

      // これ、いる？

// let words = document.getElementById('words');


  // 0~4(ex.)

  let res = [
    '自分自身を信じてみるだけでいい。<br>きっと生きる道が見えてくる。(ゲーテ)',
    '夢中で日を過ごしておれば、<br>いつかはわかる時が来る。(坂本竜馬)',
    'リンカーン',
    '',
    'pink',
    'むらさき',
    'blown',
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
  ];
      // 選択肢を考える

  let randomNum = Math.random();
  let num = Math.floor(randomNum * res.length);
  // let result = document.getElementById('result');

words.textContent = res[num][0];


    // ↑↑意味がわかってない。

    // 結果を出すために必要なコードは??
    // 指定したidは意味を成してる？

    // なぜかイニシャルしか出ない笑
}
