const isEnoughCapacity = (products, containerSize) => {
    if (
        typeof products !== "object" ||
        products == null ||
        Array.isArray(products)
    ) {
        throw new Error("Expected an object for products");
    }

    if (typeof containerSize !== "number") {
        throw new Error("Expected a number for containerSize");
    }

    const totalProducts = Object.values(products).reduce((a, b) => a + b, 0);
    return totalProducts <= containerSize;
};

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
