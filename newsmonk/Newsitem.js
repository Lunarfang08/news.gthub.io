import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18 rem" }}>
            <img
              src={
                !imageurl
                  ? "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1693824146~exp=1693824746~hmac=3d7de955f8ac88cf0fb4e6c33c2cdf5211dddcc34e4ee1e22b5f5b2f2ba51482"
                  : imageurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsurl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
