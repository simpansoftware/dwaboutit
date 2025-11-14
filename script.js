(async () => {
    try {
        // 1️⃣ Load index.html
        const html = await fetch('https://raw.githubusercontent.com/AerialiteLabs/tinyjet-frontend/refs/heads/main/index.html').then(r => r.text());
        document.open();
        document.write(html);
        document.close();

        // 2️⃣ Load style.css
        const css = await fetch('https://raw.githubusercontent.com/AerialiteLabs/tinyjet-frontend/refs/heads/main/style.css').then(r => r.text());
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        // 3️⃣ Load sw.js
        const js = await fetch('https://raw.githubusercontent.com/AerialiteLabs/tinyjet-frontend/refs/heads/main/sw.js').then(r => r.text());
        const script = document.createElement('script');
        script.textContent = js;
        document.body.appendChild(script);

        console.log('Page replaced with remote index.html, CSS and JS loaded!');
    } catch (err) {
        console.error('Failed to load remote files:', err);
    }
})();
