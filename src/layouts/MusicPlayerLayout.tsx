import { MusicPlayer } from "@/components/MusicPlayer";
import { Outlet } from "react-router-dom";

const song = {
  title: "Song Title",
  artist: "Artist Name",
  image:
    "https://imgs.search.brave.com/M5uV55Hwiten4Cx7zEIZAom6CieSnDRFniTFFdMbZjk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/ZmFjZWJvb2svMDAw/LzA1NC82MTgvYWI2/NzYxNjEwMDAwNTE3/NGViMjZiMzk3Y2Zj/MWQ1Yjc4NTI5NmNk/ZC5qcGc",
  audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};

export const MusicPLayerLayout = () => {
  return (
    <>
      <MusicPlayer song={song} />
      <Outlet />
    </>
  );
};
