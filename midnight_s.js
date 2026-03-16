/* Random heading Toggle */

const usertext = document.querySelector("h1");
const options = [" ⟨ Navigating.. ⟩", "⟨ SILENT_VOYAGE.. ⟩"];

usertext.onclick = () => {
  const randomText = options[Math.floor(Math.random() * options.length)];
  
  usertext.innerHTML = randomText;
  
  usertext.style.color = "#FFFFFF";
  
};

/* Status bar Toggle */

const encryp = document.querySelector("#status_bar");
const origSt = encryp.innerHTML;

encryp.onclick = () => {
  if (encryp.innerHTML === origSt) {
    encryp.innerHTML = "} status: pure serenity {";
    encryp.style.backgroundColor = "#141c29";
  } else {
    encryp.innerHTML = origSt;
    encryp.style.color = "#9ee7d3";
    encryp.style.backgroundColor = "#224746";
  }
};


