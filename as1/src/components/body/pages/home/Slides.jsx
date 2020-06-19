import React from 'react';
import { Slide } from 'react-slideshow-image';


import slider_1 from '../../../../img/slider_1.jpg';
import slider_2 from '../../../../img/slider_2.jpg';
import slider_3 from '../../../../img/slider_3.jpg';

const slides = [
    {
      img: slider_1,
      title: "Tradycyjnie!",
      description: "Masz możliwość samemu wyciąć choinkę z plantacji.",
      textColor: "#FFF"
    },
    {
      img: slider_2,
      title: "Otwarte przez 24h!",
      description: "Posiadamy 5 stoisk otwartych przez całą dobę.",
      textColor: "#FFF"
    },
    {
      img: slider_3,
      title: "Sprzedaż hurtowa!",
      description: "Nasze choinki są dostępne równierz w ilościach hurtowych w niższej cenie.",
      textColor: "#FFF"
    }
  ],
  properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  },
  SlideItem = (props) => {
    const {img, title, description, textColor} = props.dataItem;
    return <div className="home_slider_item">
    <div style={{'backgroundImage': `url(${img})`}}>
      <div className="home_slider_item_content" style={{color: textColor}}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>;
  },
  Slides = () => {
    return (
        <Slide {...properties}>
          {
            slides.map((dataItem, index) => <SlideItem dataItem={dataItem} key={`slider_key_random_${index}`} />)
          }
        </Slide>
    )
  };

export default Slides;
