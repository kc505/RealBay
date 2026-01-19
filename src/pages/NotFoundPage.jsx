import { Link } from 'react-router-dom';

export default function NotFoundPage (){
    return <div>Oops! Page not found.
    <Link to="/">Go back to HomePage</Link>
    </div>
}