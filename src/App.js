import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Stars from "./components/Stars"; 
import Review from "./components/Review"; 



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <Stars/>
        <Review/>
      </div>
    );
  }
}

export default App;