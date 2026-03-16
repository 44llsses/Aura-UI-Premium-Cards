/* Random Heading Toggle */

const usertext = document.querySelector("h1");
const options = [">_ACCESS_DENIED", ">_DATA_ERROR", ">_VOID_USER"];

usertext.onclick = () => {
  const randomText = options[Math.floor(Math.random() * options.length)];
  
  usertext.innerHTML = randomText;
  
  usertext.style.color = "#fa4368";
  
};

/* Status bar Toggle */

const encryp = document.querySelector("#status_bar");
const origSt = encryp.innerHTML;

encryp.onclick = () => {
  if (encryp.innerHTML === origSt) {
    encryp.innerHTML = "[ CORE_OVERHEATING ]";
    encryp.style.backgroundColor = "#000";
    encryp.style.color = "#eb7ce9";
  } else {
    encryp.innerHTML = origSt;
    encryp.style.color = "#000";
    encryp.style.backgroundColor = "#4ee2f2"
  } 
};
