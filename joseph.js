//1) load player buttons on refresh- html
//2) play/pause function
//3) skip to next song function
fetch ('http://localhost:3000')
.then(res=> res.json())
.then(music => console.log(music[3].imagefile))
Joseph = music

const songSrc = document.querySelector('#songsrc')
songSrc.src = Joseph[0].musicfile
const songImage = document.querySelector('#album-cover')
//need html for bandName and titleName
const bandName = document.querySelector('#id')
const titleName = document.querySelector('#id')




// songs = music[3].musicfile
// thumbnails = .imagefile
// songArtists = .bandname
// songTitles =.titlename

// If play button clicked, change pp.src to pause button and call song.play(). If pause button clicked, change pp.src to play button and call song.pause().
let playing = true
let pPause = document.querySelector('#play')
function playPause() {
  if (playing) {
    pPause.src = "images/play.png"; //this will change the 
    // Play button to a Pause button
    // thumbnail.style.transform = "scale(1.15)"; //this will slightly 
    // zoom in the album cover for a cool effect
    songSrc.play(); //this will play the audio track
    playing = false;
  } else {
    pPause.src = "images/play.png"
    // thumbnail.style.transform = "scale(1)" //this will slightly 
    // zoom in the album cover for a cool effect
    songSrc.pause();
    playing = true;
  }
}
// automatically play the next song at the end of the audio object's duration
songSrc.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
songIndex = 0;
function nextSong() {
  songIndex++;
  if (songIndex > 1) {
    songIndex = 0;
  };//change all these variables when html is updated
  songSrc.src = songs[songIndex];
  songImage.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];
  bandName.innerHTML = songArtists[songIndex];
  titleName.innerHTML = songTitles[songIndex];
  playing = true;
  playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = 1;
    };
    songSrc.src = songs[songIndex];
    songImage.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    bandName.innerHTML = songArtists[songIndex];
    titleName.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
  }