const express = require('express');
const app = express();
const port = 3000;

let songs = [];
let nextSongId = 0;

app.use(express.json());

app.post('/song', (req, res) => {
    const { title, artists, url } = req.body;
    const song = { id: nextSongId, title, artists, url };
    songs.push(song);
    nextSongId++;
    res.status(201).json(song);
});
  
app.get('/song', (req, res) => {
    res.json(songs);
});
  
app.get('/song/:id', (req, res) => {
    const { id } = req.params;
    const song = songs[id];
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
});

  
app.listen(port, () => {
    console.log(`Spotify Clone running on port: ${port}`);
});
  
