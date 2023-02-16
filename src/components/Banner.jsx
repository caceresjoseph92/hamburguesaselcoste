import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banners from "../data/banner.json"

const Banner = () => {
  return (    
    <Carousel fade>
      {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100"
              src={banner.image}
              alt={banner.title}
            />
            <Carousel.Caption>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
      ))}   
      </Carousel>

  )
}

export default Banner
