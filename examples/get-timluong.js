/** My example file for the get function */
var reply = require('./../');

var bye = function(){
  console.log('An error caused me to exit');
}

function get_defaultAnswer() {
  return 'This is the answer you get if you input nothing';
}

var opts = {
  answer1: {
    message: 'This is where you would put your first question'
  },
  timezone: {
    message: 'This is where you would put your secondquestion',
    default: get_defaultAnswer
  }
}

reply.get(opts, function(err, result){
  if (err) return bye();

  console.log(result);
})