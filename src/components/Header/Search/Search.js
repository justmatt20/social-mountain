import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super() 
    this.state = {
      data: ''
    }
  }

  handleChange = (e) => {
    this.setState({data: e.target.value})
  }

  render() {
  //   const filteredPosts = this.data.filter((data) => {return this.data.indexOf(0)}
  // )
    return (
      <section className="Search__parent">
        

        <div className="Search__content">
          <input value={this.state.data} onChange={this.handleChange}placeholder="Search Your Feed" ></input>

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}
