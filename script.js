let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    },
]
let success = []
let unsuccess = []
for (let company of companies) {
    company.expensesPerMonth = 0
    company.profit = 0
    for (let exp of company.expenses) {
        company.expensesPerMonth += exp.total / 12
        totalExpenses = ((company.budget / 100 * company.tax) / 12 + company.expensesPerMonth)
        company.profit = (company.budget / 12) - totalExpenses
        company.profit = Math.round(company.profit)
        totalExpenses = Math.round(totalExpenses)
        company.expensesPerMonth = Math.round(company.expensesPerMonth)
    }
    if (company.profit > 0) {
        success.push(company)
    } else (
        unsuccess.push(company)
    )
    console.log(company.profit);
}

