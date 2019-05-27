'use strict';
import quizData from './quiz-data.js';

function testMarkup({ title, questions }) {
  let markup = `<h1 class="title js-title">${title}</h1>`;
  markup += questions.reduce((markupQuestions, item, idx) => {
    const choices = item.choices.reduce((markupChoices, el, i) => {
      markupChoices += `
      <li>
      <label>
        <input type="radio" name="choice${idx}" value="${i}" />
        ${el}
      </label>
    </li>
      `;
      return markupChoices;
    }, '');
    markupQuestions += `
    <section class="frame">
    <h3 class="testQuestion">${(idx += 1)}. ${item.question}</h3>
    <ol class="choiceList">
      ${choices}
    </ol>
    </section>
    `;
    return markupQuestions;
  }, '');
  return markup;
}
const test = testMarkup(quizData);
const form = document.querySelector('.js-test');

form.insertAdjacentHTML('afterbegin', test);
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let trueChoices = 0;
  let falseChoices = 0;
  const targer = event.currentTarget;
}
