const Course={
    courseName:"Javascript",
    duration:"Two months",
    tutor:"Self"
};
// console.log(course.courseName);
// console.log(course.duration);
// console.log(course.tutor);
// //In place of dot operator for taking each elemnt from object we can use destructing .
// key are assigned as variable name and this is how js knows which property of objetct we want to assign.
/*
const{courseName,duration,tutor}=course //courseName , duration,tutor are keys and it  is assigned as variable.

console.log(courseName)
console.log(duration)
console.log(tutor)
//or
console.log(courseName,duration,tutor);*/

const{courseName:course,duration:time,tutor:mentor}=Course
//here we have assigned key as variable and the each variable is assigned a new variable so that we dont have to write keys every time .
console.log(course,time,mentor);