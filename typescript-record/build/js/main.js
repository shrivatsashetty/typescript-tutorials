const admin = {
    read: true,
    write: true,
    execute: true,
};
const user = {
    read: true,
    write: true,
    execute: false,
};
const guest = {
    read: true,
    write: false,
    execute: false,
};
Object.keys(guest).map((key) => {
    console.log(`${key}: ${guest[key]}`);
});
/* Use with Enums */
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Loading"] = "LOADING";
})(Status || (Status = {}));
const message = {
    [Status.Success]: 'Operation completed!',
    [Status.Error]: 'Something went wrong',
    [Status.Loading]: 'Please wait...'
};
console.log(`message.SUCCESS: ${message.SUCCESS}`);
console.log(`message.ERROR: ${message.ERROR}`);
console.log(`message.LOADING: ${message.LOADING}`);
const priceChart = {
    coffe: {
        small: 8,
        medium: 12,
        large: 15
    },
    tea: {
        small: 6,
        medium: 10,
        large: 13
    }
};
// a function to get price of a beverage give the serving size
function getPrice(beverage, size) {
    return priceChart[beverage][size];
}
let cost = getPrice("coffe", "medium"); // cost of a medium size coffe
console.log(`Medium Coffe Costs ${cost} Rupees`); // Medium Coffe Costs 12 Rupees
export {};
//# sourceMappingURL=main.js.map