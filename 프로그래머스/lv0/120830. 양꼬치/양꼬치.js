function solution(n, k) {
  let answer = (n * 12000) + (k * 2000); 
    if (n >= 10) {        
        let servicedDrink = parseInt(n / 10);
        answer = answer - servicedDrink * 2000;
    }
    return answer;
}

// 우리가 먹은 양꼬치의 양이 10인분 이상이라면 -> 음료수 하나를 서비스로 받는다!

// 총 지불 가격 = (우리가 먹은 양꼬치의 양 * 12000 + 우리가 시킨 음료수 * 2000원) - 서비스 받는 음료수 * 2000원
// answer = (n  * 12000 + k * 2000원) - 서비스 받는 음료수 * 2000원
// answer : 총 지불 가격


// 10인분을 먹으면 음료수 하나 서비스
// 양꼬치는 1인분에 12,000원
// 양꼬치 n인분과 음료수 k개
// 결과 : 총 지불 가격