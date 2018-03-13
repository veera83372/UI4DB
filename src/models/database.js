class Database{
  constructor(pg){
    this.pg = pg;
    this.client = {};
  }
  connectTo(connectingString,resCall,rejCall){
    this.client = new this.pg.Client(connectingString);
    let promise = this.client.connect();
    promise.then(function(){
      resCall();
    }).catch(function(error){
      rejCall(error)
    });
  }
  disconnect(){
    this.client.end();
  }
}
module.exports = Database;