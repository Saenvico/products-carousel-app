import React, { Fragment, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Card';
import ArrowButton from './ui/ArrowButton';
import { Product } from '../models/models';

const responsive = {
  0: { items: 1 },
  753: { items: 2 },
  1025: { items: 3 },
  1300: { items: 4 },
};

const elementsInScreen =
  window.innerWidth < 753
    ? 1
    : 753 < window.innerWidth && window.innerWidth < 1025
    ? 2
    : 1025 < window.innerWidth && window.innerWidth < 1300
    ? 3
    : 4;

const createItems = (products: Product[], [handleClick]: any) => {
  let deltaX = 0;
  let difference = 0;
  const swipeDelta = 20;

  return products.map((item, i) => (
    <div
      data-value={i + 1}
      className="item"
      onMouseDown={(e) => (deltaX = e.pageX)}
      onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
      onClick={() => difference < swipeDelta && handleClick(i)}
    >
      <span className="item-inner">
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
        ></Card>
      </span>
    </div>
  ));
};

const Carousel: React.FC<{
  products: Product[];
}> = (props) => {
  const { products } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState(createItems(products, [setActiveIndex]));

  const handleOnClickLeft = () => setActiveIndex(activeIndex - 1);
  const handleOnClickRight = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }: { item: any }) => setActiveIndex(item);

  const AliceCarouselComp = (
    <AliceCarousel
      mouseTracking
      disableDotsControls
      disableButtonsControls
      activeIndex={activeIndex}
      responsive={responsive}
      onSlideChanged={syncActiveIndex}
      items={items}
    ></AliceCarousel>
  );

  useEffect(() => {
    setItems(createItems(products, [setActiveIndex]));
  }, [products]);

  return (
    <Fragment>
      <div className="carousel">
        {AliceCarouselComp}
        <div className="arrows_container">
          <ArrowButton
            active={activeIndex > 0}
            side="left"
            onClick={handleOnClickLeft}
          ></ArrowButton>
          <ArrowButton
            active={activeIndex < products.length - 1 - elementsInScreen}
            side="right"
            onClick={handleOnClickRight}
          ></ArrowButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
