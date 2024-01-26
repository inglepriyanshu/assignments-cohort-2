// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("./RemoveSpace.txt","utf-8",(err,data)=>
{
    if(err)
    {
        console.log(err.message);
        return;
    }
    const regex =/\s{2,}/g;
    const dataWithoutSpaces = data.replace(regex," ");

    fs.writeFile("./RemoveSpace.txt",dataWithoutSpaces,(err)=>
    {
        if(err)
        {
            console.log(err.message);
            return;
        }
    })
})

