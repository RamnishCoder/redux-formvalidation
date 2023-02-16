import { posts } from "./Constants";
const initialState = {
  postData: "no data",
}
export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case posts:
        console.log(action)
      return {
        ...state,
        postData: action.data,
      }
    default:
      return state;
  }
}
