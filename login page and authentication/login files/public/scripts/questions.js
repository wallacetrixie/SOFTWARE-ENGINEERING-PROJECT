const questions = [
    "What does a CPU stand for?",
    "Which of the following is an input device?",
    "Which type of software is designed to detect and remove computer viruses?",
    "What does RAM stand for",
    "Which programming language is commonly used for web development?",
    "What is the purpose of the  Ctrl + C keyboard shortcut?",
    "What is the file extension for a JavaScript file?",
    "Which of the following is an example of a secondary storage device?",
    "What is the function of an operating system?",
    // Add more questions as needed
];

const answers = [
    ["a) Central processing unit", "b) Central programming unit", "c) Central package unit", "d) Computer peripheral unit"],
    ["a) Printer", "b) Monitor", "c) Keyboard", "d) Speaker"],
    ["a) Firewall", "b) Anti-virus", "c) Database", "d) Spreadsheet"],
    ["a) Random Access Memory", "b) Read Only Memory", "c) Real-time Active Memory", "d) Remote Access Module"],
    ["a) Java", "b) Python", "c) HTML", "d) C++"],
    ["a) Copy", "b) Cut", "c) Paste", "d) Undo"],
    ["a) .js", "b) .html", "c) .css", "d) .java"],
    ["a) RAM", "b) Hard Disk Drive (HDD)", "c) CPU", "d) USB Flash Drive"],
    ["a) To store data", "b) To manage hardware resources", "c) To design websites", "d) To create documents"],


    // Add more answer options as needed
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    if (index >= 0 && index < questions.length) {
        document.getElementById("question").innerText = questions[index];
        const answerOptions = answers[index];
        const answerContainer = document.getElementById("answer-container");
        answerContainer.innerHTML = '';
        answerOptions.forEach((option) => {
            const div = document.createElement("div");
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "answer";
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(option));
            div.appendChild(label);
            answerContainer.appendChild(div);
        });
        currentQuestionIndex = index;
        
        
    }
}

function loadNextQuestion() {
    loadQuestion(currentQuestionIndex + 1);
}

function loadPreviousQuestion() {
    loadQuestion(currentQuestionIndex - 1);
}

// Load the first question on page load
window.onload = function() {
    loadQuestion(currentQuestionIndex);
};
