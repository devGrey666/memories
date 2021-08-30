export const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      console.log("start loading...");
      return { ...state, isLoading: true };
    case "STOP_LOADING":
      console.log("stop loading...");
      return { ...state, isLoading: false };
    case "FETCH_ALL":
      console.log("Fetch ALl");
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case "FETCH_BY_SEARCH":
      return { ...state, posts: action.payload };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE":
      return {
        ...state,
        posts: state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "LIKE":
      return {
        ...state,
        posts: state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE":
      return {
        ...state,
        posts: state.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
