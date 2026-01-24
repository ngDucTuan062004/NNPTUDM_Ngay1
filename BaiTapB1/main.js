// Cau 1 - Khai bao contructor Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2 - Tao danh sach san pham
const products = [
    new Product(1, "iPhone 17", 45000000, 10, "Smartphone", true),
    new Product(2, "MacBook M3", 45000000, 5, "Laptop", true),
    new Product(3, "Dell Inspiron", 2500000, 0, "Laptop", false),
    new Product(4, "Apple Watch", 12000000, 8, "Accessories", true),
    new Product(5, "Samsung S24", 22000000, 15, "Smartphone", true),
    new Product(6, "Acer Nitro 5", 35000000, 3, "Laptop", true)
];

// Cau 3
function getNameAndPrice(p) {
    return {
        name: p.name,
        price: p.price
    };
}
console.log("Câu 3:", products.map(getNameAndPrice));

// Cau 4
function filterInStock(p) {
    return p.quantity > 0;
}
console.log("Câu 4:", products.filter(filterInStock));

// Cau 5
function isExpensive(p) {
    return p.price > 30000000;
}
console.log("Câu 5:", products.some(isExpensive));

// Cau 6
function isAccessory(p) {
    return p.category === "Accessories";
}

function isAvailable(p) {
    return p.isAvailable === true;
}

const accessoriesInStock = products
    .filter(isAccessory)
    .every(isAvailable);

console.log("Câu 6:", accessoriesInStock);

// Cau 7
function sumInventory(total, p) {
    return total + (p.price * p.quantity);
}

const totalValue = products.reduce(sumInventory, 0);
console.log(
    "Câu 7: Tổng giá trị kho =",
    totalValue.toLocaleString(),
    "VND"
);

// Cau 8
function printProductInfo(p) {
    var status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(p.name + " - " + p.category + " - " + status);
}

console.log("Câu 8:");
products.forEach(printProductInfo);

// Cau 9
function listAllProperties(obj) {
    for (var key in obj) {
        if (typeof obj[key] !== "function") {
            console.log(key + ": " + obj[key]);
        }
    }
}

console.log("Câu 9:");
listAllProperties(products[0]);

// Cau 10
function isSellable(p) {
    return p.isAvailable && p.quantity > 0;
}

function getProductName(p) {
    return p.name;
}

const availableNames = products
    .filter(isSellable)
    .map(getProductName);

console.log("Câu 10:", availableNames);
