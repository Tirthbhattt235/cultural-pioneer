import React, { useRef, useEffect, useState } from 'react';

const InViewChecker = ({ children, threshold = 0.5 }) => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return <div ref={targetRef}>{children(inView)}</div>;
};

// Example usage:
const App = () => {
  return (
    <InViewChecker threshold={0.5}>
      {(inView) => (
        <div>
          <p>{inView ? 'Child is in view!' : 'Child is not in view.'}</p>
          {/* Your other components or content */}
        </div>
      )}
    </InViewChecker>
  );
};

export default App;
