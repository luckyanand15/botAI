import { Outlet } from "react-router-dom";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [chat, setChat] = useState([]);
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <CssBaseline />
      <Grid
        container
        sx={{
          background:
            "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))",
        }}
      >
        <Grid
          item
          size={{ xs: 12, md: 2.5 }}
          position={{ xs: "fixed", md: "relative" }}
          height={"100vh"}
          zIndex={{ xs: 9999, md: 1 }}
          boxShadow={{ xs: menu ? 10 : 0, md: 0 }}
          sx={{
            bgcolor: 'primary.light',
            '@media (max-width:800px)': {
              width: '70%',
              transform: menu ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 400ms ease',
            },
          }}
        >
          <Sidebar setChat={setChat} setMenu={()=>setMenu(false)}/>
        </Grid>
        <Grid item size={{ xs: 12, md: 9.5 }}>
          <Outlet
            context={{ chat: chat, setChat: setChat, handleMenu: setMenu }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
