const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
  <div>
    <label>Place Name</label>
    <input />
  </div>
</form>

          </main>
        </Def>
    )
}

module.exports = new_form


module.exports = new_form
