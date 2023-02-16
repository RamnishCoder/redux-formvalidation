import { posts } from "./Constants"
export const helloRedux=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
res.json().then((data)=>{
    console.log(data);
    return(dispatch)=>{
        dispatch({
            type:"posts",
            payload:data
        })
    }
})
    })
}


