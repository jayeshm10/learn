const express = require ('express')
const mongoose = require ('mongoose')

const port = 4000

const app = express();

app.listen(port,() =>{                    // listen() : function is used to bind and 
                                          //listen to the connections on the specified host and port.
    console.log(`server running on port ${port}`)
}
)

app.get("/", (req,res,next) =>  //
{
    res.send("its work")
})

app.get("/api/contacts", (req,res,next) => {
    res.status(200).json({ message: "Get all contacts"});
});

app.use("/api/contacts", require("./routes/contactRoutes"));




