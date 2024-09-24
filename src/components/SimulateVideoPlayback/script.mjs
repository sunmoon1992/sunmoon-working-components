// Process image packaging, compression, export, easy to use
// Depends on the vite environment, copy it to local to run

import fs from 'fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import ora from 'ora'
import path from 'path'
import async from 'async'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const base0 = path.resolve(__dirname, './imgs')
const base1 = path.resolve(__dirname, './tiny')
const base2 = path.resolve(__dirname, './imgs.ts')

const files0 = fs.readdirSync(base0)
const files1 = fs.readdirSync(base0)

function checkDir(path, callback) {
  fs.access(path, (err) => {
    if (err) {
      fs.mkdir(path, (err) => {
        if (err) throw err
        console.log(`folders create success 😊`)
        callback()
      })
    } else {
      callback()
    }
  })
}

function f2(callback) {
  const spinner = ora('sharp images').start();
  function _() {
    files0.forEach((file, i) => {
      sharp(`${ base0 }/${ file }`)
        .toFormat('png', { quality: 80 })
        .toFile(`${ base1 }/${ file }`, (err) => {
          if (err) {
            throw err
          } else {
            if (i === files0.length - 1) {
              spinner.succeed('sharp images 🆗')
              callback(null)
            }
          }
        })
    })
  }

  checkDir(base1, _)
}

function f3(callback) {
  const spinner = ora('append images').start();
  fs.writeFileSync(base2, '')
  files1.forEach((file, i) => {
    const [num] = file.split('.')
    fs.appendFileSync(base2, `import i${ num } from "./tiny/${ file }"\n`)
    if (i === files1.length - 1) {
      spinner.succeed('append images 🆗')
      callback(null)
    }
  })
}

function f4(callback) {
  let output = []
  const spinner = ora('export images').start();
  const names = fs.readFileSync(base2, { encoding: 'utf8' }).split('\n')
  names.forEach((n, i) => {
    const [, o] = n.split(' ')
    output.push(o)
  })
  const _output = output.map((r) => r && r.replace('i', '')).sort((a, b) => a - b)
  const __output = _output.map((r) => r && `i${ r }`)
  fs.appendFile(base2, `export const images = [${ __output }]`, (err) => {
    if (err) {
      throw err
    } else {
      spinner.succeed('export images 🆗')
      callback(null)
    }
  })
}

function main() {
  async.waterfall([
    f2,
    f3,
    f4
  ], function(err) {
    if (err) throw err
    console.info('all tasks completed 🎉')
  })
}

main()
