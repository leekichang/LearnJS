/*
const mon = "Mon"
const tue = "Tue"
const wed = "Wed"
const thu = "Thu"
const fri = "Fri"

console.log(mon, tue, wed, thu, fri)
효율적이지 못함*/

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(daysOfWeek) //배열 사용하는게 효율적임!
console.log(daysOfWeek[2])  //배열의 특정값 추출 0부터 indexing
console.log(daysOfWeek[321])    // 정의안된건 undefined 