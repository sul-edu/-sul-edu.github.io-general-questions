// console.log('hello');
//using selectors inside the element

const questions = document.querySelectorAll('.question-art');
console.log(questions);

questions.forEach(function (question){
    const btn = question.querySelector('.question-btn');
   
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.parentElement.parentElement);

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle('show-text');
    })
   
});









//-------------------------2nd solution ---------//
// traversing the dom
//select all the buttons

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget);//grabbing the event element
//         // console.log(e.currentTarget.parentElement);//grab the parent element
//         // console.log(e.currentTarget.parentElement.parentElement); //grab the parent of parent
//         const newClass = e.currentTarget.parentElement.parentElement;
//         newClass.classList.toggle('show-text');
//     })
// })