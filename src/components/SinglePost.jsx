import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SinglePost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    function getPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
            });
    }

    useEffect(getPost, []);

    if (loading) {
        return <div>Caricamento</div>;
    }

    return (
        <div>
            <h1>Post con ID:{post.id}</h1>
            <p>{post.body}</p>
        </div>
    );
}