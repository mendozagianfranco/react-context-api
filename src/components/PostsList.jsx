import PostCard from './PostCard';
import { usePost } from '../contexts/PostContext';

export default function PostsList() {
    const postsData = usePost();
    return (
        <ul>
            {postsData.map(post => <li key={post.id}>
                <PostCard id={post.id} title={post.title} body={post.body} />
            </li>)}
        </ul>
    );
}