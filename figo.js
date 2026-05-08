document.open();
document.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>proxy</title>
    <style>
      html, body { height:100%; margin:0; overflow:hidden; }
      iframe { position:fixed; inset:0; width:100vw; height:100vh; border:0; }
    </style>
  </head>
  <body>
    <iframe src="https://á.cc/f&f" title="simpansoftware"></iframe>
  </body>
</html>
`);
document.close();
