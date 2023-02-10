import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts.js";
import {
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button, Chip,
} from "@mui/material";
import Posts from "../Posts/Posts.js";
import Form from "../Form/post.js";
import useStyles from "./styles.js";
import Paginate from "../Pagination/pagination.js";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;

  const searchQuery = query.get("searchQuery");
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("use effect of home");
  //   dispatch(getPosts());
  // }, [dispatch]);
  console.log("This is home");
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search: search, tags: tags.join(",") }));
      navigate(
        `posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };
  return (
    <Grow in>
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        alignItems="stretch"
        className={classes.mainContainer}
      >
        <Grid item xs={12} md={9}>
          <Posts setCurrentId={setCurrentId}></Posts>
        </Grid>
        <Grid item xs={12} md={3}>
          {/*<AppBar*/}
          {/*  className={classes.appBarSearch}*/}
          {/*  position="static"*/}
          {/*  color="inherit"*/}
          {/*>*/}
          {/*  <TextField*/}
          {/*    name="search"*/}
          {/*    label="search Memories"*/}
          {/*    value={search}*/}
          {/*    variant="outlined"*/}
          {/*    onKeyDown={handleKeyPress}*/}

          {/*    onChange={(event) => setSearch(event.target.value)}*/}
          {/*  />*/}
          {/*  <Chip*/}
          {/*    style={{*/}
          {/*      margin: "10px 0px",*/}
          {/*    }}*/}
          {/*    onDelete={handleDelete}*/}
          {/*    onAdd={handleAdd}*/}
          {/*    label="Search Tags"*/}

          {/*    value={tags}*/}
          {/*    variant="outlined"*/}
          {/*  />*/}
          {/*  <Button*/}
          {/*    variant="contained"*/}
          {/*    onClick={searchPost}*/}
          {/*    color="primary"*/}
          {/*    className={classes.searchButton}*/}
          {/*  >*/}
          {/*    Search*/}
          {/*  </Button>*/}
          {/*</AppBar>*/}
          <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
          {!searchQuery && !tags.length && (
            <Paper elevation={6} className={classes.pagination}>
              <Paginate page={page}></Paginate>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Grow>
  );
}

export default Home;
