const flightsModel = require('../models/flight')

module.exports = {
  create
};

async function create(req, res){
	// To find the destination!
	try {
		// req.params.id comes from the http request from the reviews form on the 
		// flight show page (.id name comes from the routes/destination route)
		const flightDoc = await flightsModel.findById(req.params.id)
		// movieDoc is the movie from the database

		// Then add the review to the movie's reviews array
		flightDoc.destination.push(req.body); // add the contents of the review form (req.body),
		// to the reviews array
		// since we're mutating (changing) the movieDoc, we have to tell the database
		await flightDoc.save() // this tells the db we added a review to the movie we found!
		// then respond to the client
		res.redirect(`/flights/${req.params.id}`)
		// this tells the browser to make a get request 
		
		// res.redirect(`/flights/${flightDoc._id}`)

	} catch(err){
		console.log(err)
		res.send(err)
	}
	


}