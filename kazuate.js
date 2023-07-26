// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let finish = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[kazu="kaitou"]');
  let yoso = i.value;
  kaisu++;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  let k = document.querySelector('span#kaisu');
  k.textContent =  kaisu;
  
  let a = document.querySelector('span#answer');
  a.textContent =  yoso;

  let r = document.querySelector('p#result');

  console.log(kaisu + "回目の予想 : " + yoso);
  if(kaisu >= 4){
    finish = 1;
  }

  if(finish == 1){
    r.textContent = "答えは" + kotae + "でした.　すでにゲームは終わっています";
  } 
  
  if(yoso == kotae && finish == 0){
    r.textContent = "正解です.おめでとう!";
    finish = 1;
  }

  if(kaisu == 3 && finish == 0){
    r.textContent = "まちがい.　残念でした答えは " + kotae + " です.";
  } else if(kaisu <= 2 && yoso < kotae && finish == 0){
    r.textContent = "まちがい.　答えはもっと大きいですよ";
  } else if(kaisu <= 2 && yoso > kotae && finish == 0){
    r.textContent = "まちがい.　答えはもっと小さいですよ";
  }
}