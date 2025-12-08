import React from 'react';
import { useLoaderData } from 'react-router';

const ModelsCard = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <h2>models card</h2>
        </div>
    );
};

export default ModelsCard;