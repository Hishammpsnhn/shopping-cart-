var db  = require('../config/connection')
var collection = require('../config/collections')
module.exports={
    addProduct: (product,callback)=>{
         db.get().collection(collection.PRODUCTS_COLLECTION).insertOne(product).then((data)=>{
       
            callback(data.insertedId)
        })
        
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products =await db.get().collection(collection.PRODUCTS_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}