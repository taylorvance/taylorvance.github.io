import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({id, title, children}) => {
  return (
    <section id={id}>
      {title && <h1 className="text-4xl font-bold pb-8">{title}</h1>}
      {children}
    </section>
  );
}

export default Section;
