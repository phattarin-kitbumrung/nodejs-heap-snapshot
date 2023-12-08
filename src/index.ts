import express from 'express'
import v8 from 'v8'

const app = express()
const port = 3000

let arr = []

//  code for check SIGUSR2 signal
//  command: kill -SIGUSR2 <your_process_id>
process.on('SIGUSR2', () => {
  const fileName = v8.writeHeapSnapshot()
  console.log(`Created heapdump file: ${fileName}`)

  // create 1 million items
  for (let i = 0; i < 1000000; i++) {
    arr.push(i)
    console.log(`arr length: ${arr.length}`)
  }
})

app.listen(port, async () => {       
  console.log( `server started at http://localhost:${port}`)
  console.log(`server listen at with PID: ${process.pid}`)

  /*
  for (const [key,value] of Object.entries(process.memoryUsage())){ 
    console.log(`Memory usage by ${key}, ${value/1000000}MB `) 
  }
  */
    
})
