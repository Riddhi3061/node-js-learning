const { Console } = require('console');
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8', (err,result)=> {
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-sync.txt', 'Here is the result : ${first}, ${second}', 
            (err, result)=> {
                if (err){
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )   
    })
})

console.log('Starting next task')

//The lst line comes before the file output
// because the program doesn’t halt and continue executing whatever is next.