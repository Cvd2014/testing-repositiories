describe("function to check drinks by age", function(){
  //case 1//
  it ('should have a defined function', function(){
      expect(drinks).toBeDefined();
  });
  //case 2//
  it('should return a string',function(){
    expect(typeof(drinks())).toEqual('string');
  });
 //case3//
  it("should take age as sole parameter", function(){
    expect(drinks.length).toEqual(1); 
  });
//case 4//
it("should check age for less than 14 return toddy", function(){
  expect(drinks (13)).toEqual("Toddy");
});
it("should check age between 14 and 18 return Coke", function(){
  expect(drinks (17)).toEqual("Coke");
});
it("should check age for less than 21 return Beer", function(){
  expect(drinks (20)).toEqual("Beer");
})
it("should check age for over 30 and return Whiskey", function(){
  expect(drinks(30)).toEqual('Whiskey');
})

//case 5//
it ("should make sure a string age is also accepted", function(){
  expect(drinks('14')).toEqual('Coke');
});

  });