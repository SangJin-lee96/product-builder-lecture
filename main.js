class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .wrapper {
                    text-align: center;
                    padding: 50px;
                    border-radius: 15px;
                    background: var(--wrapper-bg);
                    box-shadow: var(--wrapper-shadow);
                }
                h1 {
                    color: var(--text-color);
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }
                .numbers {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 30px;
                }
                .number {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--number-bg);
                    color: var(--text-color);
                    font-size: 1.5em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                button {
                    padding: 15px 30px;
                    border: none;
                    border-radius: 10px;
                    background: var(--button-bg);
                    color: var(--text-color);
                    font-size: 1.2em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: var(--button-shadow);
                }
                button:hover {
                    background: var(--button-hover-bg);
                    box-shadow: var(--button-hover-shadow);
                }
            </style>
            <div class="wrapper">
                <h1>Lotto Number Generator</h1>
                <div class="numbers">
                    <div class="number">?</div>
                    <div class="number">?</div>
                    <div class="number">?</div>
                    <div class="number">?</div>
                    <div class="number">?</div>
                    <div class="number">?</div>
                </div>
                <button id="generate">Generate</button>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        this.shadowRoot.getElementById('generate').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const numberElements = this.shadowRoot.querySelectorAll('.number');
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            numberElements[index].textContent = number;
        });
    }
}

customElements.define('lotto-generator', LottoGenerator);

// Theme switching logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});