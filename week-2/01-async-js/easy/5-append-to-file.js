const f = require("fs");

const ap =" \nHello, this is the appended part";

f.appendFile("./example.txt",ap,(err)=>
{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log("Content appended successfully");
})