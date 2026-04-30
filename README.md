# AI Evaluation Cases (Human Judgment Interface)

This project simulates a real-world AI evaluation workflow used in annotation and LLM quality assessment tasks.

It focuses on **human judgment under ambiguity**, including:
- factual accuracy
- reasoning quality
- bias detection
- instruction following
- clarity evaluation

---

## 🎯 Purpose

This repository demonstrates how AI-generated responses are evaluated by human annotators.

It is designed to reflect tasks commonly found in:
- AI evaluation roles
- RLHF annotation workflows
- LLM quality assessment projects
- data labeling pipelines

---

## 🧠 What this project shows

- Ability to compare AI-generated responses
- Consistent decision-making under ambiguity
- Structured reasoning for evaluation choices
- Understanding of annotation criteria used in real AI systems

---

## 📁 Project Structure

```bash
ai-evaluation-cases/
│
├── data/
│   └── cases.json              # Evaluation cases (prompt + responses + criteria)
│
├── annotations/
│   └── labeled_cases.json      # Human-style decisions + reasoning
│
├── website/
│   ├── index.html              # Interactive evaluation interface
│   ├── style.css               # UI styling
│   └── app.js                  # Case navigation + selection logic
│
└── README.md
