import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#FF",
    "& a": {
      color: "#ffffff",
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
});
export default useStyles;
