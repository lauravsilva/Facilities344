var url = 'https://facilities344.herokuapp.com';
var expect = require('expect.js');
var request = require('supertest')(url);

describe("Get Requests", function() {
	describe("Good Input", function() {
		it("Get user by email", function(done) {
			var req = request.get("/useremail?email=user@example.com");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("37feb57ac")
				done();	
			});
		}),
		it("Get user by id", function(done) {
			var req = request.get("/userid?id=3");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("1234abcd");
				done();
			});
		}),
		it("Get instructor by class id", function(done) {
			var req = request.get("/instructorclassid?id=1");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("DepartmentID: 1");
				done();
			});
		}),
		it("Get homepage", function(done) {
			var req = request.get("/");
			req.end(function(err,res){
				if(err){
					throw err;
				};	
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		});
	}),
	describe("Bad format", function(){
		it("Get user by email bad format", function(done) {
			var req = request.get("/useremail?email=example");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		}),
		it("Get user by id bad format", function(done) {
			var req = request.get("/userid?id=string");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		}),
		it("Get instructor by id bad format", function(done) {
			var req = request.get("/instructorclassid?id=string");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		});
	}),
	describe("Non-existent input", function(){
		it("Get user by email bad format", function(done) {
			var req = request.get("/useremail?email=hello@google.gov");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		}),
		it("Get user by id bad format", function(done) {
			var req = request.get("/userid?id=123456");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		}),
		it("Get instructor by id bad format", function(done) {
			var req = request.get("/instructorclassid?id=123456");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		});
	}),
	describe("Whitespace input", function(){
//		it("Get user by email bad format", function(done) {
//			var req = request.get("/useremail?email=  ");
//			req.end(function(err,res){
//				if(err){
//					throw err;
//				}
//				expect(res.text).to.contain("Get User By Email:");
//				done();
//			});
//		}),
		it("Get user by id bad format", function(done) {
			var req = request.get("/userid?id=  ");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		}),
		it("Get instructor by id bad format", function(done) {
			var req = request.get("/instructorclassid?id=  ");
			req.end(function(err,res){
				if(err){
					throw err;
				}
				expect(res.text).to.contain("Get User By Email:");
				done();
			});
		});
	})
});