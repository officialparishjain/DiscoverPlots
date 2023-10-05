var expImages = document.querySelectorAll(".exp_img");
console.log(expImages);

expImages.forEach(function (expImage) {
  expImage.addEventListener("click", function () {
    expImages.forEach(function (imgContainer) {
      const f = imgContainer.querySelector("img:first-child");
      const b = imgContainer.querySelector("img:last-child");

      if (f.style.opacity === "1") {
        f.style.opacity = 0;
        b.style.opacity = 1;
      } else {
        f.style.opacity = 1;
        b.style.opacity = 0;
      }
    });
  });
});

var sec1 = document.querySelector("#sec1");
var image = document.querySelector(".back_image");
sec1.addEventListener("mouseenter", function () {
  image.style.transform = "rotate(-2deg)";
  const newSrc = "./assets/child.jpg";
  image.querySelector("img").setAttribute("src", newSrc);
  var img = image.querySelector("img");
  img.style.opacity = 1;
});
sec1.addEventListener("mouseleave", function () {
  var img = image.querySelector("img");
  img.style.opacity = 0;
});

var sec2 = document.querySelector("#sec2");
sec2.addEventListener("mouseenter", function () {
  const newSrc = "./assets/street.jpg";
  image.querySelector("img").setAttribute("src", newSrc);
  var img = image.querySelector("img");
  img.style.transition = "opacity 0.8s ease-in-out";
  image.style.transform = "rotate(2deg)";
  img.style.opacity = 1;
});
sec2.addEventListener("mouseleave", function () {
  var img = image.querySelector("img");
  img.style.opacity = 0;
});

var sec3 = document.querySelector("#sec3");
sec3.addEventListener("mouseenter", function () {
  image.style.transform = "rotate(-2deg)";
  const newSrc = "./assets/security.jpg";
  image.querySelector("img").setAttribute("src", newSrc);
  var img = image.querySelector("img");
  img.style.opacity = 1;
});
sec3.addEventListener("mouseleave", function () {
  var img = image.querySelector("img");
  img.style.opacity = 0;
});

var sec4 = document.querySelector("#sec4");
sec4.addEventListener("mouseenter", function () {
  const newSrc = "./assets/avenue.jpg";
  image.querySelector("img").setAttribute("src", newSrc);
  var img = image.querySelector("img");
  img.style.transition = "opacity 0.8s ease-in-out";
  image.style.transform = "rotate(2deg)";
  img.style.opacity = 1;
});
sec4.addEventListener("mouseleave", function () {
  var img = image.querySelector("img");
  img.style.opacity = 0;
});
