export default defineEventHandler( async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    return [{
        totalIncome:5000,
        totalExpenses:500,
        month: "Jan"
    },
    {
        totalIncome:2000,
        totalExpenses:600,
        month: "Feb"
    },
    {
        totalIncome:3000,
        totalExpenses:100,
        month: "Mar"
    },
]
})