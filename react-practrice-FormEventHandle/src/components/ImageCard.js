import React from 'react'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state={span:0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => { 
        let cHeight= this.imageRef.current.clientHeight;
        let span = Math.ceil(cHeight / 10);
        this.setState({span:span});
    }
    render(){
        const { description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}} >
              <img 
              ref = {this.imageRef}
              src={urls.regular} 
              alt={description}
              />
            </div>
          )
    }
}

export default ImageCard

