const poursPerBtl = 17
const garnish = 0.50
const shrinkage = 0.20
const acqCost = document.getElementById("acqCost")
const scotchTar= 0.25

function calcPrice() {

    let e = document.getElementById("liqType");
    let productType = e.value;
    console.log(productType);

    let f = document.getElementById("ageStatement");
    let age = f.value;
    console.log(age);

    let markup;
    if (age == "0-4") {
        markup = .17
    } else if (age == "5-7") {
        markup = .16
    } else if (age == "8-11") {
        markup = .15
    } else if (age == "12-15") {
        markup = .14
    } else if (age == "16-19") {
        markup = .13
    } else if (age == "20-22") {
        markup = .12
    } else if (age == "23-24") {
        markup = .11
    } else if (age == "25+") {
        markup = .10
    }


    let prodName = document.getElementById("prodName").value;
    let acqCost = document.getElementById("acqCost").value;
    let pourCost = acqCost / poursPerBtl;
    let basePrice = pourCost / markup;
    let shrink = (basePrice * shrinkage) + garnish;
    let pourPrice = shrink + basePrice;
    let profit = (pourPrice * poursPerBtl) - acqCost;

    if (productType == "scotch") {
        pourPrice = (basePrice * scotchTar) + basePrice + shrink;
    }


    document.getElementById("calc").innerHTML = "Product name: " + prodName + "<br>" + "Product type: " + productType + "<br>" + "Pour Cost: $" + pourCost.toFixed(2) + "<br>" + "Pour price: $" + pourPrice.toFixed(2) + "<br>" + "Profit: $" + profit.toFixed(2);
}
