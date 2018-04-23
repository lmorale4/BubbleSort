describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles single items', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles multiple items', function() {
    expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3]);
    expect( bubbleSort( [9, 3, 6, 2, 7, 8]) ).toEqual( [2, 3, 6, 7, 8, 9]);
  });

  it('counts number of swaps', function() {
    var sorted = bubblSort([3, 2, 1]);
    expect( swap.calls.count() ).toEqual(3);
  })
});
