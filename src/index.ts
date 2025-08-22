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

app.get('/products', (req,res) => {
    res.json({
        "message" : "You hit the products page"
    })
})
app.get('/products/:id',(req,res) => {
    res.json({
        "message":"You hit the products id route"
    })
})

app.get('/orderes',(req,res) => {
    res.json({
        "message":"Orders Page"
    })
})
app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`)
})


