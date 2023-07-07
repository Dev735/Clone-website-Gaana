console.log("Welcome to this demo clone website");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let Play = document.getElementById('Play');
let ProgressBar = document.getElementById('bar');
let gif = document.getElementById('gif');
let playing= document.getElementById('playing');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let smallplay = document.getElementById('0');


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("head");

var navi = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= navi) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Demo song", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Demo song", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Demo Same Song", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Demo new song", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

    Play.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');
    gif.style.opacity=1; 
}
    else{
        audioElement.pause();
        Play.classList.remove('fa-pause-circle');
        Play.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    }
    )
    songItems.forEach((e,i)=>{
        e.getElementsByTagName('img')[0].src =songs[i].coverPath;
        e.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    })
    audioElement.addEventListener('timeupdate', ()=>{ 
    
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        ProgressBar.value = progress;
    })
    
    ProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = ProgressBar.value* audioElement.duration/100;
    })
    
    const AllPlays = ()=>{
        Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            AllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            SongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            play.classList.remove('fa-play-circle');
            play.classList.add('fa-pause-circle');
        })
    })
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        playing.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        playing.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
    })

    Array.from(document.getElementsByClassName('songPlay')).forEach((e) =>
    e.addEventListener('click', (el) =>{
    songIndex = parseInt(el.target.id) ;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    playing.innerText = songs[songIndex].songName;
    
    if(audioElement.paused){
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
        smallplay.classList.remove('fa-play-circle');
        smallplay.classList.add('fa-pause-circle');
        
        gif.style.opacity=1; 
    }
        else{
            audioElement.pause();
           
            Play.classList.remove('fa-pause-circle');
            Play.classList.add('fa-play-circle');
            smallplay.classList.remove('fa-pause-circle');
            smallplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }


    } )
    )