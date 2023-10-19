const AudioPiece = ({ title, audio, index, setCurrentAudio }) => {

    const setaudioHandler = async () => {

        await setCurrentAudio(audio);

        document.querySelector('audio').play();
    }

    return (
        <div className="audio-piece" onClick={setaudioHandler}>
            <span>{index}: {title}</span>
        </div>

    )
}

export default AudioPiece;