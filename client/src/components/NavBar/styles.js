import {makeStyles} from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({

  appBar: {
    margin: "10px 0",
    padding: "10px 50px",
    display:"flex",
    '& .MuiAppBar-root':{
      boxShadow:"none !important",
    },
    [theme.breakpoints.down("sm")]: {

    },
  },
  // heading: {
  //   color: theme.palette.primary.main,
  //   textDecoration: "none",
  //   fontSize: "2em",
  //   fontWeight: 300,
  // },
  // image: {
  //   marginLeft: "10px",
  //   marginTop: "5px",
  // },
  // profile: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   width: "400px",
  //   alignItems: "center",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "auto",
  //     marginTop: 20,
  //     justifyContent: "center",
  //   },
  // },
  // logout: {
  //   marginLeft: "20px",
  // },
  // userName: {
  //   display: "flex",
  //   alignItems: "center",
  //   textAlign: "center",
  // },
  // brandContainer: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  // purple: {
  //   color: theme.palette.getContrastText(deepPurple[500]),
  //   backgroundColor: deepPurple[500],
  // },
  // mainBrand: {
  //   display: "flex",
  //   marginLeft: "50px",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  // },
  // mainAuth: {
  //   display: "flex",
  //   marginRight: "1px",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
}));

export default useStyles;
