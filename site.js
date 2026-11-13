(function(){
  var d=document,root=d.documentElement;
  var drawer=d.getElementById('mob-drawer'),overlay=d.getElementById('mob-overlay'),burger=d.getElementById('hamburger'),closeBtn=d.getElementById('mob-close');
  function setDrawer(open){
    if(!drawer)return;
    drawer.classList.toggle('open',open);overlay.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
    root.style.overflow=open?'hidden':'';
    if(open&&closeBtn){closeBtn.focus();}else if(burger){burger.focus();}
  }
  if(burger){burger.addEventListener('click',function(){setDrawer(true)});}
  if(closeBtn){closeBtn.addEventListener('click',function(){setDrawer(false)});}
  if(overlay){overlay.addEventListener('click',function(){setDrawer(false)});}
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer&&drawer.classList.contains('open')){setDrawer(false)}});
  var mq=window.matchMedia('(min-width:769px)');
  function onMq(){if(mq.matches&&drawer&&drawer.classList.contains('open')){drawer.classList.remove('open');overlay.classList.remove('open');root.style.overflow='';}}
  if(mq.addEventListener){mq.addEventListener('change',onMq);}else if(mq.addListener){mq.addListener(onMq);}
  var qs=d.querySelectorAll('.faq-q');
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener('click',function(){
      var item=this.parentNode;var open=item.classList.toggle('open');
      this.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  var fc=d.getElementById('floatcall'),ft=d.querySelector('.site-footer');
  if(fc&&ft&&'IntersectionObserver' in window){
    new IntersectionObserver(function(en){fc.classList.toggle('hide',en[0].isIntersecting)},{threshold:0.05}).observe(ft);
  }
})();
