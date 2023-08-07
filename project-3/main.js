const imgFrame = document.querySelector("img.slider");
const h1Contain = document.querySelector("h1.slider");
const dotSpan = [...document.querySelectorAll(".dots span")];

const obj = [
  {
    img: "/images/img1.jpg",
    text: "tekst pierwszy",
  },
  {
    img: "/images/img2.jpg",
    text: "tekst dwa",
  },
  {
    img: "/images/img3.jpg",
    text: "tekst trzy",
  },
];

let actuallyInx = 0;

changeDot = () => {
  const dotActive = dotSpan.findIndex((dot) =>
    dot.classList.contains("active")
  );
  dotSpan[dotActive].classList.remove("active");
  dotSpan[actuallyInx].classList.add("active");
  console.log(dotActive);
  console.log(actuallyInx);
};

function changeImg() {
  actuallyInx++;

  if (actuallyInx === obj.length) {
    actuallyInx = 0;
  }
  imgFrame.src = obj[actuallyInx].img;
  h1Contain.textContent = obj[actuallyInx].text;

  changeDot();
}
let setTimeFrame = setInterval(changeImg, 1000);

function clickKey(e) {
  if (e.keyCode == 39 || e.keyCode == 37) {
    clearInterval(setTimeFrame);
    e.keyCode == 37 ? actuallyInx-- : actuallyInx++;
    if (actuallyInx >= dotSpan.length) {
      actuallyInx = 0;
    } else if (actuallyInx < 0) {
      actuallyInx = dotSpan.length - 1;
    }

    imgFrame.src = obj[actuallyInx].img;
    h1Contain.textContent = obj[actuallyInx].text;

    changeDot();

    setTimeFrame = setInterval(changeImg, 3000);
  }
}
window.addEventListener("keydown", clickKey);
