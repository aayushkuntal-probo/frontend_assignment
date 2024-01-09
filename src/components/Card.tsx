import { Link } from 'react-router-dom';
import './Card.css'
import {PostInterface} from '../types/index';

const Card = ({ data }: { data: PostInterface }) => {
    return (
        <div className="card">
            <h2 className="heading">{data.title}</h2>
            <div className="body">{data.body.substring(0,150)} ....</div>
            <br />

            <div className="footer">{data.userId}</div>
            <Link to={`/${data.id}`}>Read More...</Link>
        </div>
    )
}

export default Card