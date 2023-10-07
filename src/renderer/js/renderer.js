
const videoForm = document.getElementById('videoForm');


videoForm.addEventListener('submit', e => {
    e.preventDefault();

    const videoUrl = document.getElementById('videoURL').value;

    // todo: validate url

    ipcRenderer.send('video:download', videoUrl);
})
