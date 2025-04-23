import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PostContext = createContext();

function PostProvider({ children }) {
    const [postsData, setPostsData] = useState([]);

    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        axios.get(endpoint)
            .then(res => {
                setPostsData(res.data);
            });
    }, []);

    return (
        <PostContext.Provider value={postsData}>
            {children}
        </PostContext.Provider>
    );

}

function usePost() {
    const postData = useContext(PostContext);
    return postData;
}


export { PostProvider, usePost };