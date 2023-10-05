var expImages = document.querySelectorAll(".exp_img");

expImages.forEach(function (expImage) {
  expImage.addEventListener("click", function () {
    // Loop through all .exp_img elements
    expImages.forEach(function (imgContainer) {
      var img = imgContainer.querySelector("img");
      var currSrc = img.getAttribute("src");

      // Define the new image sources based on the current source
      var newSrc = "";

      if (currSrc.includes("plot1.jpg") || currSrc.includes("plot8.jpg")) {
        newSrc = currSrc.includes("plot1.jpg")
          ? "./assets/plot8.jpg"
          : "./assets/plot1.jpg";
      } else if (
        currSrc.includes("plot2.webp") ||
        currSrc.includes("plot4.jpg")
      ) {
        newSrc = currSrc.includes("plot2.webp")
          ? "./assets/plot4.jpg"
          : "./assets/plot2.webp";
      } else if (
        currSrc.includes("plot3.jpg") ||
        currSrc.includes("plot6.jpeg")
      ) {
        newSrc = currSrc.includes("plot3.jpg")
          ? "./assets/plot6.jpeg"
          : "./assets/plot3.jpg";
      }

      // Change the image source for all .exp_img elements
      img.setAttribute("src", newSrc);
    });

    // Add animation to all .exp_img elements
    expImages.forEach(function (imgContainer) {
      imgContainer.querySelector("img").classList.add("animating");
    });

    // Remove animation after the transition is complete
    setTimeout(function () {
      expImages.forEach(function (imgContainer) {
        imgContainer.querySelector("img").classList.remove("animating");
      });
    }, 1000); // 1000ms is the duration of the animation
  });
});
