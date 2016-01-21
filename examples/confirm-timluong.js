/** My example file for the confirm function */
var reply = require('./../');

reply.confirm('Do you understand how this works?', function(err, yes){

  if (!err && yes)
    console.log("Great!");
  else
    console.log("NO? WHY... IT'S SO STRAIGHT FORWARD!");

});
