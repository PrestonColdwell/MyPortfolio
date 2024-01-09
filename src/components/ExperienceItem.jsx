import React from "react";

const ExperienceItem = ( {title, description, tools, images, link} ) => {

  return (
    <div className="text-text p-4 border-2 border-secondary rounded-lg mb-8">
      <p className="text-3xl border-b-2 w-fit mb-4">{title}</p>
      <p className="pb-4 text-lg">{description}</p>
      <p className="text-lg">Tech Stack Used:</p>
      <ul className="flex flex-wrap gap-4 pb-4">
        {tools.map(tool => {
          return (
            <li key={tool} className="border-2 border-secondary px-2 bg-tertiary/50">{tool}</li>
          )
        })}
      </ul>
      {link && 
      <p className="text-lg">
        Check it out 
        <span><a className='text-tertiary hover:text-text hover:cursor-pointer' href={link}>here</a></span>
        !
      </p>}
      
      <div className="flex flex-wrap gap-2 pt-4">
        {images.map(image => {
          return (
            <img className='size-[90%] lg:size-[45%] mx-auto' key={image} src={image} alt={image} />
          )
        })}
      </div>
    </div>
  )
}

export default ExperienceItem;