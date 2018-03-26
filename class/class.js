class Template {
  constructor(prop){
    this.a = prop
  }
  run(runprop){
    console.log(this.a)
    console.log('hello,world')
    console.log(runprop)
  }
}

const serve = fn => {
  Template((fn)=>{
    exports.run(runprop,fn)
  })
}

exports.Template = Template
exports.serve = serve
