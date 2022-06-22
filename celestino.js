//load users, and first song on refresh
//load song list by clicking user
//load display from clicking song
//loads: img, song-title, band-name, song-file

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

const musicSource = document.getElementById('songsrc')

celestinoProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Celestino')
    .then(res => res.json())
    .then(data => {
        loadAlbum(data),
        eventListeners(data)
    })
})

josephProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Joseph')
    .then(res => res.json())
    .then(data => {
        loadAlbum(data),
        eventListeners(data)
    })
})

nathanielProfile.addEventListener('click', () => {
    fetch('http://localhost:3000/Nathaniel')
    .then(res => res.json())
    .then(data => {
        loadAlbum(data),
        eventListeners(data)
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

 function eventListeners(data){
    songOne.addEventListener('click', () => {
        albumCover.src = data[0].imagefile;
        songTitle.textContent = data[0].titlename;
        songArtist.textContent = data[0].bandname;
        //musicSource.src = data[0].musicfile;
    })

    songTwo.addEventListener('click', () => {
        albumCover.src = data[1].imagefile;
        songTitle.textContent = data[1].titlename;
        songArtist.textContent = data[1].bandname;
    })

    songThree.addEventListener('click', () => {
        albumCover.src = data[2].imagefile;
        songTitle.textContent = data[2].titlename;
        songArtist.textContent = data[2].bandname;
    })

    songFour.addEventListener('click', () => {
        albumCover.src = data[3].imagefile;
        songTitle.textContent = data[3].titlename;
        songArtist.textContent = data[3].bandname;
    })
}


