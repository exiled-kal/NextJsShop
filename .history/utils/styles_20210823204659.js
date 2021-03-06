import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
});

export default useStyles;
