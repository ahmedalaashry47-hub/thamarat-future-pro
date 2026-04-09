fetch("data/courses.json")
.then(res => res.json())
.then(data => {
  let container = document.getElementById("courses");

  data.forEach((c,i)=>{
    container.innerHTML += `
    <div class="card">
      <h3>${c.title}</h3>
      <a href="course.html?id=${i}">ابدأ</a>
    </div>
    `;
  });
});
