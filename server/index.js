import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";



mongoose
	.connect('mongodb+srv://PlatenPrime:wwwwww@cluster0.aq7u1ft.mongodb.net/?retryWrites=true&w=majority')
	.then(() => console.log("DB OK"))
	.catch((err) => console.log("DB error", err));


const app = express();


app.use(express.json());



app.post('/auth/register', (req, res) => {

});



app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	}

	console.log('Server OK');
});