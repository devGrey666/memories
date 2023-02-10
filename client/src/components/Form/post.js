import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography,Box } from "@mui/material";
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
        <div className={classes.root}>
      <Paper className={classes.paper} >
        <Typography varaint="h6" component={"div"}>
          <p>
            Please Sign in to Create Your memories and like Others
          </p>
          </Typography>
      </Paper>
        </div>
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
          <Typography variant="h6" component="div">
            <h4>Create Memory</h4>
          </Typography>

          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            size={"small"}
            onChange={handleChange}
            value={postData.title}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
              label="Tags"
              placeholder="Tags(comma Separated)"
              name="tags"
              variant="outlined"
              fullWidth
              size={"small"}
              onChange={handleChange}
              value={postData.tags}
              InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline={true}
            minRows={5}
            fullWidth
            size={"small"}
            onChange={handleChange}
            value={postData.message}
            InputLabelProps={{ shrink: true }}
          />

          <div className={`${classes.fileInput} react-file`}>
            <FileBase
                id={"inputTag"}
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
            ></FileBase>
          </div>
          <Box style={{width:"100%" ,textAlign:"center"}} component={"div"} sx={{
            '& .MuiButton-root': { mt:2,width:"50%",backgroundColor:"#f79918" ,
              borderRadius:"7px" ,'&:hover':{backgroundColor:"#fff",color:"#f79918"}},
          }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.buttonSubmit}

          >
            Submit
          </Button>
          </Box>
          {/*<Button*/}
          {/*  variant="contained"*/}
          {/*  color="secondary"*/}
          {/*  size="small"*/}

          {/*  onClick={clear}*/}
          {/*>*/}
          {/*  Clear*/}
          {/*</Button>*/}
        </form>
      </Paper>
    </div>
  );
};

export default Post;
