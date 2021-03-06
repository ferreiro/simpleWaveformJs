var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

const precision = 10;

var getWaveform = function(input, callback) {
  exec('ffprobe -show_streams "' + input + '"', function(err, stdout, stderr) {
    if (err) {
      console.log('Error when gettin duration', err);
      return callback();
    }

    var durationRegex = /duration=(.*)/i

    if (durationRegex.test(stdout)) {
      var duration = parseInt(durationRegex.exec(stdout)[1]);
      var width = precision * duration;
      var samplejson = path.join(__dirname, 'sample' + Math.random().toString(36).substring(7) + '.json');
      var args = ['-i', "'" + input + "'", '-o', samplejson, '--pixels-per-second', precision.toString(), '-w', width.toString()];

      exec('audiowaveform ' + args.join(' '), function(err, stdout, stderr) {
        if (err || stderr) {
          console.log('Error when generating waveform', err, stderr);
          return callback();
        }

        
        fs.readFile(samplejson, function(err, data) {
          if (err) {
            console.log('Error when reading file');
            return callback();
          }
          
          var jsonOutput = JSON.parse(data).data;
          fs.unlink(samplejson, (err) => {
            if (err)
              console.log('Error when deleting sample.json',err);
          });
          var output = [];
          for (var i = 0; i < jsonOutput.length; i+=2) {
            output.push(jsonOutput[i]);
          }
          var min = Math.min(...output);
          var max = Math.max(...output);

          for(var i = 0; i < output.length; i++) {
            output[i] = parseFloat((1 - ((output[i] - min) / (max - min))).toFixed(3));
          }

          return callback(output);
        });
      });
    }
  });
}

exports.getWaveform = getWaveform;
