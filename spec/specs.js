describe('factorial', function() {
    it("returns 120 for factorial 5", function() {
        expect(factorial(5)).to.equal(120);
    });

    it("returns 1 for factorial 0", function() {
        expect(factorial(0)).to.equal(1);
    });
});
