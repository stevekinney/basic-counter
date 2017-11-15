export default function calculatePizzasNeeded(
  numberOfPeople,
  slicesPerPerson,
  slicesPerPizza = 8,
) {
  return Math.ceil(numberOfPeople * slicesPerPerson / slicesPerPizza);
}
