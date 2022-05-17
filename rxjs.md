
rx js operator


ex)

const obs$ = of(4, 2, 6, 10, 8)

count: subscibe 한 개체의 숫자를 세는 operator
obs$.pipe(count()).subscribe((x) => console.log('count:', x))

count: 5


max: subscibe 한 개체의 최댓값
obs$.pipe(max()).subscribe((x) => console.log('max:', x))
max: 10

min: subscribe 한 개체의 최소값
min: 2


reduce: 자바스크립트의 reduce와 동일

obs$.pipe(reduce((pre, current) => pre * current, 1)).subscribe((x) =>

cummulated: 3840

first: subscibe 한 개체의 첫번째

last: subscibe 한 개체의 마지막

elementAt: subscibe 한 개체의 지정된 index 

distinct: subscibe 한 개체의 중복제거 값

filter: 