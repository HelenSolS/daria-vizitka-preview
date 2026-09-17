(function(){
  var burger=document.querySelector('.burger'),links=document.querySelector('.links');
  if(burger&&links){burger.onclick=function(){links.classList.toggle('open');};links.onclick=function(e){if(e.target.tagName==='A')links.classList.remove('open');};}

  var markers=document.querySelectorAll('.m'),map=document.getElementById('map');
  var story=document.getElementById('story'),sArt=document.getElementById('sArt');
  var sWhen=document.getElementById('sWhen'),sTitle=document.getElementById('sTitle'),sBody=document.getElementById('sBody');
  var lineFill=document.getElementById('lineFill');
  var journeyPath=document.getElementById('journeyPath');
  var dash=[1100,880,660,440,220,0];
  var VB_W=900,VB_H=380;

  function placeMarkers(){
    if(!map||!journeyPath||window.matchMedia('(max-width:900px)').matches)return;
    var len=journeyPath.getTotalLength();
    var count=markers.length;
    markers.forEach(function(m,i){
      var t=count>1?i/(count-1):0;
      var pt=journeyPath.getPointAtLength(len*t);
      m.style.left=(pt.x/VB_W*100)+'%';
      m.style.top=(pt.y/VB_H*100)+'%';
    });
  }

  function pick(el){
    markers.forEach(function(m){m.classList.remove('on');m.querySelector('button').setAttribute('aria-expanded','false');});
    el.classList.add('on');el.querySelector('button').setAttribute('aria-expanded','true');
    var i=+el.dataset.i;
    if(sWhen)sWhen.textContent=el.dataset.when||'';
    if(sTitle)sTitle.textContent=el.dataset.title||'';
    if(sBody)sBody.textContent=el.dataset.body||'';
    if(sArt&&el.dataset.art){sArt.src=el.dataset.art;story.classList.remove('swap');void story.offsetWidth;story.classList.add('swap');}
    if(map){map.classList.add('ready');map.style.setProperty('--dash',dash[i]||0);}
    if(story)story.classList.add('open');
  }

  markers.forEach(function(m){m.querySelector('button').addEventListener('click',function(){pick(m);});});

  placeMarkers();
  window.addEventListener('resize',placeMarkers);

  if(map&&lineFill){
    var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){map.classList.add('ready');map.style.setProperty('--dash',dash[0]);obs.disconnect();}});},{threshold:.25});
    obs.observe(map);
  }

  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
})();
