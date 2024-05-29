const jwt = require('jsonwebtoken');

function parseJwt (Header) {
    const [, token] = Header.split(' ');

    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

module.exports = { parseJwt };