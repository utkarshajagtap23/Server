const express=require("express")

const app=express()
const port=3000


app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.post('/', async(req,res)=>{ // taking data from frontend
    console.log(req.body)
    await res.send(req.body)
})

app.get('/getdata',async(req,res)=>{  //backend to frontend
    obj = {
        "book": [
     
           {
              "id": "01",
              "language": "Java",
              "edition": "third",
              "author": "Herbert Schildt"
           },
     
           {
              "id": "07",
              "language": "C++",
              "edition": "second",
              "author": "E.Balagurusamy"
           }
     
        ]
     }
    await res.send(obj)
})

app.listen(port,()=>{               // Server starts here
    console.log("This is Server "+port)
})