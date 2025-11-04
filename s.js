// Fill current year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submission with mailto
function handleContactSubmit(evt) {
  evt.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill all fields before sending.');
    return false;
  }

  const to = 'adhisheshuangothu@gmail.com';
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}\n\n---\nSent from portfolio contact form`);
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailto;
  return false;
}

// Typewriter loop: types words[], waits, deletes, repeats.
// Usage: set words array to strings you want to loop through.
(function () {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const words = [
    'Angothu Adhisheshu',          // primary name
    'B.Tech (CSE) Student',        // alternate phrase
    'Full-Stack Developer'           // another phrase
  ];

  const TYPING_SPEED = 80;   // ms per character when typing
  const DELETING_SPEED = 40; // ms per character when deleting
  const PAUSE_AFTER = 1400;  // ms to wait after finishing a word
  const PAUSE_BEFORE = 400;  // ms to wait before typing next

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = words[wordIndex];
    if (!deleting) {
      // type
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        // finished typing
        deleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPING_SPEED + Math.random() * 60);
    } else {
      // delete
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        // move to next word
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETING_SPEED + Math.random() * 30);
    }
  }

  // start after short delay so page loads look smooth
  setTimeout(tick, 300);
})();
// Modal logic
const modal = document.getElementById("demoModal");
const demoFrame = document.getElementById("demoFrame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".play-demo").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-demo");
    demoFrame.src = url;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  demoFrame.src = ""; // stop playback when closing
});

window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.style.display = "none";
    demoFrame.src = "";
  }
});

