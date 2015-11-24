describe('Test for Array shallow copy', function() {
    it('arrayShallowCopy should be defined', function() {
        expect((typeof arrayShallowCopy) === 'function').toBe(true);
    });

    it('arrayShallowCopy should perform shallow copy', function() {
    	var array1 = [1,2,3],
    		array2 = [];
        expect(arrayShallowCopy(array1, array2)).toEqual(array1);
    });
    it('arrayShallowCopyModifyFirstArgumentArray should perform shallow copy', function() {
    	var array1 = [1,2,3],
    		array2 = [];
        expect(arrayShallowCopyModifyFirstArgumentArray(array1, array2)).toEqual(array1);
    });

    it('arrayDeepCopy should perform shallow copy', function() {
    	var array1 = [1,2,3],
    		array2 = [];
        expect(arrayDeepCopy(array1, array2)).toEqual(array1);
    });
    it('arrayDeepCopyModifyFirstArgumentArray should perform shallow copy', function() {
    	var array1 = [1,2,3],
    		array2 = [];
        expect(arrayDeepCopyModifyFirstArgumentArray(array1, array2)).not.toEqual(array1);
    });
});
