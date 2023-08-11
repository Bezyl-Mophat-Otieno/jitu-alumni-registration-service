const DB = require('../../database/dbHelpers');


const registerMember = async (req, res) => {

    const {fname , lname , cohortNumber, email , cohortTitle} = req.body
    console.log(req.body)

    if(!fname || !lname || !email || !cohortNumber || !cohortTitle){
        res.status(400).json({message: 'Please fill all fields' , status: 'failed'})
    }else{
        // email must match fname.lname@thejitu.com
        if(email !==`${fname.toLowerCase()}.${lname.toLowerCase()}@thejitu.com`){
            res.status(400).json({message: 'invalid email', status: 'failed'})
    }else{
        try {

            const result = await DB.executeProcedure('addMember', req.body)

            if(result.rowsAffected[0] === 1){
                res.status(201).json({message: 'Member registered successfully' , status: 'success'})
            }else{
                res.status(400).json({message: 'Member not registered' , status: 'failed'})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Internal server error' , status: 'failed'})
        }

    }
}
}

module.exports = {
    registerMember
};