const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const jsonParser = bodyParser.json();

function run_cmd(cmd, args, callback) {
  const spawn = require('child_process').spawn; 
  const child = spawn(cmd, args);
  const resp = ""; 
  child.stdout.on('data', buffer => resp += buffer.toString()); 
  child.stdout.on('end', () => callback(resp));
}

app.post('/deploy', jsonParser, function (req, res) {
  console.log(req.body);
  run_cmd('sh', ['../run.sh'], (text) => console.log(text));
})

const port = 6090;
app.listen(port, err => {
  if (err) throw err;
  console.log(`app start at ${port}`);
});