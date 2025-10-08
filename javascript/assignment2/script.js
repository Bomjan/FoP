let [dolphinScore1, dolphinScore2, dolphinScore3] = [88, 110, 90];
let [koalaScore1, koalaScore2, koalaScore3] = [88, 120, 110];

let avgDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3)/3
let avgKoalas = (koalaScore1 + koalaScore2 + koalaScore3)/3
console.log(`Team Dolphins average: ${avgDolphin} \nTeam Koalas average: ${avgKoalas}`)

let teamDolphinsWin = avgDolphin > avgKoalas;
let teamKoalasWin = avgDolphin < avgKoalas;
let draw = avgDolphin == avgKoalas;
console.log(`Did Dolphins win: ${teamDolphinsWin} \nDid Koalas win: ${teamKoalasWin} \nIs it a draw: ${draw}`);

let condition1Dolphins = dolphinScore1 >= 90 && dolphinScore2 >= 90 && dolphinScore3 >= 90;
let condition2Dolphins = avgDolphin >= 100;
let teamDolphinQualify = condition1Dolphins || condition2Dolphins;

let condition1Koalas = koalaScore1 >= 90 && koalaScore2 >= 90 && koalaScore3 >= 90;
let condition2Koalas = avgKoalas >= 100;
let teamKoalaQualify = condition1Koalas || condition2Koalas;

console.log(`Team Dolphins qualify for Olympics 2026 🏆 : ${teamDolphinQualify} \nTeam Koalas qualify for Olympics 2026 🏆 : ${teamKoalaQualify}`)