class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Telihaty High School';   //shared option
    }
}
const student1 = new student(22, 'Nahid');
const student2 = new student(23, 'Fahmida');
console.log(student1, student2);
console.log(student1.name, student2.name);