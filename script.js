// script.js

document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcomeMessage");
  setTimeout(() => {
    welcomeMessage.style.opacity = "1";
    welcomeMessage.style.transform = "translateY(0)";
  }, 500); // Adjust the delay as needed
});

let clickCount = 0;

document.getElementById("toggle").onclick = function () {
  clickCount++;
  const blur = document.querySelector(".blur");
  if (clickCount % 2 !== 0) {
    blur.style.display = "none";
  } else {
    blur.style.display = "block"; // or any other value to make it visible again
  }
};

// document.addEventListener("click", function(){

// }, false)

document.addEventListener("DOMContentLoaded", function () {
  // Replace these values with your actual data fetching logic
  const totalStudents = 1200;
  const longCourses = 800;
  const softSkillLearning = 400;

  document.getElementById("totalStudents").innerText = totalStudents;
  document.getElementById("longCourses").innerText = longCourses;
  document.getElementById("softSkillLearning").innerText = softSkillLearning;
});
