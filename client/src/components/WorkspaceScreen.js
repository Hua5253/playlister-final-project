import { useContext } from "react";
import { useHistory } from "react-router-dom";
import SongCard from "./SongCard.js";
import AppBanner from "./AppBanner";
import MUIEditSongModal from "./MUIEditSongModal";
import MUIRemoveSongModal from "./MUIRemoveSongModal";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { GlobalStoreContext } from "../store/index.js";
import Statusbar from "./Statusbar.js";
/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function WorkspaceScreen() {
  const { store } = useContext(GlobalStoreContext);
  store.history = useHistory();

  let modalJSX = "";
  if (store.isEditSongModalOpen()) {
    modalJSX = <MUIEditSongModal />;
  } else if (store.isRemoveSongModalOpen()) {
    modalJSX = <MUIRemoveSongModal />;
  }
  return (
    <Box>
      <AppBanner />
      <List
        id='playlist-cards'
        sx={{ width: "100%", bgcolor: "background.paper" }}
      >
        {store.currentList.songs.map((song, index) => (
          <SongCard
            id={"playlist-song-" + index}
            key={"playlist-song-" + index}
            index={index}
            song={song}
          />
        ))}
      </List>
      {modalJSX}
      <Statusbar />
    </Box>
  );
}

export default WorkspaceScreen;
