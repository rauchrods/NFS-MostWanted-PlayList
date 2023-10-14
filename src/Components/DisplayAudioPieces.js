import AudioPiece from "./AudioPiece";
import hush from '../../src/Assets/Hush-FiredUp.m4a';
import rock from '../../src/Assets/Rock.m4a';
const audios = [
    {
        name: "Hush- Fired Up",
        audio: hush
    },
    {
        name: "Rock - I am Rock",
        audio: rock
    },
    {
        name: "Stratus - You must follow",
        audio: hush
    },
    {
        name: "Styles of Beyond",
        audio: hush
    },
    {
        name: "TI presents The P$C - Da Ya Thang",
        audio: hush
    }
]

const DisplayAudioPieces = () => {
    return (
        <div className="display-audios">
            <h1>NFS Most Wanted Music PlayList</h1>
            {
                audios.map((audio, index) => {
                    return <AudioPiece title={audio.name} audio={audio.audio} key={index} index={index + 1} />
                })
            }

        </div>

    )
}

export default DisplayAudioPieces;