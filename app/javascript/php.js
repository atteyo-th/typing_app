window.addEventListener('load', function(){

  const p = document.getElementById('PHPtext');
  const textLists = [
    '<?php_?>',
    'printf()_sprintf()',
    'preg_match() preg_match_all()',
    'preg_replace() preg_quote()',
    'str_replace() strtr()',
    'substr() mb_substr()',
    'strtolower() strtoupper()',
    'strlen() mb_strlen()',
    'strpos() mb_strpos()',
    'mb_convert_encoding()',
    'mb_convert_kana()',
    'trim()_ltrim()_rtrim()',
    'mt_rand()',
    'is_string()',
    'is_int()',
    'is_float()',
    'is_numeric()',
    'round()_floor()_ceil()',
    'array_slice()',
    'array_merge()',
    'in_array()',
    'shuffle()',
    'sort()_rsort()',
    'asort()_arsort()',
    'ksort()_krsort()',
    'usort()_uasort()_uksort()',
    'array_multisort()',
    'array_unique()',
    'array_reverse()',
    'array_shift() array_pop()',
    'array_walk() array_walk_recursive()',
    '<?php_?>',
    '<?php_?>',
    '<?php_?>',
    '<?php_?>',
    

  
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