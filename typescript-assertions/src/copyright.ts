/* Practical use case of typescript assertions */

const year = document.getElementById("year") as HTMLElement ;
const thisYear = new Date().getFullYear() as unknown as string; // assertion chaining // try to avoid AMAP;

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

