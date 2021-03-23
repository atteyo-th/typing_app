window.addEventListener('load', function(){

  const p = document.getElementById('Swifttext');
  const textLists = [
    'Swift',
    'var',
    'let',
    'Int',
    'Float',
    'print',
    'typealias',
    'func',
    'class',
    'struct',
    'for_in',
    'if_elseif_else',
    'switch_case_default',
    'guard',
    'Date',
    'Dictionary',
    'UIColor',
    'UIView',
    'public',
    'extension',
    'UIViewController',
    'SVProgressHUD',
    'enum',
    'deinit',
    'fileprivate',
    'init',
    'inout',
    'open',
    'private',
    'protocol',
    'static',
    'subscript',
    'break',
    'case',
    'continue',
    'repeat',
    'return',
    'switch',
 
  
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