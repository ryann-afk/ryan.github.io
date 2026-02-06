const noBtn = document.getElementById("no-btn");
const clickSound = document.getElementById("clickSound");
const kissSound = document.getElementById("kissSound");
const bgMusic = document.getElementById("bgMusic");

let slideIndex = 1;

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function yesClicked() {
  bgMusic.play();
  clickSound.play();
  startConfetti();
  document.getElementById("main-page").classList.add("hidden");
  document.getElementById("surprise-page").classList.remove("hidden");
}

function startConfetti() {
  const confettiScript = document.createElement("script");
  confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  confettiScript.onload = () => confetti({ particleCount: 200, spread: 120 });
  document.body.appendChild(confettiScript);
}

function openBox(type) {
  clickSound.play();
  document.getElementById("timeline").classList.add("hidden");

  const content = document.getElementById("content");
  if (type === "letter") {
    content.innerHTML = `
      <h2>To My Love 💌</h2>
      <p>
        Every moment with you is magic.
        Being with you makes my heart soar 💗
      </p>`;
  }

  if (type === "memories") {
    content.innerHTML = `
      <h2>Our Memories 📸</h2>
      <div class="slideshow-container">

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you1.jpg" alt="You" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You 💗</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you2.jpg" alt="You" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You again 😊</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you3.jpg" alt="You" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You being awesome 😍</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/us.jpg" alt="Us" onclick="heartBurst(event)">
>
          </div>
          <div class="caption-text">Us 💖</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me1.jpg" alt="Me" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me 😎</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me2.jpg" alt="Me" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me again 😂</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me3.jpg" alt="Me" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me silly 😁</div>
        </div>

        <a class="prev" onclick="changeSlide(-1)">❮</a>
        <a class="next" onclick="changeSlide(1)">❯</a>
      </div>

      <div class="dots-container">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
        <span class="dot" onclick="currentSlide(7)"></span>
      </div>`;

    slideIndex = 1;
    showSlides(slideIndex);
  }

  if (type === "kiss") {
    kissSound.play();
    content.innerHTML = `
      <h2>Here’s your kiss 😘</h2>
      <h1>💋💋💋</h1>`;
  }
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showTimeline() {
  clickSound.play();
  document.getElementById("content").innerHTML = "";
  const tl = document.getElementById("timeline");
  tl.classList.remove("hidden");

  tl.innerHTML = `
    <div class="timeline-event">
      <div class="timeline-date">2025-10-1</div>
      <img src="images/memory0.jpg" class="timeline-img">
      <div class="timeline-caption">we start texing 💗</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2025-10-10</div>
      <img src="images/memory1.jpg" class="timeline-img">
      <div class="timeline-caption">we start  dating 💗</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2025-11-21</div>
      <img src="images/memory2.jpg" class="timeline-img">
      <div class="it was my birthday and u made it special"> 🥰</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2026-01-01</div>
      <img src="images/memory3.jpg" class="timeline-img">
      <div class="timeline-caption">starting a year together ✨</div>
    </div>

    <button class="back-tl-btn" onclick="backFromTimeline()">�⟵ Back</button>
  `;
}

function backFromTimeline() {
  clickSound.play();
  document.getElementById("timeline").classList.add("hidden");
}

function goHome() {
  document.getElementById("surprise-page").classList.add("hidden");
  document.getElementById("main-page").classList.remove("hidden");
  document.getElementById("content").innerHTML = "";
  document.getElementById("timeline").classList.add("hidden");
}
function heartBurst(e) {
  const heart = document.createElement("div");
  heart.className = "heartexplosion";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}
