export function randomInteger(maxLimit: number = 1): number {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}
