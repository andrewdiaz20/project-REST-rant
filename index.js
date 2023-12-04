// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)

let placesFormatted = data.places.map((place, index) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/places/${index}`} >
          {place.name}
        </a>
      </h2>
      <p className="text-center">
        {place.cuisines}
      </p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
      <a href="" className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action=""> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
 


    </div>
  )
})
