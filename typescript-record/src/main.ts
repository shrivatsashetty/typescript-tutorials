type Actions = "read" | "write" | "execute"; // literal type

type Role = Record<Actions, boolean>;

const admin: Role = {
    read: true,
    write: true,
    execute: true,
}

const user: Role = {
    read: true,
    write: true,
    execute: false,
}

const guest: Role = {
    read: true,
    write: false,
    execute: false,
}

Object.keys(guest).map((key) => {
    console.log(`${key}: ${guest[key as keyof Role]}`);
});

/* Use with Enums */

enum Status {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Loading = 'LOADING'
}

type StatusMessage = Record<Status, string>;

const message: StatusMessage = {
    [Status.Success]: 'Operation completed!',
    [Status.Error]: 'Something went wrong',
    [Status.Loading]: 'Please wait...'
}

console.log(`message.SUCCESS: ${message.SUCCESS}`);
console.log(`message.ERROR: ${message.ERROR}`);
console.log(`message.LOADING: ${message.LOADING}`);

/* Nested Records */

type BeverageType = "coffe" | "tea";

type ServingSize = "small" | "medium" | "large";

const priceChart: Record<BeverageType, Record<ServingSize, number>> = {
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
}

// a function to get price of a beverage give the serving size
function getPrice(beverage: BeverageType, size: ServingSize ): number {
    return priceChart[beverage][size];
}

let cost = getPrice("coffe", "medium"); // cost of a medium size coffe
console.log(`Medium Coffe Costs ${cost} Rupees`); // Medium Coffe Costs 12 Rupees
