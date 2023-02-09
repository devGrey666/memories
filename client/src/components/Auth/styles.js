import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiPaper-root':{
      backgroundColor:"#f8f9fa",
    },
  },

  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '& .MuiAvatar-root': { backgroundColor:"#f79918",height:"60px",width:"60px" },
  },

  avatar: {
    margin: theme.spacing(1),
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding:theme.spacing(2)
  },

}));
export default useStyles;
