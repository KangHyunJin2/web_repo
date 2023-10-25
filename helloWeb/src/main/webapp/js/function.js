		//함수 정의 2가지 방식
		//1함수 선언
		
//		function myFunc(std , score = 60){                     //매개변수 사용
        
        //if(score == undefined){                               //undefined 상태면 0값
		//	score = 0;
     	//	}  
     	
//    	console.log(`${std} 점수는 ${score}`);
//      return score; // return 구문이 없으면 undefined 값이 나옴
        
        //2함수 표현식
        var myFunc = function myFunc(std , score = 60){              	   //매개변수 사용
        
        //if(score == undefined){                       	   //undefined 상태면 0값
		//	score = 0;
        //}  
       
        console.log(`${std} 점수는 ${score}`);
        return score;                              	      // return 구문이 없으면 undefined 값이 나옴
        }
        
        //let myFunc = myFunc('홍길동');
        console.log(myFunc('홍길동'));                  		  // 80 이라는 확정값 값을 넣지않으면 undfrind 뜸