if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      it("should respect equality", function(){
        chai.assert.equal(5,6);
      });
    });
  });
    MochaWeb.testOnly(function(){
    describe("a", function(){
      it("should respect equality", function(){
        chai.assert.equal(5,5);
      });
    });
  });
}
