import React from "react";
import Post from "./post/post.js";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
  const { isLoading, posts } = useSelector((state) => state.posts);
  // console.log(" these are posts:", posts);
  // let isLoading, posts;
  const classes = useStyles();
  console.log("Posts is getting Called");
  // if (!posts.length && !isLoading) return "No record Found";
  if (!posts) return null;
  return (
    <Grid
      container
      alignItems="stretch"
      className={classes.container}
      spacing={3}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId}></Post>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Posts;
