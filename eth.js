/* Random heading Toggle */

const usertext = document.querySelector("h1");
const options =  ["‹⟨ ELYSIUM_FOUND ⟩›", "‹⟨ DIVINE_CORE ⟩›", "‹⟨ LIGHT_ASCENSION ⟩›"];

usertext.onclick = () => {
  const randomText = options[Math.floor(Math.random() * options.length)];
  
  usertext.innerHTML = randomText;
  
};

/* Status bar Toggle */

const encryp = document.querySelector("#status_bar");
const origSt = encryp.innerHTML;

encryp.onclick = () => {
  if (encryp.innerHTML === origSt) {
    encryp.innerHTML = "^ PROTOCOL_COMPLETE ^";
    encryp.style.backgroundColor = "#c2f5ff";
    encryp.style.color = "#4A90E2";
  } else {
    encryp.innerHTML = origSt;
    encryp.style.color = "#C5A021";
    encryp.style.backgroundColor = "#f2f2d3";
  }
};

