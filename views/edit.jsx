const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="form-group">
      <label htmlFor="name">Place Name</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value={data.place.name} 
      required />
  </div>
  ...
</form>
        </Def>
    )
}

module.exports = edit_form

