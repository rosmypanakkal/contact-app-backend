// import db.js
const db=require('../services/db')

// logic for get all employees from the database
const getAllUsers =()=>{
    return db.contactuser.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contusers:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"user not found"
                }
            }
        }
    )
}


// logics for add contact

const addContact=(id,name,username,phone,email,address,pincode)=>{
    return db.contactuser.findOne({id}).then((result)=>{
        //if id is present in the db
        if(result){
            return{
                statusCode:404,
                message:"contact already exist"
            }
        }
        else{
            // id not present in the db
            const newContact=new db.contactuser({id,name,username,phone,email,address,pincode})
            newContact.save()
            return{
                statusCode:200,
                message:"Contact added successfully...."
            }
        }
    })

}


// logic for delete
const deleteContact=(id)=>{
    return db.contactuser.deleteOne({id}).then((response)=>{
        //if id is present in the db
            return{
                statusCode:200,
                message:"contact deleted"
            }         
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:" can't delete Contact...."
        }

    })

}

// view details

const getAnUsers =(id)=>{
    return db.contactuser.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contusers:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"user not found"
                }
            }
        }
    )
}



// update contact
const updateUser=(id,name,username,phone,email,address,pincode)=>{
    return db.contactuser.findOne({id}).then((result)=>{
            if(result){
                //assign updated contact details to the mongoDB object
                result.id=id;
                result.name=name;
                result.username=username;
                result.phone=phone;
                result.email=email;
                result.address=address;
                result.pincode=pincode;
                // to save db
                result.save();
                return{
                    statusCode:200,
                    message:"contact details updated successfully"
                }
            }
            else{
                return{//send to frontend
                    statusCode:404,
                    message:"user not found"
                }
            }
        }
    )

}





module.exports={
    getAllUsers,
   addContact,
   deleteContact,
   getAnUsers,
   updateUser
 
}