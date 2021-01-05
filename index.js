
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

// document.getElementsByClassName('w drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'w'){
//         playAudio('sounds/tom-1.mp3')
//     }
// })

// document.getElementsByClassName('a drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'a'){
//         playAudio('sounds/tom-2.mp3')
//     }
// })

// document.getElementsByClassName('s drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 's'){
//         playAudio('sounds/tom-3.mp3')
//     }
// })

// document.getElementsByClassName('d drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'd'){
//         playAudio('sounds/tom-4.mp3')
//     }
// })

// document.getElementsByClassName('j drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'j'){
//         playAudio('sounds/snare.mp3')
//     }
// })

// document.getElementsByClassName('k drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'k'){
//         playAudio('sounds/crash.mp3')
//     }
// })

// document.getElementsByClassName('l drum')[0].addEventListener("keypress", function(event){
//     if (event.key === 'l'){
//         playAudio('sounds/kick-bass.mp3')
//     }
// })

// function playAudioWhenKeyPressed(e){
//     e || (e = window.event);
//     if (e.keyCode == 87){
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play()
//     }
// } 


document.onkeydown = checkKeycode

function checkKeycode(e) {
    var keycode;
    if (window.event){
        keycode = window.event.keyCode;
        if (keycode == 87){
            playAudio('sounds/tom-1.mp3')
        }
        if (keycode == 65){
            playAudio('sounds/tom-2.mp3')
        }
        if (keycode == 83){
            playAudio('sounds/tom-3.mp3')
        }
        if (keycode == 68){
            playAudio('sounds/tom-4.mp3')
        }
        if (keycode == 74){
            playAudio('sounds/snare.mp3')
        }
        if (keycode == 75){
            playAudio('sounds/crash.mp3')
        }
        if (keycode == 76){
            playAudio('sounds/kick-bass.mp3')
        }
    }
    else if (e){
        keycode = e.which;
        if (keycode == 87){
            playAudio('sounds/tom-1.mp3')
        }
        if (keycode == 65){
            playAudio('sounds/tom-2.mp3')
        }
        if (keycode == 83){
            playAudio('sounds/tom-3.mp3')
        }
        if (keycode == 68){
            playAudio('sounds/tom-4.mp3')
        }
        if (keycode == 74){
            playAudio('sounds/snare.mp3')
        }
        if (keycode == 75){
            playAudio('sounds/crash.mp3')
        }
        if (keycode == 76){
            playAudio('sounds/kick-bass.mp3')
        }
    }
}

//document.onclick = playAudio;

//const crash_sound = document.getElementById("crash");

//document.getElementsByClassName("k drum")[0].addEventListener("click", playAudio('sounds/crash.mp3'));
