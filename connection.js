const mongoose  = require('mongoose')


async function conenctToMongoDB(url)
{
 return mongoose.connect(url)
}

module.exports=conenctToMongoDB