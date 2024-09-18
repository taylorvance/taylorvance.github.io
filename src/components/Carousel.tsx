import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({children}) => {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const totalChildren = childrenArray.length;

  const clickPrev = () => { setCurrent((i) => (i-1+totalChildren)%totalChildren); }
  const clickNext = () => { setCurrent((i) => (i+1)%totalChildren); }

  const fgNav = 'text-base-300';
  const bgNav = 'from-base-content';

  const arrowCls = `
    absolute top-0 bottom-0
    flex items-center
    cursor-pointer select-none z-10
    ${fgNav} ${bgNav}
    opacity-60 hover:opacity-90
  `;

  return (totalChildren===1 && 
    childrenArray[0] as React.ReactElement
  ) || (
    <div className={`relative overflow-hidden`}>
      {/* media */}
      <div className="flex duration-300" style={{transform:`translateX(-${current*100}%)`}}>
        {childrenArray.map((child, i) => (
          <div key={i} className="flex-shrink-0 w-full flex items-center justify-center">
            {child}
          </div>
        ))}
      </div>

      {/* arrows */}
      <div className={`bg-gradient-to-r pr-2 left-0 ${arrowCls}`} onClick={clickPrev}><FaChevronLeft /></div>
      <div className={`bg-gradient-to-l pl-2 right-0 ${arrowCls}`} onClick={clickNext}><FaChevronRight /></div>

      {/* pagination */}
      <div className="flex gap-px h-5">
        {Array.from({length:totalChildren}).map((_,i) => (
          <div
            key={i}
            className={`
              flex-grow flex items-end justify-center
              cursor-pointer select-none z-20
              ${fgNav} text-sm leading-none
              bg-gradient-to-t ${bgNav}
              opacity-60 ${i===current && 'opacity-80'} hover:opacity-90
            `}
            onClick={()=>setCurrent(i)}
          >{i+1}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
