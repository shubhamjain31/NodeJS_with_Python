const spawn = require("child_process").spawn;

const pythonProcess = spawn("python3", ["data_response.py"]);
pythonProcess.stdout.on('data', (data) => {

	// convert string to json
	mystr = data.toString();

	// convert string into json
	myjson = JSON.parse(mystr);
	console.log(`Json is: $(myjson)`);
	console.log(myjson.Data);

})


// run command : node index.js