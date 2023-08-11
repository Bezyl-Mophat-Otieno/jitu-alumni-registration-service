const express = require ('express');
const app  = express()
const {getPool} = require ('./config/db')
const registerMemberRouter = require('./routes/memberRoutes/registerMemberRoute')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((err, req, res, next)=>{
    res.json({Error: err})
})
app.use('/register', registerMemberRouter)


app.listen(4500, async()=>{
    
    try {
        await getPool()
        console.log('Server running on port 4500');
    } catch (error) {
        console.log(error);
        
    }

})