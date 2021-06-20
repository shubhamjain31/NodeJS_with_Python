const express 	= require('express')
const app 		= express()
// let http 		= require('http').Server(app)


app.use(express.static('public'))

// http.listen(3000, () => {
// 	console.log('App is running')
// })