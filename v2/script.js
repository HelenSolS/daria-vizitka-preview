(function(){
  var burger=document.querySelector('.burger'),links=document.querySelector('.links');
  if(burger&&links){burger.onclick=function(){var o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o);};links.onclick=function(e){if(e.target.tagName==='A')links.classList.remove('open');};}

  var stops=document.querySelectorAll('.stop'),panel=document.getElementById('panel');
  var pWhen=document.getElementById('pWhen'),pTitle=document.getElementById('pTitle'),pBody=document.getElementById('pBody');
  var wrap=document.querySelector('.journey-wrap'),tide=document.getElementById('tideFill');
  var fills=[920,740,560,380,200,0];

  function openStop(s){
    stops.forEach(function(x){x.classList.remove('on');x.querySelector('button').setAttribute('aria-expanded','false');});
    s.classList.add('on');s.querySelector('button').setAttribute('aria-expanded','true');
    var i=+s.dataset.i;
    if(pWhen)pWhen.textContent=s.dataset.when||'';
    if(pTitle)pTitle.textContent=s.dataset.title||'';
    if(pBody)pBody.textContent=s.dataset.body||'';
    if(panel){panel.classList.add('open');panel.classList.remove('swap');void panel.offsetWidth;panel.classList.add('swap');}
    if(wrap&&tide){wrap.classList.add('ready');wrap.style.setProperty('--dash',fills[i]||0);}
  }

  stops.forEach(function(s){
    s.querySelector('button').addEventListener('click',function(){openStop(s);});
  });

  if(wrap&&tide){
    var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){wrap.classList.add('ready');wrap.style.setProperty('--dash',fills[0]);obs.disconnect();}});},{threshold:.3});
    obs.observe(wrap);
  }

  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
})();
