const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

console.log(questions);
console.log(answers);

//遍历问题数组
questions.forEach((question, index) => {
    //为每个问题添加点击事件监听器
  question.addEventListener('click', () => {
     // 切换对应答案的显示/隐藏状态
    answers[index].classList.toggle('show');
  });
});