// LazyLoadComponent.jsx
import React, { useRef, useEffect } from 'react';

const   LazyLoadComponent = ({ children, onIntersection, className }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersection(); // Call a function to load content
          observer.unobserve(entry.target);
        }
      });
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [onIntersection]);

  return  <div className={className} ref={elementRef} >{children}</div>;
};
export default LazyLoadComponent;
