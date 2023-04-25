const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = process.env.DUMMY_VARIABLE_1
  res.end(msg);
});
console.log(process.env.testenv);
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
