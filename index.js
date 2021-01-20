const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require('fs')
const path = require('path')
const configFile = path.resolve(argv.config)

if (!fs.existsSync(configFile)){
  throw new Error('Config file ' + argv.config + ' does not exist, copy config.sample.json to ' + argv.config + ' before first boot!')
}

const app = require('designer-backend-node')
app.serve(
  JSON.parse(
    fs.readFileSync(
      path.resolve(argv.config)
    ).toString()
  )
)