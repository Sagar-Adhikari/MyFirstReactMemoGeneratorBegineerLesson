import React from 'react'

function FormComponent(props) {
  console.log('props',props)
  return (
    <main>
      <form >
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === 'male'}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === 'female'}
            onChange={props.handleChange}
          />
          Female
        </label>

        <br />

        <label>
          Destination:
          <select
            value={props.data.destination}
            name="destination"
            onChange={props.handleChange}
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
            onChange={props.handleChange} 
            checked={props.data.isVegan}
          />
          Vegan?
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          Kosher?
        </label>
        <label>
          <input
            type="checkbox"
            name="islactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          LactoseFree?
        </label>

        <br />

        <button>Submit</button>
      </form>

      <hr />

      <h2>Entered information:</h2>
      <p>
        Your Name: {props.data.firstName}
        {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>

      <p>Your Dietary Restrictions:</p>
      <p> vegan:{props.data.isVegan ? 'yes' : 'NO'}</p>
      <p> Kosher:{props.data.isKosher ? 'yes' : 'NO'}</p>
      <p> Lactose Free:{props.data.isLactoseFree ? 'yes' : 'NO'}</p>
    </main>
  );
}
export default FormComponent
