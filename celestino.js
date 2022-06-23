const celestinoProfile = document.getElementById('celestino-player')
const josephProfile = document.getElementById('joseph-player')
const nathanielProfile = document.getElementById('nathaniel-player')

const albumCover = document.getElementById('album-cover')
const songTitle = document.getElementById('title-song')
const songArtist = document.getElementById('title-artist')

const songOne = document.getElementById('song-one')
const songTwo = document.getElementById('song-two')
const songThree = document.getElementById('song-three')
const songFour = document.getElementById('song-four')

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

const musicSource = document.getElementById('songsrc')
let data;
let count = 0;

celestinoProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Celestino')
    .then(res => res.json())
    .then(fetchedData => {
        data = fetchedData,
        loadAlbum(data),
        songUno(data),
        songDos(data),
        songTres(data),
        songQuad(data)
    })
})

josephProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Joseph')
    .then(res => res.json())
    .then(fetchedData => {
        data = fetchedData,
        loadAlbum(data),
        songUno(data),
        songDos(data),
        songTres(data),
        songQuad(data)
    })
})

nathanielProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Nathaniel')
    .then(res => res.json())
    .then(fetchedData => {
        data = fetchedData,
        loadAlbum(data),
        songUno(data),
        songDos(data),
        songTres(data),
        songQuad(data)
    })
})

 function loadAlbum(data){
    albumCover.src = data[0].imagefile;

    songOne.src = data[0].imagefile;
    songTwo.src = data[1].imagefile;
    songThree.src = data[2].imagefile;
    songFour.src = data[3].imagefile;

    songTitle.textContent = data[0].titlename;
    songArtist.textContent = data[0].bandname;
 }

function songUno(data){
    count = 0;
    songOne.addEventListener('click', () => {
        albumCover.src = data[0].imagefile;
        songTitle.textContent = data[0].titlename;
        songArtist.textContent = data[0].bandname;
        musicSource.src = data[0].musicfile;
    })
}
function songDos(data){
    count = 1;
    songTwo.addEventListener('click', () => {
        albumCover.src = data[1].imagefile;
        songTitle.textContent = data[1].titlename;
        songArtist.textContent = data[1].bandname;
        musicSource.src = data[1].musicfile;
        
    })
}
function songTres(data){
    count = 2;
    songThree.addEventListener('click', () => {
        albumCover.src = data[2].imagefile;
        songTitle.textContent = data[2].titlename;
        songArtist.textContent = data[2].bandname;
        musicSource.src = data[2].musicfile;
    })
}
function songQuad(data){
    count = 3;
    songFour.addEventListener('click', () => {
        albumCover.src = data[3].imagefile;
        songTitle.textContent = data[3].titlename;
        songArtist.textContent = data[3].bandname;
        musicSource.src = data[3].musicfile;
        
    })
}

function nextSong(){
    ++count
    if(count > 3){
        count = 0
    }
    musicSource.src = data[count].musicfile
    albumCover.src = data[count].imagefile;
    songTitle.textContent = data[count].titlename;
    songArtist.textContent = data[count].bandname;
    musicSource.src = data[count].musicfile;
}

function previousSong(){
    --count
    if(count < 0){
        count = 3
    }
    musicSource.src = data[count].musicfile
    albumCover.src = data[count].imagefile;
    songTitle.textContent = data[count].titlename;
    songArtist.textContent = data[count].bandname;
    musicSource.src = data[count].musicfile;
}

nextBtn.addEventListener('click', () => {
    nextSong()
})

prevBtn.addEventListener('click', () => {
    previousSong()
})