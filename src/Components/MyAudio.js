function MyAudio({ curraudio }) {
    return (
        <div className="audio-player">
            <audio src={curraudio} controls></audio>
        </div>
    )
}

export default MyAudio;