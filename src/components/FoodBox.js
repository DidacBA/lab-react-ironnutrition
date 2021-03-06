import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
    quantity: 1,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const { addToList } = this.props;
    const foodItem = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.state.quantity,
    };
    addToList(foodItem);
    this.setState({
      quantity: 1,
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
