import * as api from "../api";
export const getPosts = (page) => async (dispatch) => {
  try {
    console.log("getPosts");
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchPosts(page);
    console.log("Data in Fetch Posts", data);
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
    dispatch({ type: "STOP_LOADING" });
  } catch (error) {
    console.log(error.message);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  console.log("getPostsBySearch");
  try {
    const {
      data: { data },
    } = await api.getPostsBySearch(searchQuery);
    console.log("The data is", data);
    dispatch({ type: "FETCH_BY_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.addPost(post);
    const action = { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    const action = { type: "UPDATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    console.log(data);
    const action = { type: "DELETE", payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    const action = { type: "LIKE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
