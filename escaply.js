document.open();
document.write(`
<iframe src="/join" style="position:fixed;inset:0;width:100vw;height:100vh;border:0" onload="let d=this.contentDocument,s=d.createElement('script');s.src='https://cdn.jsdelivr.net/npm/eruda';s.onload=()=>this.contentWindow.eruda.init();d.head.append(s)"></iframe>
`);
document.close();
