import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
//import Song from './Song';

const Songs = () => {

    const playlist = useRecoilValue(playlistState);

    return (
        <div></div>
    );
};

export default Songs;