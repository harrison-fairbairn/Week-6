var expect = chai.expect;

describe ("War.Js test", function() {
    describe('lotocards', function() {
      it('Will add a card to a user(s) turns', function() {
        const arrayisempty = aUsersturns.length == 0;
        expect(arrayisempty).to.equal(true); 
        lotocards();
        expect(arrayisempty).to.equal(false);
      })  
    })
    describe("If Equal", function() {
    })
    describe("Check Score", function() {

    })
    describe("Get card Number", function() {
        it("should return a number between 1 and 14", function() {
           const output = getCardNumber();
           expect(output > 0 && output <= 14).to.equal(true);
           
        })
    })
})