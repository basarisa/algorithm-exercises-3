function findStudentIndex(students, searchStudent) {
  for (let i = 0; i < students.length; i++){
    if (students[i] === searchStudent){
      return i;
    }
  }
}

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

/* คำตอบ **
  1.ใช้ Linear Search 
  2.Linear Search เป็นวิธีที่ดีที่สุดสำหรับการค้นหา "ข้อมูลที่ไม่เรียงลำดับ" และมีความเรียบง่ายในการเขียน
  3. Big O Notation คือ O(n) เนื่องจากต้องทำการตรวจสอบทุกสมาชิกในอาร์เรย์
*/

