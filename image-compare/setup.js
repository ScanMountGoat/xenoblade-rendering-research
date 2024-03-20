// Apply a comparison slider to the appropriate elements.
const viewers = document.querySelectorAll(".image-compare");

// Disable smoothing to allow click and drag on desktop.
// TODO: labels?
const options = {
    addCircle: true,
    smoothing: false
};
viewers.forEach((element) => {
  for (const child of element.children) {
    // Necessary for images to overlap.
    child.style.maxWidth = "none";
  }
  let view = new ImageCompare(element, options).mount();
});