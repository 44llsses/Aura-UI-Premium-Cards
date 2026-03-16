 /* Random Heading Toggle */

const usertext = document.querySelector("h1");
const options = [" SINGULARITY_LOCK »»"," GRAVITY_STABLE °", " TIME_DILATATION »»"];

usertext.onclick = () => {
  const randomText = options[Math.floor(Math.random() * options.length)];
  
  usertext.innerHTML = randomText;
  
  usertext.style.color = "";
  
};

/* Status bar Toggle */

const encryp = document.querySelector("#status_bar");
const origSt = encryp.innerHTML;

encryp.onclick = () => {
  if (encryp.innerHTML === origSt) {
    encryp.innerHTML = "RECORDING_LOG_02 ♦⟩";
    encryp.style.backgroundColor = "#FFD700";
    encryp.style.color = "#000";
  } else {
    encryp.innerHTML = origSt;
    encryp.style.color = "#ff9e36";
    encryp.style.backgroundColor = "#000";
  } 
};




