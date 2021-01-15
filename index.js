const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require('fs')
const path = require('path')

const app = require('designer-backend-node')
app.serve(
  JSON.parse(
    fs.readFileSync(
      path.resolve(argv.config)
    ).toString()
  )
)