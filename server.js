const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
var privateKey = fs.readFileSync('/etc/letsencrypt/live/kasugasorata.monster/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/kasugasorata.monster/cert.pem', 'utf8');

const httpsOptions = {
    key: privateKey,
    cert: certificate,
};
app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        let parsedUrl;
        if (req?.url) parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(443, () => {
        console.log("> Server started on https://localhost:443");
    });
});