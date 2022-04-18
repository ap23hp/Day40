const fs=require('fs/promises');


///////for adding  the given folder
// fs.mkdir('C:/Users/HP/Desktop/B32WDEnglish/Node.js/Task/Day_40/Task_Folder' ,(err)=>{
//     console.log(err)
// })



/////for removing the given folder
// fs.rmdir('Task_Folder', {recursive:true} ,(err)=>{
//         console.log(err)
//     })


/// method for adding new file in the given folder
let date=Date.now()
fs.writeFile(`C:/Users/HP/Desktop/B32WDEnglish/Node.js/Task/Day_40/Task_Folder/${date}.txt`,`${date}`,(err)=>{
    console.log(err)
})



/////method for reading files in the given folder
async function read(){
    console.log("In function")
const files=await fs.readdir("C:/Users/HP/Desktop/B32WDEnglish/Node.js/Task/Day_40/Task_Folder")

for(const file of files){
    console.log(files)
}
}

read()
console.log("124")
