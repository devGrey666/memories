import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";
const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const { totalPages } = useSelector((state) => state.posts);
  // let totalPages;
  const classes = useStyles();
  console.log("Pagination");
  useEffect(() => {
    console.log("Use Effect of Pagination");
    console.log("Page value is", page);
    if (page) dispatch(getPosts(page));
  }, [page, dispatch]);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={totalPages}
      page={Number(page)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        ></PaginationItem>
      )}
    ></Pagination>
  );
};

export default Paginate;
