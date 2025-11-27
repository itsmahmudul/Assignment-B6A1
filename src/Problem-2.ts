const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
};

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));