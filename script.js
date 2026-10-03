(function(){
 var h=document.querySelector('header'),b=document.getElementById('menu'),n=document.getElementById('nav');
 addEventListener('scroll',function(){h.classList.toggle('s',scrollY>10)},{passive:true});
 b.addEventListener('click',function(){var o=n.classList.toggle('o');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')});
 n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('o');b.setAttribute('aria-expanded','false')}});
 addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('o');b.setAttribute('aria-expanded','false')}});
})();
