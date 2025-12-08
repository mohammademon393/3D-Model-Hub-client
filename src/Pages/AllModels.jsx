import React from 'react';
import ModelsCard from '../Components/AMComponents/ModelsCard';
import { useLoaderData } from 'react-router';

const AllModels = () => {
    const promise =  useLoaderData();
    return (
      <div>
        <h2 className="font-bold text-3xl text-center my-5">
          <span className="text-primary">All</span> Models
        </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {promise.map((model) => (
            <ModelsCard model={model} key={model._id}></ModelsCard>
          ))}
        </div>
      </div>
    );
};

export default AllModels;