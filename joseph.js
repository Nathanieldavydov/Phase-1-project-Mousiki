//1) load player buttons on refresh- html
//2) play/pause function
//3) skip to next song function
fetch ('http://localhost:3000')
.then(res=> res.json())
.then(music => console.log())

// const songSrc = document.querySelector('#songsrc')
// // songSrc.src = Joseph.musicfile
// const songImage = document.querySelector('#album-cover')
// //need html for bandName and titleName
// const bandName = document.querySelector('#id')
// const titleName = document.querySelector('#id')

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
const curr_track = document.getElementById('songsrc')////***** 

let isPlaying = false
let track_index = 0

let track_list = Object.keys(Joseph.shareInfo[i]).length

function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
    }
    
function playTrack() {
    // Play the loaded track
    curr_track.play();
    isPlaying = true;
    
    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa-solid fa-pause fa-3x" id="pause"></i>';
    }
    
function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa-solid fa-play fa-3x" id="play"></i>';
    }

//need to change this .length of entire array
//per user
function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
    }
    
function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;
    
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
    }
//EXTRAS
// Move to the next track if the current finishes playing
  // using the 'ended' event
// curr_track.addEventListener("ended", nextTrack)    

// songs = music[3].musicfile
// thumbnails = .imagefile
// songArtists = .bandname
// songTitles =.titlename

// If play button clicked, change pp.src to pause button and call song.play(). If pause button clicked, change pp.src to play button and call song.pause().
// let playing = true
// let pPause = document.querySelector('#play')
// function playPause() {
//   if (playing) {
//     // pPause.src = "images/pause.png"; //this will change the 
//     // Play button to a Pause button
//     // thumbnail.style.transform = "scale(1.15)"; //this will slightly 
//     // zoom in the album cover for a cool effect
//     songSrc.play(); //this will play the audio track
//     playing = false;
//   } else {
//     // pPause.src = "images/play.png"
//     // thumbnail.style.transform = "scale(1)" //this will slightly 
//     // zoom in the album cover for a cool effect
//     songSrc.pause();
//     playing = true;
//   }
// }
// // automatically play the next song at the end of the audio object's duration
// songSrc.addEventListener('ended', function(){
//     nextSong();
// });

//take 2
// const pauseIcon = document.querySelector('#pause-btn')
// const playIcon = document.querySelector('#play-btn')

// const btns = document.querySelector('.btn')

// function onChange (event) {
//   // get the button elememt from the event
//     const buttonElement = event.currentTarget
  
//   // check if play button class is present on our button
//     const isPlayButton = buttonElement.id.contains(playIcon)
  
//   // if a play button, remove the play button class and add pause button class
//   if (isPlayButton) {
//     buttonElement.id.remove(playIcon)
//     buttonElement.id.add(pauseIcon)
    
//     // if a pause button, remove pause button class and add play button class
//   } else {
//     buttonElement.id.remove(pauseIcon)
//     buttonElement.id.add(playIcon)
//   }
//   // You can also use .toggle function on classList as mentioned by the person in other answer
// }
// // query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
// btns.forEach(btn => {
//     btn.addEventListener('click', onChange)
// })
// //end take 2

// //take 1 ff, rw
// // function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
// songIndex = 0;
// function nextSong() {
//   songIndex++;
//   if (songIndex > 1) {
//     songIndex = 0;
//   };//change all these variables when html is updated
//   songSrc.src = songs[songIndex];
//   songImage.src = thumbnails[songIndex];
//   background.src = thumbnails[songIndex];
//   bandName.innerHTML = songArtists[songIndex];
//   titleName.innerHTML = songTitles[songIndex];
//   playing = true;
//   playPause();
// }

// // function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
// function previousSong() {
//     songIndex--;
//     if (songIndex < 0) {
//       songIndex = 1;
//     };
//     songSrc.src = songs[songIndex];
//     songImage.src = thumbnails[songIndex];
//     background.src = thumbnails[songIndex];
//     bandName.innerHTML = songArtists[songIndex];
//     titleName.innerHTML = songTitles[songIndex];
//     playing = true;
//     playPause();
//   }
  //end take 1 ff/rw