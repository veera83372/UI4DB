const errorMessage = function(errorCode) {
  let errors = {
    '3D000':'database of given name doesnot exists'
  };
  return errors[errorCode] || 'unidentified error';
};

const getConnectingString = function(req) {
  let host = req.body.host||'127.0.0.1';
  let port = req.body.port||5432;
  let db = req.body.db||'postgres';
  let password = req.body.password||null;
  return `postgres://${host}:${port}/${db}`;
};

const connectDb = function(req,res) {
  let pg = req.app.pg;
  let connectingString = getConnectingString(req);
  let client = new pg.Client(connectingString);
  let connectionProm = client.connect();
  connectionProm.then(function(response){
    console.log(response);
    res.send('success');
  }).catch(function(error){
    console.log(error.code);
    res.statusCode = 400;
    res.send(errorMessage(error.code));
  });
};
module.exports = connectDb;
