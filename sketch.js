var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "programação",
  marks : [30,35,40,50]
  
};

function setup() {
  
  createCanvas(400, 400);
  //mudandoo o número da matrícula
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no);  
}

function draw() {
  background(220);
  
}
