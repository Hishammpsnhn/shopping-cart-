var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
module.exports = {
  doSignup: (userdata) => {
  
    return new Promise(async (resolve, reject) => {
      const salt = await bcrypt.genSalt(10)
      userdata.Password = await bcrypt.hash(userdata.Password, salt)
      db.get().collection(collection.USER_COLLECTION).insertOne(userdata).then((data)=>{
       resolve(data)
      })
    })
  },
  doLogin:(userdata)=>{
    return new Promise(async(resolve,reject)=>{
      let loginStatus= false
   
      let user= await db.get().collection(collection.USER_COLLECTION).findOne({Email:userdata.Email})
      console.log(user)
      if(user){
        bcrypt.compare(userdata.Password,user.Password).then((status)=>{
          if(status){
            console.log("login")
          }else{
            console.log("login fail")
          }
        })

      }else{
        console.log("not user")
      }
    })
  }


}