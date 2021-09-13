const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting"); //core.getInput()을 사용하면 action.yml 내부에 배치한 모든 입력 매개변수의 문자열을 지정할 수 있다!
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`); //콘솔에 다양한 방법으로 결과를 찍어낼 수 있다!
}
