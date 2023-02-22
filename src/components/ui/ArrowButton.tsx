const ArrowButton = (props: any) => {
  const arrowSide =
    props.side === 'left' ? 'arrow__inside--left' : 'arrow__inside--right';

  return (
    <div
      onClick={props.onClick}
      className={props.active ? 'arrow' : 'arrow arrow--disabled'}
    >
      <div
        className={
          props.active
            ? `arrow__inside ${arrowSide}`
            : `arrow__inside ${arrowSide} arrow__inside--disabled`
        }
      ></div>
    </div>
  );
};

export default ArrowButton;
