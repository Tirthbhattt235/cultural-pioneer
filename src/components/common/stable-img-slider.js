import { useState, useEffect } from 'react';

const ImageSlider = ({ imageComponents }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index and loop back to the first image if it exceeds the array length
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageComponents.length);
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [imageComponents]); // Include 'imageComponents' in the dependency array to update the interval when components change

  return (
    <div>
      {imageComponents[currentImageIndex]}
    </div>
  );
};

export default ImageSlider;
