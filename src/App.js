import './App.css';
import DisplayAudioPieces from './Components/DisplayAudioPieces';
import backImg from '../src/Assets/nfs_wallpaper.jpg';

function App() {
  return (
    <>
      <img src={backImg} alt="" className='background-img' />
      <DisplayAudioPieces />
    </>

  );
}

export default App;
