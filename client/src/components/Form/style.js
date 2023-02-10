import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
      '& .MuiPaper-root':{
        backgroundColor:"#f8f9fa",
      },
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
