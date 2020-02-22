
export const services = {
    addStudent,
    viewStudents
};

function addStudent(student) {
  if (student) {
      let students = JSON.parse(localStorage.getItem('students'));
      if(students === null){
        students = [];
      }
      students.push(student);
      localStorage.setItem('students', JSON.stringify(students));
      return student;
  }
  return null;
}

function viewStudents(){
  let students = JSON.parse(localStorage.getItem('students'));
  return students === null ? [] : students;
}
