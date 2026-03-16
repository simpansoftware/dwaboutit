if (window !== window.top) return;

document.open();
document.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>skolplus on crack</title>
    <style>
      html, body { height:100%; margin:0; overflow:hidden; }
      iframe { position:fixed; inset:0; width:100vw; height:100vh; border:0; }
    </style>
  </head>
  <body>
    <iframe src="https://skolplus.se" id="myFrame"></iframe>
  </body>
  <script>
  const iframe = document.getElementById("myFrame");
  
  function removeTarget() {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
  
      // remove element with id
      const el = doc.getElementById("demoonly");
      if (el) el.remove();
  }
  
  iframe.addEventListener("load", () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      removeTarget();
      const observer = new MutationObserver(removeTarget);
      observer.observe(doc.documentElement, {
          childList: true,
          subtree: true
      });
  });
  </script>
</html>
`);
document.close();
