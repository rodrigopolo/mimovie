var	child = require("child_process"),
	split = require("split"),
	listener;

module.exports = function(input, cb){
	var
		rv=[],
		chd,
		args=[];

	// Inform template
	args.push('--Inform=file://'+__dirname+'/media_json.txt'.replace(/\\/g, '/'));

	// Files
	if(typeof(input)=='string'){
		args.push(input);
	}
	if(typeof(input)=='object'){
		args = args.concat(input);
	}

	// Run mediainfo
	var cli = child.spawn(
		'mediainfo', args,[]
	);

	// Stream stdout
	cli.stdout.pipe(split(/((?:\r?\n){3})/)).on('data', function (data) {
		chd='';
		try {
			chd=JSON.parse(data.replace(/\\/g, '/'));
		} catch (e) {
			//cb(e,null);
		}
		if(typeof(chd)=='object'){
			rv.push(chd);
		}
	});

	// When mediainfo finish
	cli.on('close', function (code) {
		process.removeListener('exit', cliexit);
		if(code == -2){
			cb('Cannot run mediainfo.', null);
		}else if(code == 255){
			cb('At last one input file is needed.', null);
		}else if (code !== 0) {
			cb('Error trying to get the file details.', null);
		}else{
			if(rv.length<2){
				cb(null, rv[0]);
			}else{
				cb(null, rv);
			}
		}
	});

	function cliexit() {
		cli.kill();
	}

	// Terminate mediainfo on exit
	if(!listener) {
		listener = process.on('exit', cliexit);
  }

};

