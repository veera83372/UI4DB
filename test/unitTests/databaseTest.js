const path = require('path');
const Database = require(path.resolve('src/models/database.js'));
const pg = require('pg');
const assert = require('chai').assert;

describe('Database',function(){
  const assertShouldFail = function(assert,db,done){
    assert.isOk(false);
    db.disconnect();
    done();
  }
  let db;
  beforeEach(function(){
    db = new Database(pg);
  });
  describe('connectTo',function(){
    it('should call resolve callback function on successfull connection',function(done){
      let db = new Database(pg);
      let resCall = () =>{
        assert.isOk(true);
        db.disconnect();
        done();
      }
      let rejCall = () =>{assertShouldFail(assert,db,done)};
      let connectingString = 'postgres://127.0.0.1:5432/ui4db';
      db.connectTo(connectingString,resCall,rejCall);
    });
    it('should call reject db connection with database doesnot exists callback on wrongh db name in connecting string',function(done){
      let db = new Database(pg);
      let resCall = () =>{assertShouldFail(assert,db,done)};
      let rejCall = (error) =>{
        assert.match(error.message,/"badDb" does not exist/);
        assert.equal(error.code,'3D000');
        db.disconnect();
        done();
      }
      let connectingString = 'postgres://127.0.0.1:5432/badDb';
      db.connectTo(connectingString,resCall,rejCall);
    });
    it('should call reject database connection on wrongh port in connecting string',function(done){
      let db = new Database(pg);
      let resCall = () =>{assertShouldFail(assert,db,done)};
      let rejCall = (error) =>{
        assert.equal(error.code,'ECONNREFUSED');
        db.disconnect();
        done();
      }
      let connectingString = 'postgres://127.0.0.1:5435/ui4db';
      db.connectTo(connectingString,resCall,rejCall);
    });
    it('should call reject database connection on wrongh host name in connecting string',function(done){
      let db = new Database(pg);
      let resCall = () =>{assertShouldFail(assert,db,done)};
      let rejCall = (error) =>{
        // assert.equal(error.code,'ECONNREFUSED');
        console.log(error)
        db.disconnect();
        done();
      }
      let connectingString = 'postgres://badHost:5435/ui4db';
      db.connectTo(connectingString,resCall,rejCall);
    });
  });
});