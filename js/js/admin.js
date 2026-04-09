function addCourse(){
  let title = document.getElementById("title").value;

  let courses = JSON.parse(localStorage.getItem("courses")) || [];

  courses.push({title});

  localStorage.setItem("courses", JSON.stringify(courses));

  alert("تمت الإضافة");
}
