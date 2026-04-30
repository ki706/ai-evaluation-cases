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
    
    <div class="section">
      <div class="label">Prompt</div>
      <div class="box">${c.prompt}</div>
    </div>

    <div class="section">
      <div class="label">Response A</div>
      <div class="box">${c.response_a}</div>
    </div>

    <div class="section">
      <div class="label">Response B</div>
      <div class="box">${c.response_b}</div>
    </div>

    <div class="section">
      <div class="label">Task</div>
      <div class="box">${c.task}</div>
    </div>

    <div class="section">
      <div class="label">Your Decision</div>
      <div class="box"><b>${c.chosen || "Not labeled"}</b></div>
    </div>

    <div class="section">
      <div class="label">Reasoning</div>
      <div class="box">${c.reasoning || "—"}</div>
    </div>

    <div class="section">
      <div class="label">Evaluation Tags</div>
      <span class="tag">accuracy</span>
      <span class="tag">clarity</span>
      <span class="tag">alignment</span>
    </div>
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
