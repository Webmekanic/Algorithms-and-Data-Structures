// Back to the gymnastics team, the Dolphins and the koalas! There is a new gymnatics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the avarage score of the other team. Otherwise, no team wins!
// 1. Create an arrow function "CalcAverage" to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function "CheckWinner" that takes the average score of each team as parameters ("avgDolhins" and "avgKoalas"), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54 and 49.
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const CalcAverage = (dolphins, koalas) => {
  let avgDolhins = dolphins.reduce((prev, curr) => prev + curr)
  console.log(avgDolhins)
  let avgkoalas = koalas.reduce((prev, curr) => prev + curr)
  console.log(avgkoalas)
  const checkWinner = (avgDolhins, avgKoalas) => {
    console.log(avgDolhins)
  }
}
CalcAverage([44, 23, 71], [65, 54, 49])

// const checkWinner = (avgDolhins, avgKoalas) => {
//   console.log(CalcAverage())
// }
// checkWinner()
