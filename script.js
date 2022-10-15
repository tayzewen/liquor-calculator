const poursPerBtl = 17
const garnish = 0.50
const shrinkage = 0.20
const scotchTar= 0.25
const allEntries = [];

function getType() {
    let e = document.getElementById("liqType");
    const productType = e.value;
    console.log(productType);
    return productType;
}

function getAge() {
    let f = document.getElementById("ageStatement");
    const age = f.value;
    console.log(age);
    return age;
}

function getMarkup() {
    let markup;
    let age = getAge();
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

    return markup;
}

function calculate() {
    let productType = getType();
    let markup = getMarkup();
    let prodName = document.getElementById("prodName").value;
    let acqCost = document.getElementById("acqCost").value;
    let pourCost = (acqCost / poursPerBtl).toFixed(2);
    let basePrice = pourCost / markup;
    let shrink = (basePrice * shrinkage) + garnish;
    let pourPrice = (shrink + basePrice).toFixed(2);
    let profit = ((pourPrice * poursPerBtl) - acqCost).toFixed(2);

    if (productType == "scotch") {
        pourPrice = ((basePrice * scotchTar) + basePrice + shrink).toFixed(2);
    }

    return {
        Name: prodName,
        Type: productType,
        Cost: "$" + pourCost,
        Price: "$" + pourPrice,
        Profit: "$" + profit
    };
}

function displayCalc() {
    let entry = calculate();


    document.getElementById("calc").innerHTML = "Product name: " + entry.Name + "<br>" + "Product type: " + entry.Type + "<br>" + "Pour Cost: " + entry.Cost + "<br>" + "Pour price: " + entry.Price + "<br>" + "Profit: " + entry.Profit;

    // btn();
    return entry;

}

// function btn() {
//     const btnSave = document.createElement("button");
//     btnSave.innerHTML = "Save";
//     document.getElementById("calc").appendChild(btnSave);
//     btnSave.addEventListener("click", saveEntry);
// }

// function saveEntry() {
//     let entry = displayCalc();
//     allEntries.push(entry);
//     console.log(allEntries);
// }

// function displayEntries() {
//     $.each(allEntries, function (i, item) {
//         console.log("Values in object " + i + ":");
//         document.getElementById("entries").innerHTML += "<br>";
//         $.each(item, function(key, value) {
//             console.log(key + " = " + value);
//             document.getElementById("entries").innerHTML += (key + ": " + value + "<br>");
//         });
//         document.getElementById("entries").innerHTML += "<br>";
//     });
// }




