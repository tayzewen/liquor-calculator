const poursPerBtl = 17
const garnish = 0.50
const shrinkage = 0.20
const acqCost = document.getElementById("acqCost")

// function calcPrice() {
//     let prodName = document.getElementById("prodName").value;
//     let liquorType = document.getElementById("liquorType").value;
//     let acqCost = document.getElementById("acqCost").value;
//     let pourCost = acqCost / poursPerBtl;
//     let markup = document.getElementById("markup").value / 100;
//     let basePrice = pourCost / markup;
//     let shrink = (basePrice * shrinkage) + garnish;
//     let pourPrice = shrink + basePrice;
//     let profit = (pourPrice * poursPerBtl) - acqCost;

    

//     document.getElementById("calc").innerHTML = "Product name: " + prodName + "<br>" + "Product type: " + liquorType + "<br>" + "Pour Cost: " + pourCost.toFixed(2) + "<br>" + "Pour price: " + pourPrice.toFixed(2) + "<br>" + "Profit: $" + profit.toFixed(2);

// }

function calcPrice() {

    let e = document.getElementById("liqType");
    let productType = e.value;
    console.log(productType);

    let f = document.getElementById("ageStatement");
    let age = f.value;
    console.log(age);

    let markup;
    if (age == "0-4") {
        markup = .25
    } else if (age == "5-7") {
        markup = .22
    } else if (age == "8-11") {
        markup = .20
    } else if (age == "12-15") {
        markup = .19
    } else if (age == "16-19") {
        markup = .18
    } else if (age == "20-22") {
        markup = .17
    } else if (age == "23-24") {
        markup = .16
    } else if (age == "25+") {
        markup = .15
    }

    let prodName = document.getElementById("prodName").value;
    let acqCost = document.getElementById("acqCost").value;
    let pourCost = acqCost / poursPerBtl;
    let basePrice = pourCost / markup;
    let shrink = (basePrice * shrinkage) + garnish;
    let pourPrice = shrink + basePrice;
    let profit = (pourPrice * poursPerBtl) - acqCost;







    document.getElementById("calc").innerHTML = "Product name: " + prodName + "<br>" + "Product type: " + productType + "<br>" + "Pour Cost: " + pourCost.toFixed(2) + "<br>" + "Pour price: " + pourPrice.toFixed(2) + "<br>" + "Profit: $" + profit.toFixed(2);
}






