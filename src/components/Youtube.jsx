import React from 'react';

function Youtube () {
  return (
    <div>
      <form>
        <label htmlFor='name'>name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor='email'>email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor='channel'>channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Youtube;
