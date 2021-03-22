const reqCompleta = []
const dubleApi = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const dados = await response.json();
    const respons2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
    const dado2 = await respons2.json();
    reqCompleta.push(...dado2.drinks, ...dados.drinks)
}
dubleApi()

export default reqCompleta;