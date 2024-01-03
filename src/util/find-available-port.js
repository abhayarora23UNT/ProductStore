const portScanner = require('portscanner')
const _ = require('lodash')

const PORT_RANGE_START = 9081
const PORT_RANGE_END = 9800
const LOOPBACK_ADDRESS = '127.0.0.1'

async function isAvailable(port) {
    let status = await portScanner.checkPortStatus(port, LOOPBACK_ADDRESS)
    return status === 'closed'
}

async function findAvailablePort() {
    let port = _.random(PORT_RANGE_START, PORT_RANGE_END)
    if (!(await isAvailable(port))) {
        await findAvailablePort()
    } else {
        console.log(port)
    }
}

findAvailablePort()