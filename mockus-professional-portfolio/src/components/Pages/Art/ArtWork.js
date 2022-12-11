import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./ArtWork.css";





export default function artWorks() {

  return (
    <>
    <Carousel className="photo-carousel carousel slide carousel-fade" data-mdb-ride="carousel">
      

 {/* Sculpture Ceramics */}
 <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/alien.jpg"
          alt="Ceramic Alien"
        />
        <Carousel.Caption>
          <h3>Alien Child</h3>
          <p>I made this sculpture while attending Santa Barbara City College. He was the biggest sculpture I had done and am very proud of this piece. He has lost a couple toes over the past years, but is still in great shape. I coil rolled the entire piece, and then added a lot of finer detail, all made out of clay. He is inspired by one of HR Gigers sculptures from the 'Alien' Franchise.</p>
        </Carousel.Caption>
      </Carousel.Item>

 <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/atlantian.jpg"
          alt="Ceramic Alien"
        />
        <Carousel.Caption>
          <h3>Atlantian Child</h3>
          <p>I made the Atlantian while attending Santa Barbara City College. He was my thrid large sculptural piece.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Bunny Ceramics */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/bunnyhead.jpeg"
          alt="Ceramic Bunny"
        />
        <Carousel.Caption>
          <h3>Bunny Beginnings</h3>
          <p>I made this little bunny bowl for the little girl I nanny who was turning 2! Started by pinching a bunny head like shape, adding ears, and carving out facial features.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/bunny.jpeg"
          alt="Ceramic Bunny"
        />
        <Carousel.Caption>
          <h3>Bunny Body</h3>
          <p>I then threw two small bowl shapes that were the same width, and added those together to make the egg shape for the bunny body.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/bunnybowl.jpeg"
          alt="Ceramic Bunny"
        />
        <Carousel.Caption>
          <h3>Bunny Before Firing</h3>
          <p>is is the completed bunny bowl before she went into the kiln for the first firing.</p>
        </Carousel.Caption>
      </Carousel.Item>


    {/* Heads Ceramics */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/headseggs.jpeg"
          alt="Ceramic Heads"
        />
        <Carousel.Caption>
          <h3>The Beginnings of Heads</h3>
          <p>To make a set of three different charactorized heads, i started by throwing six different bowls, matching them up in size in pairs of two, and then attaching the bowls to make an egg shaped head.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/headmr.jpeg"
          alt="Ceramic Heads"
        />
        <Carousel.Caption>
          <h3>The Mr. Head</h3>
          <p>This is the largest, and father like figure of the three heads.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/headstwo.jpeg"
          alt="Ceramic Heads"
        />
        <Carousel.Caption>
          <h3>The Mrs. and Baby Head</h3>
          <p>Here are the other head figures, which I felt took on the mother and child lie archetype.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/heads.jpeg"
          alt="Ceramic Heads"
        />
        <Carousel.Caption>
          <h3>The Family of Heads</h3>
          <p>Here are all three heads while drying before going into their first firing!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/headsglazed.jpg"
          alt="Ceramic Heads"
        />
        <Carousel.Caption>
          <h3>The Family of Heads</h3>
          <p>The finished and glazed head family.</p>
        </Carousel.Caption>
      </Carousel.Item>

    {/* Brains Ceramics */}
    <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/brainprocess.jpeg"
          alt="Brain Army"
        />
        <Carousel.Caption>
          <h3>The Brain Beginnings</h3>
          <p>
            After creating brains out of clay by pinching the shape, and adding a brain like texture, I then found figureines at a local thrift store, and cut their heads off. After the brains were bisque fired, I atttached the brains to the figures bodies to try and create a brain army.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/brainarmy.jpeg"
          alt="Brain Army"
        />
        <Carousel.Caption>
          <h3>The Brain Army</h3>
          <p>
            Pictured is one way I displayed the brain army. I ended up spray painting the army all silver to make the piece more cohesive.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/brains.jpeg"
          alt="Brain Army"
        />
        <Carousel.Caption>
          <h3>The Brains</h3>
          <p>
            I then sold the brains invividualy at an art show in Santa Barabara, CA.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Squid Ceramics */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/lady.jpeg"
          alt="Brain Army"
        />
        <Carousel.Caption>
          <h3>The Squid Lady</h3>
          <p>
            This is the second very large piece in a series of squid like textural play. She was a self sculpture with squid like tenticle horns, as well as a view from the back that resmbled an elephant. I got a lot of inspiration for this piece from The Diva from the movie The Fifth Element.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/squid.jpeg"
          alt="Squid Sculpture"
        />
        <Carousel.Caption>
          <h3>Squid The Second</h3>
          <p>
            When I was in college I made a squid sculpture that eventually broke. In 2022 I wanted to create a more simplified version of the original squid. This is before she went into her first firing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/squidme.jpeg"
          alt="Squid Sculpture"
        />
        <Carousel.Caption>
          <h3>Squid The Second</h3>
          <p>
            Here is the finsihed squid sculpture that we now have at home display. Covered in clay is my happy place.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Ceramic throwing */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/images/Ceramics/wheel.jpeg"
          alt="Ceramic Wheel"
        />
        <Carousel.Caption>
          <h3>Throwing</h3>
          <p>
            To create most of my sculptures, the bodies either start on the wheel, or I coil build the clay. The smaller sculptures, like the heads and bunny are easiest when started on the wheel to give them a nice sturdy base to work off of.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Ceramics/cups.jpeg"
          alt="Ceramic Mugs"
        />
        <Carousel.Caption>
          <h3>Ceramic Mugs</h3>
          <p>
            I also love to make big mugs. Drinking tea, coffee, or whatever warm beverage you prefer out of a handmade mug just has something even more magical to it. This is the middle of the process after trimming, but before attaching the handles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
