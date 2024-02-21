const flightsModel = require('../models/flight')

module.exports = {
    index,
	newflight,
	create
}

async function index(req, res){
	
	// then we want to send a ejs page with all the flights to the browser
	try {
		const flightsDocumentsFromTheDB = await flightsModel.find({})
		console.log(flightsDocumentsFromTheDB)
		// then we want to send a ejs page with all the flights to the browser
		// flight/index is looking in the views folder for the ejs page
		res.render('flights/index', {flightsDocs: flightsDocumentsFromTheDB})
		// flightsDocs is now a variables inside of views/flights/index.ejs 
	} catch(err){
		console.log(err)
		res.redirect('/')
	}
}



function newflight(req, res){

	res.render('flights/new')
}


async function create(req, res){
	console.log(req.body, " <- is the contents of our form!")
	

	try {
		// await says, wait for the model to finish going to mongodb
		// atlas and coming back before you run the code after it!

		// ONLY USE AWAIT ON YOUR MODEL QUERY! for right now
		const createdFlightsDoc = await flightsModel.create(req.body);
		console.log(createdFlightsDoc)
		// for now redirect to new page
		res.redirect('/flights/new')
	} catch(err){
		console.log(err)
		res.redirect('/flights/new')
	}
}

