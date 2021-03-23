window.addEventListener('load', function(){

  const p = document.getElementById('Javascripttext');
  const textLists = [
    '<%= %>',
    'stylesheet_link_tag_media:_',
    'javascript_pack_tag',
    'addEventListener();',
    'const',
    'let', 
    'function(){};',
    'rnd',
    'script',
    'map',
    'return',
    'document',
    'getElementById();',
    'console.log()',
    'JavaScript',
    'for()',
    'forEach',
    'window',
    'DOM',
    'getElementsByClassName()',
    'querySelectorAll()',
    'load',
    'click',
    'mouseover',
    'mouseout',
    'setAttribute()',
    'removeAttribute()',
    'this',
    'getAttribute',
    'debugger',
    'jQuery',
    'Node.js',
    'TypeScript',
    'React',
    'Vue.js',
    'Angular',
    'focus',
    'contexmenu',
    'drag',
    'change',
    'load',
    'select',

  
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