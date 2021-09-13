var Student = {
  name: "Sammy",
  class: 7,
  registrationNo: 21,
  favoriteSubject: "programação",
  marks: [30, 35, 40, 50],
};

function setup() {
  createCanvas(400, 400);
  //mudandoo o número da matrícula
  console.log(Student.registrationNo);
  Student.registrationNo = 45;
  console.log(Student.registrationNo);
}

function draw() {
  background(220);
}
