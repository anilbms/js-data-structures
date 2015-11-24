function arrayShallowCopy (array1, array2) {
	// shallow copy
	array2 = array1;
	return array2;
}

function arrayShallowCopyModifyFirstArgumentArray (array1, array2) {
	// shallow copy
	array2 = array1;

	array1.push(7);
	console.log("shallow copy array 1",array1);
	console.log("shallow copy array 2", array2);
	return array2;
}


function arrayDeepCopy (array1, array2) {
	for (var i = array1.length - 1; i >= 0; i--) {
		array2[i] = array1[i];
	}

	return array2;
}


function arrayDeepCopyModifyFirstArgumentArray (array1, array2) {
	
	for (var i = array1.length - 1; i >= 0; i--) {
		array2[i] = array1[i];
	}

	array1.push(7);
	console.log("deep copy array 1",array1);
	console.log("deep copy array 2", array2);
	return array2;
}
