import AudioPiece from "./AudioPiece";
import hush from '../../src/Assets/Hush-FiredUp.m4a';
import rock from '../../src/Assets/Rock.m4a';
import styles from '../../src/Assets/Styles of Beyond.mp3';
import celldweller from '../../src/Assets/Celldweller feat. Styles of Beyond.mp3';

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
        name: "Styles of Beyond - Nine Thou",
        audio: styles
    },
    {
        name: "Celldweller feat. Styles of Beyond",
        audio: celldweller
    },
    // {
    //     name: "TI presents The P$C - Da Ya Thang",
    //     audio: hush
    // }
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