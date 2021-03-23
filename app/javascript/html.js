window.addEventListener('load', function(){

const p = document.getElementById('HTMLtext');
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

function createText() {
  let rnd = Math.floor(Math.random() * textLists.length);

  p.textContent = '';
  checkTexts = textLists[rnd].split('').map(function(value) {
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);


    return span;
  });
}
// console.log(checkTexts);

// keyを押したらイベント発火する処理
document.addEventListener('keydown', keyDown);

// Listの中の文字とkeyが連動するように
function keyDown(e) {
   if(e.key === checkTexts[0].textContent) {
     checkTexts[0].className = 'add-red';

     checkTexts.shift();

     if(!checkTexts.length) createText();
   }
}

})