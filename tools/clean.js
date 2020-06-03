fse = require('fs-extra')

async function clean(){
  await fse.emptyDir('./dist')
  await fse.copy('./src/views', './dist/views')  
}

clean()
