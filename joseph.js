//1) load player buttons on refresh- html
//2) play/pause function
//3) skip to next song function

// If play button clicked, change pp.src to pause button and call song.play(). If pause button clicked, change pp.src to play button and call song.pause().
let playing = true;
const song = document.querySelector('#idForAudioSrcTag')
const thumbnail = document.querySelector('#idForAlbumCover')
const songArtist = document.querySelector('#id')
const songTitle = document.querySelector('#id')

songs = music.musicfile
thumbnails = music.imagefile
songArtists = music.bandname
songTitles =music.titlename

function playPause() {
  if (playing) {
    pPause.src = "**pause.png"; //this will change the 
    // Play button to a Pause button
    // thumbnail.style.transform = "scale(1.15)"; //this will slightly 
    // zoom in the album cover for a cool effect
    song.play(); //this will play the audio track
    playing = false;
  } else {
    pPause.src = "images/play.png"
    // thumbnail.style.transform = "scale(1)" //this will slightly 
    // zoom in the album cover for a cool effect
 
    song.pause();
    playing = true;
  }
}
// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});
// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
songIndex = 0;
function nextSong() {
  songIndex++;
  if (songIndex > 1) {
    songIndex = 0;
  };//change all these variables when html is updated
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];
  playing = true;
  playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = 1;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
  }