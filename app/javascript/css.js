window.addEventListener('load', function(){

const p = document.getElementById('CSStext');
const textLists = [
  'aline-(content_items_self)',
  'background-(color_image)',
  'border-(bottom)',
  'color',
  'box-shadow',
  'calc()',
  'color',
  'display-frex',
  'frex',
  'font-(size_family_style)',
  'height',
  'justify-(content_items_self',
  'margin-(bottom_block_top)',
  'opacity',
  'padding-(top_right_bottom_left)',
  'text',
  'text-(decoration_shadow)',
  'length',
  'width',
  'resolution',
  '_px',
  '_vh',
  '_vh',
  '_%',

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