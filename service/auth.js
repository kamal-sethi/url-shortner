const jwt=require('jsonwebtoken')
const secretKey='kamal@123'

function setUser(user) {
  return jwt.sign({
    _id:user.id,
    email:user.email
  },
  secretKey
  )
}

function getUser(token) {
  try{
    return jwt.verify(token,secretKey)
  }
  catch(error){
    return null
  }
  
}

module.exports = {
  setUser,
  getUser,
};