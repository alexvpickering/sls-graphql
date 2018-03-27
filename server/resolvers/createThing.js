var uuid = require('uuid');
import docClient from '../utils/docClient'

function saveThing(thingOne, thingTwo){

  var params = {
    TableName:'Things',
    Item:{
      "id": uuid.v4(),
      "one": thingOne,
      "two": thingTwo
    }
  };
  
  return docClient.put(params).promise();
}


module.exports = saveThing;