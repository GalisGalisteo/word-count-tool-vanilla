const userInputNode = document.querySelector('#str');
const buttonNode = document.querySelector('#btn');
const btnWordLengthNode = document.querySelector('#btn--word-length');
const btnAddWordNode = document.querySelector('#btn-add-word');
const addedWordsNode = document.querySelector('#added-words');

userInputNode.maxLength = 50;

userInputNode.addEventListener('input', (e) => {
    btnWordLengthNode.textContent = `: ${e.target.value.length}`;
    btnAddWordNode.style.display = 'initial';
})

btnAddWordNode.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `${userInputNode.value} - ${userInputNode.value.length}`; 
    addedWordsNode.appendChild(newParagraph);
    userInputNode.value = '';
})


// version easy
//
// const outputNode = document.querySelector('#output');
//
// buttonNode.addEventListener('click', () => {
//     const userInputValue = userInputNode.value;

//     if (userInputValue === '') {
//         outputNode.textContent = `Please, enter a valid word.`
//     } else {
//         outputNode.textContent = `${userInputValue}: ${userInputValue.length}`;
//     }
    
// })



