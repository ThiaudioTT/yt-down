import express from 'express'
// import youtubeDl, * as ytdl from 'youtube-dl-exec'
import youtubeDl from 'youtube-dl-exec'
import { Router, Request, Response } from 'express';

const port = 3333;
const app = express();

app.use(express.json())


// *- Routes -*
const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/video', (req: Request, res: Response) => {

  youtubeDl('https://youtu.be/ukg5HMS-kfU').then(output => {
    console.log(output)
  })
})

app.use(route)

// *- Server -*
app.listen(3333, () => 'server running on port 3333')
console.log("The server is running on port: ")
console.log("http://localhost:" + port)
