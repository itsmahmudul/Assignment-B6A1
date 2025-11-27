const getUniqueValues = (
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] => {
  const result: (number | string)[] = [];

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    if (value !== undefined && !result.includes(value)) {
      result.push(value);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    if (value !== undefined && !result.includes(value)) {
      result.push(value);
    }
  }

  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));
