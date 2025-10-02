 /*DOMContentLoaded waits for all the contents connected with the HTML page to load. functions always end in "false"*/

// change text with a click
window.addEventListener('DOMContentLoaded', () => {
  const textPara = document.getElementById("changeText");
  const textButton = document.getElementById("changeTextButton");
  const bgButton = document.getElementById("bgButton");

  // text button
  textButton.addEventListener("click", () => {
    textPara.textContent = "Cashews come from a fruit!";
  });

  // cycle background through the rainbow
  let colorIndex = 0;
  const colors = ["red", "orange", "yellow", "green", "skyblue", "indigo", "violet"];

  bgButton.addEventListener("click", () => {
    switch (colorIndex) {
      case 0:
        document.body.style.backgroundColor = colors[0];
        break;
      case 1:
        document.body.style.backgroundColor = colors[1];
        break;
      case 2:
        document.body.style.backgroundColor = colors[2];
        break;
      case 3:
        document.body.style.backgroundColor = colors[3];
        break;
      case 4:
        document.body.style.backgroundColor = colors[4];
        break;
      case 5:
        document.body.style.backgroundColor = colors[5];
        break;
      case 6:
        document.body.style.backgroundColor = colors[6];
        break;
      default:
        document.body.style.backgroundColor = colors[0];
        break;
    }

    colorIndex = (colorIndex + 1) % colors.length;
  });
});