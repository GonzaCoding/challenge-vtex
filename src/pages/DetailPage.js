import React from 'react'
import { MovieDetail } from '../components/MovieDetail';
import {useHistory} from 'react-router-dom';

export const DetailPage = ({match}) => {
    const history = useHistory();
    return (
        <div>
            <MovieDetail movieId={match.params.id} />
            <button className="btn-details" onClick={()=>history.goBack()}>Go Back</button>
        </div>
    )
}
