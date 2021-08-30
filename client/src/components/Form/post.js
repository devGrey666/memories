import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../../actions/posts";
import FileBase from "react-file-base64";
import useStyles from "./style";
const Post = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  };
  const [postData, setPostData] = useState(initialValues);
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // postData.tags = postData.tags.split(",");
    if (currentId) {
      // if there is current Id then it it will execute
      dispatch(
        updatePost(currentId, {
          ...postData,
          name: JSON.parse(localStorage.getItem("profile")).result.name,
        })
      );
      clear();
    } else {
      dispatch(
        addPost({
          ...postData,
          name: JSON.parse(localStorage.getItem("profile")).result.name,
        })
      );
    }
    clear();
  };
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const clear = () => {
    setPostData(initialValues);
    setCurrentId(null);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user?.result.name) {
    return (
      <Paper className={classes.paper}>
        <Typography varaint="h6">
          Please Sign in to Create Your memories and like Others
        </Typography>
      </Paper>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form
          className={classes.form}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" component="h2">
            Creating A Memory
          </Typography>

          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={postData.title}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={postData.message}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Tags"
            placeholder="Tags(comma Separated)"
            name="tags"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={postData.tags}
            InputLabelProps={{ shrink: true }}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
            ></FileBase>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.buttonSubmit}
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Post;
