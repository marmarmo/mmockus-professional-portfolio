import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import "./ArtWork.css";



function artWorks() {
//   const [works, setWorks] = useState(works[0]);

//   const displayNextWork = () => {
//     if (works.index < works.length - 1) {
//       setWorks(works[works.index + 1]);
//       return;
//     } else {
//       setWorks(works[0]);
//       return;
//     }
//   };
//   const displayPreviousWork = () => {
//     if (works.index > 0) {
//       setWorks(works[works.index - 1]);
//     } else {
//       setWorks(works[works.length - 1]);
//     }
  // };

  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default artWorks;