const currencies = [
    "bitcoin",
    "dogecoin",
    "etherium",
    "tether",
    "bnb",
    "solana",
    "xrp",
    "avalanche",
]

const money = [
    "71 000", 
    "0,2",
    "3 600",
    "1",
    "600",
    "200",
    "0,6",
    "58",
]

function insert(){
    document.getElementById("bitcoin").innerHTML = currencies[0]
    document.getElementById("bitcoinMoney").innerHTML = money[0] + "$"
    document.getElementById("dogecoin").innerHTML = currencies[1]
    document.getElementById("dogecoinMoney").innerHTML = money[1] + "$"
    document.getElementById("etherium").innerHTML = currencies[2]
    document.getElementById("etheriumMoney").innerHTML = money[2] + "$"
    document.getElementById("tether").innerHTML = currencies[3]
    document.getElementById("tetherMoney").innerHTML = money[3] + "$"
    document.getElementById("bnb").innerHTML = currencies[4]
    document.getElementById("bnbMoney").innerHTML = money[4] + "$"
    document.getElementById("solana").innerHTML = currencies[5]
    document.getElementById("solanaMoney").innerHTML = money[5] + "$"
    document.getElementById("xrp").innerHTML = currencies[6]
    document.getElementById("xrpMoney").innerHTML = money[6] + "$"
    document.getElementById("avalanche").innerHTML = currencies[7]
    document.getElementById("avalancheMoney").innerHTML = money[7] + "$"
}




function search(){

    const currencySearch = document.getElementById("searchButton").value;
    

    for (i=0; i<currencies.length; i++){

        if (currencies[i] === currencySearch) {
          document.getElementById("searchCurrency").innerHTML = currencies[i];
          document.getElementById("searchMoney").innerHTML = money[i] + "$";
        }   
          
    }
    
}
