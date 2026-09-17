// calm interactions: menu, reveal, roadmap, form, year
(function(){
  var burger=document.querySelector('.burger'),links=document.querySelector('.links');
  if(burger&&links){burger.addEventListener('click',function(){var o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o);});links.addEventListener('click',function(e){if(e.target.tagName==='A')links.classList.remove('open');});}

  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.section,.wcard,.node,.contact-box').forEach(function(el){el.classList.add('reveal');io.observe(el);});

  var nodes=document.querySelectorAll('.node'),text=document.getElementById('roadText'),road=document.getElementById('road');
  function pick(n){nodes.forEach(function(x){x.classList.remove('active');x.removeAttribute('aria-current');});n.classList.add('active');n.setAttribute('aria-current','true');if(text)text.textContent=n.getAttribute('data-text')||'';if(road){var i=Array.prototype.indexOf.call(nodes,n);road.style.setProperty('--fill',(8+i*(84/Math.max(nodes.length-1,1)))+'%');}}
  nodes.forEach(function(n){n.addEventListener('click',function(){pick(n);});n.addEventListener('keydown',function(e){var i=Array.prototype.indexOf.call(nodes,n);if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(n);}else if(e.key==='ArrowRight'&&nodes[i+1]){e.preventDefault();nodes[i+1].focus();pick(nodes[i+1]);}else if(e.key==='ArrowLeft'&&nodes[i-1]){e.preventDefault();nodes[i-1].focus();pick(nodes[i-1]);}});});

  var f=document.getElementById('helloForm');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);var s='Hello Daria — message from your site';var b='Name: '+d.get('n')+'%0D%0AEmail: '+d.get('e')+'%0D%0A%0D%0A'+encodeURIComponent(d.get('m'));window.location.href='mailto:daria.soldatova@uni-weimar.de?subject='+encodeURIComponent(s)+'&body='+b;});}

  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
