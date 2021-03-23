window.addEventListener('load', function(){

  const p = document.getElementById('Rubytext');
  const textLists = [
    'puts',
    'gets',
    'chops',
    'to_s',
    'to_i',
    '#{_}',
    '(+=_-=_*=_/=)',
    '(>_>=_<_<=_==_&&_||_===)',
    'if_else_elsif_end',
    'times',
    'each',
    'def_end',
    'class_end',
    'initialize',
    'length',
    'require',
    'Date',
    'today',
    'wday',
    'strftime',
    'include?',
    'slice',
    'scan',
    'index',
    'even?',
    'floor',
    'while',
    'count',
    'errors',
    'any?',
    'full_messages',
    'first',
    'last',
    '<%= _=>',
    'link_to',
    'form_with',
    'Ruby_on_Rails',
    'resources',
    'new',
    'create',
    'show',
    'edit',
    'update',
    'destroy',
    'redirect_to',
    'params_permit_merge',
    'before_action',
    'resources',
    'render',
    'image_tag',
    'resources',
    'has_many',
    'belongs_to',
    'validates',
    'with_options',
    'Sinatra',
    'rails s',
    'rails c',
    'rails routes',
    'rails db:create',
    'rails db:migrate',
    'gem',
    'bundle_install',
    'bundle exec rspec_',

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