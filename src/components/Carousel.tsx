import { Component, MouseEvent } from "react";

interface IProps {
  images: string[]
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //We are define that is a MouseEvent from React that comes from an HTML element
  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    //We will verify if the e.target us an HTMLElement
    if (!(e.target instanceof HTMLElement)) return;

    //All HTML elmenets have a dataset object but we need to verify that if there is an index property init
    if (e.target.dataset.index) {
      this.setState({
        active: +e.target.dataset.index,
      });
    }

  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              data-index={index}
              key={photo}
              onClick={this.handleIndexClick}
              src={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
