// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = Number

let taxesMax = {}

let taxesMin = {}

// Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*


const setup = (arr) => {
    //вычесление месячный траты
    var expensesPerMonth = 0
    var monthlyExp = 0
    var procent = 0
    var nalog = 0

    taxes = 0
    for (let item of arr) {
        for (let item2 of item.expensesPerYear) {
            item.expensesPerMonth = Math.floor((expensesPerMonth + item2.total) / 12) //месячный расход
            item.monthlyExp = Math.floor(monthlyExp + item.budget / 12) //буджет в месяц
            item.procent = Math.floor(procent + (item.expensesPerMonth * 100 / item.monthlyExp))// отношение трат в месяц к месячному бюджету в процентах

            //6.сколько в итоге осталось денег в компании после вычета всех налогов и трат
            item.totalMoney = item.budget - ((expensesPerMonth + item2.total) + ((item.tax * item.budget) / 100))
            //4. общее количество налогов со всех компаний
            nalog = nalog + item.monthlyExp * item.tax / 100
            arr.taxes = Math.floor(taxes + nalog)

            //Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax

            item.generalExp = Math.floor(item.budget - (expensesPerMonth + item2.total + nalog))
        }

        if (item.generalExp > 0) {
            successful.push(item)
        }
        else {
            unSuccessful.push(item)
        }

    }

    console.log(arr);
    console.log('successful');
    console.log(successful);
    console.log('unSuccessful');
    console.log(unSuccessful);
}

setup(bank)