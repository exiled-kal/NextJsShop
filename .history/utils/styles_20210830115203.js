import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    justifyContent: "center"
    backgroundColor: "#FFFBF1",
    "& a": {
      color: "#ff",
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
});
export default useStyles;
