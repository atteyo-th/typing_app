window.addEventListener('load', function(){

  // プロパティ、メソッド（id）を変数 p に定義してあげて、取得する
const p = document.getElementById('HTMLtext');
// textLists の中に配列として、１つずつ文字列(問題)を作り、宣言してあげる
const textLists = [
  '<head></head>',
  '<!DOCTYPE_HTML>',
  '<html></html>',
  '<link_rel=""_href="">',
  '<body></body>',
  '<div></div>',
  '<header></header>',
  '<footer></footer>',
  '<main></main>',
  '<nav></nav>',
  '<aside></aside>',
  '<p></p>',
  '<ul></ul>',
  '<li></li>',
  '<script></script>',
  '<title></title>',
  '<meta charset="UTF-8">',
  '<br>',
  '<span></span>',
  '<form></form>',

];

// バラした文字を下の配列に格納してspanへ挿入
let checkTexts = [];

createText();

// 文字列をある数(length)だけ、ランダム(rnd)にして表示してあげる
function createText() {
  let rnd = Math.floor(Math.random() * textLists.length);

  // 一つの文字列が打ち終わったら、空に戻してあげる 
  p.textContent = '';  
  // リスト内の文字列を、一文字ずつ分解(split)して、一文字ずつ処理(map)する
  checkTexts = textLists[rnd].split('').map(function(value) {
    let span = document.createElement('span');

    // spanタグに、分割した文字を (value)で当てはめる
    span.textContent = value;
    p.appendChild(span);

    // return することによって、checkTexts の配列に spanタグ が格納されていく
    return span;
  });
}


// keyを押したらイベント発火(関数 keyDown を実行)する処理
document.addEventListener('keydown', keyDown);

// (e)の中に格納して、Listの中の文字とkey入力が一致した時にイベントが連動するように
function keyDown(e) {
   if(e.key === checkTexts[0].textContent) {
     checkTexts[0].className = 'add-red';
 
     // (e) の中身を順番に [0] にしていく  
     checkTexts.shift();

    //  要素数が空っぽになったら、再度行う
     if(!checkTexts.length) createText();
   }
}

})