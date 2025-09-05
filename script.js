console.log("script.js loaded successfully");

function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}

function openCourse(courseName) {
  const courseDetail = document.getElementById('course-detail');
  const coursesSection = document.querySelector('.courses');
  const title = document.getElementById('course-title');
  const description = document.getElementById('course-description');

  let courseDescriptions = {
    "Web Development": "Learn how to build modern websites using HTML, CSS, and JavaScript. Covers responsive design and basic projects.",
    "Python Programming": "A beginner-friendly course covering Python basics, loops, functions, OOP, and real-world projects.",
    "Data Science": "Learn how to analyze data, create visualizations, and apply machine learning concepts."
  };

  title.textContent = courseName;
  description.textContent = courseDescriptions[courseName] || "Details coming soon...";

  coursesSection.classList.add("hidden");
  courseDetail.classList.remove("hidden");
}

function backToCourses() {
  document.querySelector('.courses').classList.remove("hidden");
  document.getElementById('course-detail').classList.add("hidden");
}

function handleLogin(event) {
  event.preventDefault();
  document.getElementById("status").textContent = "Login Successfully ✅ ";
}