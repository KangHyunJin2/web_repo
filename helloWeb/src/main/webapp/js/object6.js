// Map, Set

const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);
map.set("김길동", 90); //Map 은 같은 객체일값이 나중에 오는게 덮어씌어져서 나온다.

//map.delete("김길동");

const refval = [12];
map.set(refval, 88);
console.log(map.get(refval)); // 값믄 가지고 오고 싶으면 get

console.log(map.get("홍길동"));
for (let ent of map.entries()) { //entries = 키 : 값
    console.log('이름: ', ent[0], ', 점수: ', ent[1]);
}

map.forEach(function (val, key, map) { //(function(val , key , map))
    if(key == "홍길동")
    // function(a,b,c)
    // console.log(a,b,c)
    console.log(val, key, map);
})

//맵 <-> 배열.
const ary = [['프로도', 3] ,['라이언' ,5] ,['어피치' ,4]];
const fmap = new Map(ary); //Map(생성자:배열);

for (let ent of fmap.entries()){
    console.log('키: ', ent[0], ',값: ' , ent[1]);
}

const entries = fmap.entries();
console.log(entries);  // entries: MapIterator 타입.

console.log(Array.from(fmap)); // 맵 -> 배열로 변환

console.clear();
// Set: 중복된 값은 허용 X.
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add(["어피치", 4]); //보기에는 같은 값이지만 배열은 각각 다른 참조값을 가지고 있음
set1.add(["어피치", 4]);

console.log(set1.size);

set1.forEach(function (val, item, set) {
    console.log(val, item, set);
})

// 셋 <-> 배열.
const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2)); // 셋 -> 배열.























