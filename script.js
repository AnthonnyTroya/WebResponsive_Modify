// navbar togglemenu start
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}
// navbar togglemenu end

//Gallery

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");

        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};

const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  let selectedImgCategory = element.getAttribute("data-name");
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory;
  previewBox.classList.add("show");
  shadow.classList.add("show");
  closeIcon.onclick = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
  };
}
//Carrousel

function App() {}

window.onclick = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector("#track");
  const slick = track.querySelectorAll(".slick");

  const slickWidth = slick[0].offsetWidth;

  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ""
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));

  btn.dataset.button == "button-prev"
    ? prevAction(leftPosition, slickWidth, track)
    : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
};

let prevAction = (leftPosition, slickWidth, track) => {
  if (leftPosition > 0) {
    console.log("entro 2");
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
};

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
  if (leftPosition < trackWidth - listWidth) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  }
};
