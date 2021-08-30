import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const addPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const getPostsBySearch = (searchQuery) =>
  API.get(
    `posts/search?searchQuery=${searchQuery.search || "none"} &tags=${
      searchQuery.tags
    }`
  );
//  Users apis

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);
