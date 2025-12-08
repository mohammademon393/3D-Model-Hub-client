import React from 'react';

const ModelsCard = ({ model }) => {
    const {name, category, thumbnail, description} = model;
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="p-4">
        <img
          className="rounded-md h-[250px] w-full"
          src={thumbnail}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>category: {category}</p>
        <div className="card-actions">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;