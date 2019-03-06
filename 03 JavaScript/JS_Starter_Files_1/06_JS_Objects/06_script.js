var student ={
    name: 'suresh',
    rollNo: 408,
    address: 'puttur',
    info: {
        line1: 'hai',
        line2: 'hello'
    }
};
studentName = 'name';
console.log(student);
console.log('name is : '+ student.name);
console.log(student.info.line1);
console.log(student['address']);
console.log(student.studentName);
console.log(student[studentName]);
student.college = 'svpp';
delete student.info;
console.log(student);