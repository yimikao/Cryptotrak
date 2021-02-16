const data = [
    {
        rank: 1,
        coin: 'bitcoin',
        price: 25000,
        change: 0.13 
    },
    {
        rank: 2,
        coin: 'ethereum',
        price: 15000,
        change: 0.23 
    },
    {
        rank: 3,
        coin: 'hyper',
        price: 11000,
        change: 0.11 
    },
    {
        rank: 4,
        coin: 'tatcoin',
        price: 5000,
        change: 0.08 
    }
]


const crypto_table = document.querySelector('#crypto-table');

for(coins of data) {

    const table_data = document.createElement('div');
    table_data.className = 'table-data';
    
    function fill_table_data(p) {
        for (var props in coins) {
            const data = document.createElement(p);
            data.textContent =  `${coins[props]}`;
            table_data.appendChild(data);
        }
    }
    fill_table_data('p');

    crypto_table.appendChild(table_data);
}

function move_images(params) {
    const svg_images = document.querySelectorAll('.images');
    

    
}
