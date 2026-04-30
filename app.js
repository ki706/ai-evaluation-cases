let cases = [];
let index = 0;

fetch("./data/cases.json")
  .then(res => res.json())
  .then(data => {
    cases = data;
    renderCase();
  });

function renderCase() {
  const c = cases[index];

  document.getElementById("caseBox").innerHTML = `

    <div class="section">
      <div class="label">Difficulty</div>
      <div class="box">${c.difficulty}</div>
    </div>

    <div class="section">
      <div class="label">Ambiguity</div>
      <div class="box">${c.ambiguity}</div>
    </div>

    <div class="section">
      <div class="label">Prompt</div>
      <div class="box">${c.prompt}</div>
    </div>

    <div class="section">
      <div class="label">Response A</div>
      <div class="box">${c.response_a}</div>
      <button class="choice-btn" onclick="select('A')">Select A</button>
    </div>

    <div class="section">
      <div class="label">Response B</div>
      <div class="box">${c.response_b}</div>
      <button class="choice-btn" onclick="select('B')">Select B</button>
    </div>

    <div class="section">
      <div class="label">Evaluation Criteria</div>
      <div class="box">${c.criteria.join(", ")}</div>
    </div>

    <div class="section">
      <div class="label">Selected Decision</div>
      <div class="box"><b>${c.chosen || "Not selected"}</b></div>
    </div>

    <div class="section">
      <div class="label">Reasoning</div>
      <div class="box">${c.reasoning || "—"}</div>
    </div>

    <div class="section">
      <div class="label">Confidence</div>
      <span class="tag">low</span>
      <span class="tag">medium</span>
      <span class="tag">high</span>
    </div>
  `;
}

function select(choice) {
  cases[index].chosen = choice;
  renderCase();
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
