import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: '',
      bottomText: '',
      randomImg:
        'http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png',
      allMemeImgs: [],
    };

    ///if arrow function is used then no need to write this binding function as...
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log('meme::', memes);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange=(event)=>{
    console.log('event', event);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log('submit is clicked');
    event.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randImg = this.state.allMemeImgs[randNum].url
    console.log('randIMg:',randImg)
    this.setState({
        randomImg:randImg
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>

        <div className="random-img">
          <img className="random-img" src={this.state.randomImg} alt="" />

          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
