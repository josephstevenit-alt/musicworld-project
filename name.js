(function(){
  const cards = document.querySelectorAll('.track-card');
  const player = document.getElementById('mainPlayer');

  function loadAndPlay(card){
    const src = card.dataset.src;
    if(!src) return;

    // set the video source
    player.src = src;
    player.play();

    // highlight active card
    document.querySelectorAll('.track-card.active').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  }

  // add click events
  cards.forEach(card => {
    card.addEventListener('click', () => loadAndPlay(card));
  });
})();
(function(){
  const cards = Array.from(document.querySelectorAll('.track-card'));
  const mainPlayer = document.getElementById('mainPlayer');

  function loadAndSet(card){
    let src = card.dataset.src;
    const poster = card.dataset.poster;
    if(!src) return;

    // If the src has '?mute=1', remove it when user clicks
    src = src.replace('?mute=1', '') + ''; 

    mainPlayer.src = src;  // update iframe src
    // Remove active class from others
    document.querySelectorAll('.track-card.active').forEach(n=>n.classList.remove('active'));
    card.classList.add('active');
  }

  cards.forEach(card=>{
    card.addEventListener('click', ()=> loadAndSet(card));
    card.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Enter' || ev.key === ' '){
        ev.preventDefault(); 
        loadAndSet(card);
      }
    });
  });

  // Load first video but keep it muted
  const initial = document.querySelector('.track-card.featured') || cards[0];
  if(initial){
    let src = initial.dataset.src;
    if(!src.includes('?mute=1')) src += '?mute=1';
    mainPlayer.src = src;
    initial.classList.add('active');
  }

})();
// dummy-full.js - Extended dummy JavaScript for MusicWorld
// Purpose: Show JS is included and make the project feel interactive

console.log("🎵 MusicWorld: Extended dummy JS included!");

// 1. Floating JS notice
window.addEventListener("DOMContentLoaded", () => {
    const notice = document.createElement("div");
    notice.innerText = "🎶 JS is running (dummy)!";
    Object.assign(notice.style, {
        position: "fixed",
        bottom: "15px",
        right: "15px",
        backgroundColor: "#ff4757",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "6px",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "13px",
        zIndex: "9999",
        cursor: "pointer"
    });
    notice.addEventListener("click", () => notice.remove());
    document.body.appendChild(notice);
});

// 2. Dummy greeting function
function greetUser() {
    console.log("Welcome to MusicWorld! 🎵 This is a dummy JS function.");
}
greetUser();

// 3. Dummy playlist array
const dummyPlaylist = [
    "Song 1 - Dummy",
    "Song 2 - Dummy",
    "Song 3 - Dummy",
    "Song 4 - Dummy",
    "Song 5 - Dummy"
];
console.log("Dummy playlist loaded:", dummyPlaylist);

// 4. Dummy hover effect for any element with class 'track-card'
const trackCards = document.querySelectorAll(".track-card");
trackCards.forEach(card => {
    card.addEventListener("mouseover", () => card.style.opacity = "0.8");
    card.addEventListener("mouseout", () => card.style.opacity = "1");
});

// 5. Dummy background color change every 7 seconds
setInterval(() => {
    const colors = ["#ff6b81", "#1e90ff", "#2ed573", "#ffa502"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}, 7000);

// 6. Dummy button click event for any 'play-btn' button
const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("🎵 Dummy play button clicked!");
        alert("🎶 This is a dummy JS interaction!");
    });
});

// 7. Dummy console animation
console.log("%c MusicWorld JS is alive! 🎵", "color: #1db954; font-size: 16px; font-weight: bold;");

// 8. Dummy function to show page is JS-enhanced
function dummyInteraction() {
    console.log("💻 Dummy JS interactions active. Your project looks interactive!");
}
dummyInteraction();
