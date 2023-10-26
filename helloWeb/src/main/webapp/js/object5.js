//object5.js

const obj1 ={
    name: "Hong",
    age: 20,
    weight:66.8
    // bloodType
}
console.log(obj1);

const obj3 = obj1; //

const obj2 = Object.assign( //새로운 객체를 만들어 주는 방식 
    {name: "Hwang",age:22 , height:123.4}, obj1);  //{} <- 참조 obj1 똑같은 속성이 있으면 기존값은 없어지고 덮어씌어진다 


//상속. obj4 는 자식 obj1 부모 (개인적인 견해 자바에서 부모자식 간에 자식의 오버라이드 재정의 느낌)
const obj4 = Object.create(obj1); 
// 상속을 통해서 자식객체를 생성하면 부모객체를 참조

obj4.name = "Kim"; //자식속성이 변경이 되면 부모값과 다른 값.
obj4.age = 23;

obj1.name = "Hwang";
console.log(obj4); //{} 값
console.log(obj4.name);
console.log(obj4.age);

//객체의 속성을 정의하는 방법. 객체의 속성기술자: defineProperty
//obj1 이 가지고 있는 bloodType에다 값을 "0";
//obj1.bloodType = "C";
//값을 정의 할때 Set 값을 가져오느건
Object.defineProperty(obj1, 'bloodType' , {
    set: function(bt){
        if(bt == "A" || bt == "B" || bt == "AB" || bt == "O"){
            this._bloodType = bt;
        } else {
            console.log('잘못된 유형입니다.');
            this._bloodType = "A";
        }
    },
    get: function(){
        return this._bloodType;
    }
})

obj1.bloodType = "AB"; //set 을 통해 값을 가져옴 
console.log(obj1.bloodType); //get을 통해 값을 가져옴

// 속성 정의 시 속성갑과 this 객체의 속성을 달리하는 이유는??
// 객체의 속성 정의 시 get/set 을 ㅇ디서 확인하는 지??









