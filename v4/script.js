const poses = [
  { id: "sit", src: "look/01-recline.jpg", label: "sits with the laptop", start: 0, end: 0.22, fade: 0.05 },
  { id: "stand", src: "look/05-front.jpg", label: "stands up", start: 0.18, end: 0.4, fade: 0.05 },
  { id: "spinFront", src: "look/04-walk.jpg", label: "turns like a model", start: 0.36, end: 0.52, fade: 0.05 },
  { id: "spinProfile", src: "look/06-profile.jpg", label: "profile", start: 0.48, end: 0.64, fade: 0.05 },
  { id: "spinBack", src: "look/07-back.jpg", label: "back", start: 0.6, end: 0.76, fade: 0.05 },
  { id: "heart", src: "look/03-closeup.jpg", label: "heart closer", start: 0.72, end: 1.05, fade: 0.06 },
];

const labels = {
  hello: "Hi, I’m Daria",
  pick: "Pick a Daria",
  stand: "She stands",
  spin: "She turns",
  heart: "Closer",
  career: "Career",
  education: "Education",
  contact: "Write me",
};

function poseOpacity(pose, t) {
  if (t < pose.start || t > pose.end) return 0;
  const fadeIn = pose.start <= 0 ? 0 : pose.fade;
  const enter = fadeIn <= 0 ? 1 : Math.min(1, Math.max(0, (t - pose.start) / fadeIn));
  const leave = 1 - Math.min(1, Math.max(0, (t - (pose.end - pose.fade)) / pose.fade));
  return enter * leave;
}

function layerFor(progress, override) {
  if (override) {
    return poses.find((p) => p.id === override) || poses[0];
  }
  let best = null;
  let bestO = -1;
  for (const pose of poses) {
    const o = poseOpacity(pose, progress);
    if (o >= bestO) {
      best = pose;
      bestO = o;
    }
  }
  if (!best || bestO <= 0.02) return progress < 0.5 ? poses[0] : poses[poses.length - 1];
  return best;
}

function sectionFromProgress(progress) {
  if (progress < 0.16) return "hello";
  if (progress < 0.3) return "pick";
  if (progress < 0.44) return "stand";
  if (progress < 0.7) return "spin";
  if (progress < 0.82) return "heart";
  if (progress < 0.92) return "career";
  return "education";
}

const page = document.getElementById("page");
const figure = document.getElementById("figure");
const caption = document.getElementById("caption");
const pill = document.getElementById("mobile-pill");
const menuLinks = [...document.querySelectorAll("#mouse-menu a")];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let hoverPose = null;
let shownId = null;

for (const pose of poses) {
  const img = new Image();
  img.src = pose.src;
}

function progress() {
  const rect = page.getBoundingClientRect();
  const total = Math.max(1, page.offsetHeight - window.innerHeight);
  const t = Math.min(1, Math.max(0, -rect.top / total));
  return Number.isFinite(t) ? t : 0;
}

function paint() {
  const p = reduced ? 0 : progress();
  const override = reduced ? "sit" : hoverPose;
  const pose = layerFor(p, override);
  if (shownId !== pose.id) {
    shownId = pose.id;
    figure.querySelectorAll("img").forEach((n) => n.remove());
    const img = document.createElement("img");
    img.src = pose.src;
    img.alt = "";
    img.draggable = false;
    figure.insertBefore(img, caption);
    caption.textContent = pose.label;
  }
  const active = sectionFromProgress(p);
  for (const a of menuLinks) {
    a.classList.toggle("hot", a.dataset.id === active);
  }
  if (pill) pill.textContent = labels[active] || labels.hello;
}

function setHover(id) {
  hoverPose = id;
  paint();
}

menuLinks.forEach((a) => {
  a.addEventListener("mouseenter", () => setHover(a.dataset.pose));
  a.addEventListener("mouseleave", () => setHover(null));
  a.addEventListener("focus", () => setHover(a.dataset.pose));
  a.addEventListener("blur", () => setHover(null));
});
document.querySelectorAll(".personas a").forEach((a) => {
  a.addEventListener("mouseenter", () => setHover(a.dataset.pose));
  a.addEventListener("mouseleave", () => setHover(null));
});

window.addEventListener("scroll", paint, { passive: true });
window.addEventListener("resize", paint);
paint();
