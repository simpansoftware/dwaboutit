document.open();
document.write(`
<!DOCTYPE html>
<html>
    <head>
        <title>LexinMenu</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>LexinMenu</h1>
        <button onclick="dyniframe()">Dynamic IFrame</button><br>
        <button onclick="simpansoftware()">simpansoftware</button><br>
        <button onclick="sr3d()">Snow Rider 3D</button><br>
        <button onclick="spacewaves()">Space Waves</button><br>
        <button onclick="iceagebaby()">Kill The Ice Age Baby Adventure</button><br>
        <button onclick="lodconsole()">console</button>
        <script>
        function dyniframe() {
            const url = prompt('Enter the URL you want to load:');
            
            if (url) {
                document.open();
                document.write(\`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>Dynamic IFrame</title>
            <style>
            html, body { height:100%; margin:0; overflow:hidden; }
            iframe { position:fixed; inset:0; width:100vw; height:100vh; border:0; }
            </style>
        </head>
        <body>
            <iframe src="\${url}" title="dyniframe"></iframe>
        </body>
        </html>
                \`);
                document.close();
            } else {
                alert('No URL provided');
            }
        }

        function simpansoftware() {
            const script = document.createElement('script');
            script.src = 'https://simpansoftware.cc/loader.js';
            document.body.appendChild(script);
        }
        function sr3d() {
            const script = document.createElement('script');
            script.src = 'https://4lvaret.tech/a.js';
            document.body.appendChild(script);
        }
        function spacewaves() {
            const script = document.createElement('script');
            script.src = 'https://simpansoftware.cc/dwaboutit/spacewaves.js';
            document.body.appendChild(script);
        }
        function iceagebaby() {
            const script = document.createElement('script');
            script.src = 'https://simpansoftware.cc/dwaboutit/iceagebaby.js';
            document.body.appendChild(script);
        }
        function lodconsole() {
            const script = document.createElement('script');
            script.src = 'https://simpansoftware.cc/dwaboutit/console.js';
            document.body.appendChild(script);
        }
        </script>
    </body>
</html>
`);
document.close();
