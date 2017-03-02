try {
  const fs = require('fs')
  const path = require('path')
  const sshPath = path.join(process.env.HOME, '.ssh')
  window.alert(`MWAHAHA\n\n${fs.readdirSync(sshPath)}`)
} catch (err) {
  console.log('`require` is not available')
}
