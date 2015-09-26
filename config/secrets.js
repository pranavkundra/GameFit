
module.exports = {
  db: {
      mongo: process.env.MONGO_URL || 'mongodb://admin:hackGT1234@ds051543.mongolab.com:51543/gamefit'    
  },
  jwtTokenSecret: process.env.JWT_TOKEN_SECRET ||'eqij!)ndn1e1e389nd1',
  sessionSecret: process.env.SESSION_SECRET || 'gamefitoqwd0'
}