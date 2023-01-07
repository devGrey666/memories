import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBarSearch: {
    broderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    broderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));

export default useStyles;
