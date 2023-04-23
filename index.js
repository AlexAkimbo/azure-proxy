const httpProxy = require('http-proxy');

const port = process.env.PORT || 3000;
const upstreamUrl = process.env.UPSTREAM_URL;

console.log(`listening on port ${port}`);
const proxy = httpProxy.createProxyServer({ target: upstreamUrl, xfwd: true });
proxy.listen(port);

proxy.on('proxyRes', function (proxyRes, req, res) {
  console.log(new Date().toISOString(), req.url, proxyRes.statusCode);
});
