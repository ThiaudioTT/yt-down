import express from 'express'
// import youtubeDl, * as ytdl from 'youtube-dl-exec'
import youtubeDl from 'youtube-dl-exec'
import { Router, Request, Response } from 'express';
import fs from 'fs';

const port = 6786; // todo: get from env or make it dinamic
const app = express();

app.use(express.json())


// *- Routes -*
const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})


function getVideoData(filePath) {
  // Read the file
  return fs.readFileSync(filePath);
}

route.get('/video', (req: Request, res: Response) => {
  const url: string = req.query['url'] as string;
  if (!url) {
    res.status(400).json({ message: 'url is required' })
    return;
  }

  // todo validate url

  youtubeDl(url, {
    output: './video.webm',
    forceOverwrite: true,

  }).then(output => {

    res.send(getVideoData('./video.webm'))
    console.log(output)

    // remove file
    fs.unlink('./video.webm', (err) => {
      if (err) {
        console.error(err)
        return
      }
    })


    console.log("ALL DONE!!!!!");
  })
})

app.use(route)

// *- Server -*
app.listen(port, () => 'server running on port: ' + port)
console.log("The server is running on port: ")
console.log("http://localhost:" + port)
