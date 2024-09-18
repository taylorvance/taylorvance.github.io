import React from 'react';
import Carousel from './Carousel';

interface ProjectProps {
  title: string;
  description: string;
  technical?: string;
  url?: string;
  source?: string;
  media?: { type: string; src: string }[];
  links?: { name: string; url: string }[];
  tags?: string[];
}

const Project: React.FC<ProjectProps> = ({title, description, technical, url, source, media, links, tags}) => {
  return (
    <div className="card card-compact bg-primary-content w-full max-w-md">
      <div className="card-body">
        <div className="flex justify-between">
          <h3 className="card-title">{title}</h3>
          <div className="card-actions">
            {url && <a href={url} className="btn btn-xs btn-outline btn-primary">Try it</a>}
            {source && <a href={source} className="btn btn-xs btn-outline btn-info">Source</a>}
          </div>
        </div>

        <p>{description}</p>
      </div>

      {media && (
        <figure>
          <Carousel>
            {media.map((medium, i) => 
              medium.type==='img' && (
                <img key={i} src={medium.src} className="max-h-48" />
              ) || medium.type==='iframe' && (
                <iframe key={i} src={medium.src} width="100%" height="350" scrolling="no" frameBorder="no" allow="autoplay" seamless />
              )
            )}
          </Carousel>
        </figure>
      )}

      <div className="card-body">
        <p className="text-sm text-neutral">{technical}</p>

        {links && (
          <div className="card-actions">
            {links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-xs">{link.name}</a>)}
          </div>
        )}

        {tags && (
          <div className="card-actions">
            {tags.map((tag) => <div key={tag} className={`select-none cursor-default badge badge-sm badge-accent badge-outline`}>{tag}</div>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
