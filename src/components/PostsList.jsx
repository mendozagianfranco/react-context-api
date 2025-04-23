import { useContext } from 'react';
import PostContext from '../contexts/PostContext';
import PostCard from './PostCard';

export default function PostsList() {
    const postsData = useContext(PostContext);
    return (
        <ul>
            {postsData.map(post => <li key={post.id}>
                <PostCard id={post.id} title={post.title} body={post.body} />
            </li>)}
        </ul>
    );
}