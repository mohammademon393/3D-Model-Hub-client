import React from 'react';
import { Link } from 'react-router';

const FutureModels = ({ models }) => {
    
    
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-center my-5">
        Featured 3D <span className="text-primary">Models</span>
      </h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {models.map((model) => (
          <>
            <div className="card bg-base-100 shadow-md">
              <figure className="p-4">
                <img
                  className="rounded-md h-[250px] w-full"
                  src={model.thumbnail}
                  alt={model.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{model.name}</h2>
                <p>category: {model.category}</p>
                <div className="card-actions">
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='flex justify-center items-center mb-5'>
        <Link className="btn btn-primary " to={"/allModels"}>
          Show All Models
        </Link>
      </div>
    </div>
  );
};

export default FutureModels;