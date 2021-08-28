import React, { Component } from "react";

class NavPixa extends Component {

  searchRef = React.createRef();
  sortRef = React.createRef();

  searchClick = () => {
    let searchQ = this.searchRef.current.value;
    let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${searchQ}&image_type=photo&pretty=true`;
    this.props.doApi(url);

  }

  sortPicsSelect = () => {
    let sortSelect = this.sortRef.current.value;
    this.props.sortBy(sortSelect)
  }

  render() {
    return (
      <nav className="bg-dark container-fluid p-3">
        <div className="container ">
          <div className="row align-items-center">
            <div className="nav col">
              <a href="#">Home</a>
              <a href="#">Exchange</a>
            </div>
            <div className="search col-3 d-flex justify-content-end p-0">
              <select onChange={this.sortPicsSelect} ref={this.sortRef} className="form-select w-50"> 
                <option value="id">Sorty by...</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
                <option value="previewURL">date</option>
              </select>
            </div>
            <div className="search col-3 d-flex justify-content-end ">
              <input ref={this.searchRef} type="search" className="form-control " />
              <button onClick={this.searchClick} className=" btn btn-warning">Search</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavPixa;