const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require('fs')
const path = require('path')
const config = require('designer-backend-node/src/util/app/config')
const configFile = path.resolve(argv.config)

if (!fs.existsSync(configFile)){
  throw new Error('Config file ' + argv.config + ' does not exist, copy config.sample.json to ' + argv.config + ' before first boot!')
}

config.setConfig(JSON.parse(fs.readFileSync(configFile).toString()))

const migrator = require('designer-backend-node/src/util/migrator/migrator')
migrator.migrate(argv.type, argv.path)