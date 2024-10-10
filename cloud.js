const http = require('http');

// This shows on the tab title
function header() {
    return `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yron's Website</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            header { background: #f4f4f4; padding: 1rem; }
            main { margin-top: 20px; }
            footer { margin-top: 20px; text-align: center; font-size: 0.8rem; }
        </style>
    </head>
    `;
}

function navigation() {
    return `
    <nav>
        <a href="index.html">View all</a> |
        <a href="games.html">Games</a> |
        <a href="cv.html">Computer Vision</a> |
        <a href="contact.html">Contact</a>
    </nav>
    `;
}

function mainContent() {
    return `
    <main>
        <h2 id="home"> </h2>
        <p>Nothing to see here...</p>
    </main>
    `;
}

function footer() {
    return `
    <footer>
        <p>&copy; 2024 Yron Keith Gerona. All rights reserved.</p>
    </footer>
    `;
}

function assemblePage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${header()}
    <body>
        <header>
            <h1>YRON'S WEBSITE</h1>
            ${navigation()}
        </header>
        ${mainContent()}
        ${footer()}
    </body>
    </html>
    `;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(assemblePage());
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});