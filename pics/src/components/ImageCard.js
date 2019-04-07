import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imagref = React.createRef();
    console.log(this.imagref);
  }

  componentDidMount() {
    this.imagref.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const heigth = this.imagref.current.clientHeight;

    const spans = Math.ceil(heigth / 10);

    this.setState({ spans: spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imagref} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
