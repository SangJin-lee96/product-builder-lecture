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
                    background: #2c2c2c;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                h1 {
                    color: #fff;
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
                    background: #444;
                    color: #fff;
                    font-size: 1.5em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                button {
                    padding: 15px 30px;
                    border: none;
                    border-radius: 10px;
                    background: #007bff;
                    color: #fff;
                    font-size: 1.2em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(0,123,255,0.5);
                }
                button:hover {
                    background: #0056b3;
                    box-shadow: 0 0 25px rgba(0,123,255,0.8);
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