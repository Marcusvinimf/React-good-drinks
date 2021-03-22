export const reqDeInfo = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
  const dados = await response.json();
  return dados.drinks
}