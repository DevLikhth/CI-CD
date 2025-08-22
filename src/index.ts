import express from "express"

const app = express()

app.use(express.json())


const PORT = 3000

app.get('/',async(req, res) => {

    setTimeout(()=>{
        console.log("Server is up")
    },1000)

    return res.json(
       {
         "message":"We are Live"
       }
    )
})

app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`)
})


