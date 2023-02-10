import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useStyles from "./style";
const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };
  console.log("THis is post sub");
  return (
      <div className={classes.root}>
    <Card className={classes.card} >
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      {/*<div className={classes.overlay}>*/}
      {/*  <Typography variant="h6">*/}
      {/*    {post.name && post.name.toUpperCase()}*/}
      {/*  </Typography>*/}
      {/*  <Typography variant="body2">*/}
      {/*    {moment(post.createdAt).fromNow()}*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      {user?.result?._id === post.creator && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="medium"></MoreHorizIcon>
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography  variant={"subtitle2"}>
          <h4>
            {post.tags ? post.tags.map((tag) => `${tag.toUpperCase()} `) : ""}
          </h4>
          {/*<p>*/}
          {/*  {moment(post.createdAt).fromNow()}*/}
          {/*</p>*/}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body1" component="h2" gutterBottom>
          <h4>
            {post.title}
          </h4>
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <h4>
            {post.message}
          </h4>
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          disabled={!user?.result}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
          color="primary"
        >
          {post.likes.length}&nbsp; Like&nbsp;
          <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>
        </Button>
        {user?.result?._id === post.creator && (
          <Button
            size="small"
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
            color="primary"
          >
            Delete
            <DeleteIcon fontSize="small" color="secondary"></DeleteIcon>
          </Button>
        )}
      </CardActions>
    </Card>
      </div>
  );
};

export default Post;
