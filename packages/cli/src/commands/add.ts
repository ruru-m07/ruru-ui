export async function add() {
  const lenth = process.argv.length;
  console.log(process.argv.slice(3, lenth));
}
