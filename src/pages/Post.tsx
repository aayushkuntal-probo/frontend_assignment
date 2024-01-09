import { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';
import {PostInterface,Comment} from '../types/index';
import './Post.css';

export const Post = () => {
    const { id } = useParams<{ id: string }>();
    const [posts, setPost] = useState<PostInterface | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const postData = await axios.get(`https://dummyjson.com/posts/${id}`);
                const commentsData = await axios.get(`https://dummyjson.com/posts/${id}/comments`);

                setPost(postData.data);
                setComments(commentsData.data.comments);

            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchPostData();
    }, [id]);

    return (
        <div className="post_container">
            <div className="heading">Post: {id}</div>
            <div>{posts?.title}</div>
            <div>{posts?.body}</div>

            <div className="comments">
                <div className="comment_heading">Comments:</div>
                <div>
                    {comments && comments.map((comment: Comment) => (
                        <div className="comment" key={comment.id}>
                            <div style={{fontWeight:"bold"}}>{comment.user.username}</div>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
