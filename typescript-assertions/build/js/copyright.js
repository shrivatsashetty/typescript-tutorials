/* Practical use case of typescript assertions */
const year = document.getElementById("year");
const thisYear = new Date().getFullYear(); // assertion chaining // try to avoid AMAP;
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
export {};
//# sourceMappingURL=copyright.js.map