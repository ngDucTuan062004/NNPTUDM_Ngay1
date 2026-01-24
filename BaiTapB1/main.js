// Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2
const products = [
    new Product(1, "iPhone 15", 32000000, 10, "Smartphone", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 15, "Smartphone", true),
    new Product(3, "MacBook Air M2", 34000000, 5, "Laptop", true),
    new Product(4, "Dell Inspiron 15", 22000000, 0, "Laptop", false),
    new Product(5, "Apple Watch S9", 12000000, 8, "Accessories", true),
    new Product(6, "AirPods Pro 2", 6500000, 0, "Accessories", true)
];

// Cau 3
const nameAndPrice = products.map(function (p) {
    return {
        name: p.name,
        price: p.price
    };
});
console.log("Câu 3:", nameAndPrice);

// Cau 4
const inStockProducts = products.filter(function (p) {
    return p.quantity > 0;
});
console.log("Câu 4:", inStockProducts);

// Cau 5
const hasExpensiveProduct = products.some(function (p) {
    return p.price > 30000000;
});
console.log("Câu 5:", hasExpensiveProduct);

// Cau 6
const accessoriesAvailable = products
    .filter(function (p) {
        return p.category === "Accessories";
    })
    .every(function (p) {
        return p.isAvailable === true;
    });

console.log("Câu 6:", accessoriesAvailable);

// Cau 7
const totalInventoryValue = products.reduce(function (total, p) {
    return total + (p.price * p.quantity);
}, 0);

console.log(
    "Câu 7: Tổng giá trị kho =",
    totalInventoryValue.toLocaleString(),
    "VND"
);

// Cau 8
console.log("Câu 8:");
for (var p of products) {
    var status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(p.name + " - " + p.category + " - " + status);
}

// Cau 9
console.log("Câu 9:");
for (var key in products[0]) {
    console.log(key + ": " + products[0][key]);
}

// Cau 10
const availableProductNames = products
    .filter(function (p) {
        return p.isAvailable === true && p.quantity > 0;
    })
    .map(function (p) {
        return p.name;
    });

console.log("Câu 10:", availableProductNames);
