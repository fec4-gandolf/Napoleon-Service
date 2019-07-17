import React from 'react';
import Header from './header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlId: window.location.href.substring(26) || 1,
      reviews: []
    };
  }


  componentDidMount() {
    fetch(`/reviews/${this.state.urlId}`)
      .then((data) => data.json())
      .then((results) => {
        this.setState({reviews: results});
        return results;
      })
      .catch((err) => console.log('There was an error'));
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Ratings reviews={this.state.reviews}/>
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
