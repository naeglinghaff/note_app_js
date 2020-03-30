// is a string?
  const assert = {
    isString: function(assertionToCheck) {
      if (typeof assertionToCheck !== 'string') {
        throw new Error("Assertation failed: " + assertionToCheck + " is not a string");
      } else {
        console.log("Test passes");
    }
    },
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed " + assertionToCheck + " is not true");
      } else {
        console.log("Test passes");
    }
  }
}
