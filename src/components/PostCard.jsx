import { Link } from 'react-router-dom';
export default function PostCard({ title, body, id }) {
    return (
        <div className='card-post'>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>ID del post: {id}</Link>
        </div>
    );
}