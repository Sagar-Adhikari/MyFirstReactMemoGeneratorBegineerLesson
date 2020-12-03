import React, { Component } from 'react';

class Formpractise extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',

      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />

          <label>
            Destination:
            <select
              value={this.state.destination}
              name="destination"
              onChange={this.handleChange}
            >
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
              <option value="Nepal">Nepal</option>
            </select>
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.isVegan}
            />
            Vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.isKosher}
            />
            Kosher?
          </label>
          <label>
            <input
              type="checkbox"
              name="islactoseFree"
              onChange={this.handleChange}
              checked={this.isLactoseFree}
            />
            LactoseFree?
          </label>

          <br />

          <button>Submit</button>
        </form>

        <hr />

        <h2>Entered information:</h2>
        <p>
          Your Name: {this.state.firstName}
          {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>

        <p>Your Dietary Restrictions:</p>
        <p> vegan:{this.state.isVegan ? 'yes' : 'NO'}</p>
        <p> Kosher:{this.state.isKosher ? 'yes' : 'NO'}</p>
        <p> Lactose Free:{this.state.isLactoseFree ? 'yes' : 'NO'}</p>
      </main>
    );
  }
}
export default Formpractise;
