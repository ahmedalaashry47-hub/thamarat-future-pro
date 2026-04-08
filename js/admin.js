let courses = [];

function addCourse() {
  const title = document.getElementById("title").value;
  const age = document.getElementById("age").value;

  courses.push({ title, age });

  alert("تم إضافة الكورس");
}
