let courses = JSON.parse(localStorage.getItem("courses")) || [];

function displayCourses() {
  let container = document.getElementById("courses");
  container.innerHTML = "";

  courses.forEach((course, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
        <button onclick="deleteCourse(${index})">❌ حذف</button>
      </div>
    `;
  });
}

function addCourse() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  if (title === "" || desc === "") {
    alert("من فضلك املأ كل الحقول");
    return;
  }

  courses.push({ title, desc });
  localStorage.setItem("courses", JSON.stringify(courses));

  displayCourses();

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
}

function deleteCourse(index) {
  courses.splice(index, 1);
  localStorage.setItem("courses", JSON.stringify(courses));
  displayCourses();
}

displayCourses();
