const { getUser } = require("../service/auth");

function checkForAuthentication(req,res,next){
  const cookie=req.cookies?.token
  req.user=null;
  if(!cookie)
  return next()
  
  const token=cookie;
  const user=getUser(token)
  req.user=user;
  return next();
}
function restrictTo(roles=[])
  {
    return function(req,res,next)
    {
      if(!req.user) return res.redirect('/login')
      if(!roles.includes(req.user.role)) return res.redirect('/login')

      return next();
    }
  }
module.exports={
  checkForAuthentication,
  restrictTo
}