import express from 'express'
// import youtubeDl, * as ytdl from 'youtube-dl-exec'
import youtubeDl from 'youtube-dl-exec'
import { Router, Request, Response } from 'express';

const port = 6786; // todo: get from env or make it dinamic
const app = express();

app.use(express.json())


// *- Routes -*
const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/video', (req: Request, res: Response) => {
  const url: string = req.query['url'] as string;
  if (!url) {
    res.status(400).json({ message: 'url is required' })
    return;
  }

  // todo validate url

  youtubeDl(url).then(output => {
    console.log(output)
  })
})

app.use(route)

// *- Server -*
app.listen(port, () => 'server running on port: ' + port)
console.log("The server is running on port: ")
console.log("http://localhost:" + port)
