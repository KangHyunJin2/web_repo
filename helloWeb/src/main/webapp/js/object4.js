//object4.js

const obj = { //상수 설정
    sno: 1001,
    sname: '홍길동',
    address: '대구 중구 100번지',
    friends:[
        {name:'김민수', phone:'010-1111'},
        {name:'최현수', phone:'010-2222'},
    ],
    hobbies: [
        '독서', '영화보기', '여행', '요리'
    ]
}
obj.addFriend = function(friend){
    this.friends.push(friend);
}
obj.addFriend({name: '박현수',phone: '010-4444'});

obj.pets = ['범고래','호랑이','사자','흰수염고래'];
console.log('사자 꺼졍', obj.pets[2] , 'ㅜㅜ');
obj.pets[2] = '티라노사우르스';
console.log('애완 공룡: ' , obj.pets[2] , 'ㅋ');

console.log('이름:', obj['sname']);
console.log('친구는 ', obj.friends.length, '명입니다.');
console.log('첫번째 친구 이름: ' , obj['friends'][0].name);  //점 안 붙이면 [0]['name'] 이렇게 쓴다 
obj['friends'][1]['phone'] = '010-3333';  // 덮어 씌어진다
console.log('두번째 친구 연락처: ' , obj['friends'][1]['phone']);

obj.hobbies.forEach(hobby => console.log(hobby));