const AudioPiece = ({ title, audio, index }) => {
    return (
        <div className="audio-piece">
            <span>{index}: {title}</span>
            <audio src={audio} controls autoPlay></audio>
        </div>

    )
}

export default AudioPiece;