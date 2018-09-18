const { verify } = require('jsonwebtoken')

const APP_SECRET = 'OregonSeed2018'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }

  throw new AuthError()
}

module.exports = {
  getUserId,
  APP_SECRET,
}