const courses = [
  { title: "تعلم الحروف", age: "4-6" },
  { title: "أساسيات الحساب", age: "7-10" }
];

const container = document.getElementById("courses-container");

courses.forEach(c => {
  container.innerHTML += `
    <div class="card">
      <h3>${c.title}</h3>
      <p>${c.age}</p>
      <a href="course.html">
        <button class="btn">ابدأ</button>
      </a>
    </div>
  `;
});
