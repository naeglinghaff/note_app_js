// is a string?
  const assert = {
    isString: function(assertionToCheck) {
      if (typeof assertionToCheck !== 'string') {
        throw new Error("Assertation failed: " + assertionToCheck + " is not a string");
      }
    },
    isEqual: function(assertionToCheck) {
      if (assertionToCheck !== "Hello world") {
        throw new Error("Assertion failed " + assertionToCheck + " is not equal");
      }
    },
    returnsValue: function(assertionToCheck) {
      if (assertionToCheck !== assertionToCheck) {
        throw new Error("Assertion failed " + assertionToCheck + " doesn't return a value");
      }
    }
  };
