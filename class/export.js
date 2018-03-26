const server = require('http').Server
const serve = fn => server((req, res) => exports.run(req, res, fn))

function defun(){
  console.log('hello,world')
}

console.log(serve(defun()))


exports.serve = serve;
