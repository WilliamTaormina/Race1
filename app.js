let raceNumber = Math.floor(Math.random() * 1000);
let runnerLate = true;
let runnerAge = 18;

if (runnerAge > 18 && runnerLate == false) {
  raceNumber += 1000;
  console.log(`${raceNumber} ${runnerAge} ${runnerLate}`);
}

if (runnerAge > 18 && runnerLate == false) {
  raceNumber += 1000;
  console.log(
    `You will race at 9:30am today.  Your race number is ${raceNumber}`
  );
} else if (runnerAge > 18 && runnerLate == true) {
  raceNumber += 1000;
  console.log(
    `You will race at 11:00am today.  Your race number is ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `You will race at 12:30am today.  Your race number is ${raceNumber}`
  );
} else if (runnerAge === 18) {
  console.log(`You're ${runnerAge}! Please see the registration desk..`);
}
