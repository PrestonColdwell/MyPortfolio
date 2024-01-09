import React from "react";

const ExperienceItem = ( {title, description, tools, images} ) => {
  return (
    <div className="text-text">
      <p className="text-2xl border-b-2 w-fit mb-4">{title}</p>
      <p>{description}</p>
      <ul className="flex flex-wrap gap-4">
        {tools.map(tool => {
          return (
            <li key={tool} className="border-2 border-secondary px-2 bg-tertiary">{tool}</li>
          )
        })}
      </ul>
      {images.map(image => {
        return (
          <img key={image} src={image} alt={image} />
        )
      })}
    </div>
  )
}

export default ExperienceItem;