// const kcInfo = ["Kichang", "22", true, "Incheon"];

// console.log(kcInfo); 
// 어떤게 어떤 정보인지 알 수 없으니까 효율적이지 못함.

const kcInfo = {
    name : "Kichang",
    age : 22,
    gender : "Male",
    Region : "Incheon",
    favMovie : ["Begin Again", "Tenet"],
    favFood : [
        {
            name:"kimchi",
            fatty:false
        },
        {
            name:"Hambuger",
            fatty:true
        }
    ]
};  //자유롭게 넣을거 추가가능. Object 안에 Object를 넣거나 Array를 넣거나 할 수 있음.

console.log(kcInfo.age);

kcInfo.age = 23;    //내부값을 바꿀 수 있음.

console.log(kcInfo.age);

kcInfo.age = 22;

console.log(kcInfo);