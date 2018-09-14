window.SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const audioPlayer = document.querySelector('audio');
let p = document.createElement('p');

const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
            .map(result => result.transcript).join('');
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
    if(transcript.includes('rock')){
        console.log('🤘');
        audioPlayer.play();
    }
    else if(transcript.includes('stop')){
        audioPlayer.pause();
    }
    else{}
});

recognition.addEventListener('end', recognition.start);

recognition.start();