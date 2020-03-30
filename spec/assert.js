// is a string?
  const assert = {
    isString: function(assertionToCheck) {
      if (typeof assertionToCheck !== 'string') {
        throw new Error("Assertation failed: " + assertionToCheck + " is not a string");
      }
    }
  };
