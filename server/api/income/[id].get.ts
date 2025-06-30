export default defineEventHandler( async()=>{
    const result = await $fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(result);
    return {
        id: 1,
        amount: 5000,
        category: "income",
        description: "Microserve",
        r: result
    }
});