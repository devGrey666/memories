import { makeStyles } from "@mui/styles";

export default makeStyles({
  root:{
    '& .MuiCard-root':{
      boxShadow:"none",
      padding:"0"
    },
    '& .MuiCardContent-root':{
      padding:"0"
    }
  },
  media: {
    cursor:"pointer",
    paddingTop: "60%",
    borderRadius:"7px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow:"none",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    marginTop:"1.4em",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
});
