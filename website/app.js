let cases = [];
let index = 0;

fetch("../data/cases.json")
  .then(res => res.json())
  .then(data => {
    cases = data;
    renderCase();
  });

function renderCase() {
  const c = cases[index];

  document.getElementById("caseBox").innerHTML = `
    <div class="label">Prompt</div>
    <div class="choice">${c.prompt}</div>

    <div class="label">Response A</div>
    <div class="choice">${c.response_a}</div>

    <div class="label">Response B</div>
    <div class="choice">${c.response_b}</div>

    <div class="label">Task</div>
    <div class="choice">${c.task}</div>
  `;
}

function nextCase() {
  if (index < cases.length - 1) {
    index++;
    renderCase();
  }
}

function prevCase() {
  if (index > 0) {
    index--;
    renderCase();
  }
}
