// Fonction pour charger les composants d'une configuration sélectionnée

async function loadPrice() {
  var prices = [0, 0, 0, 0];

  configurations.forEach((configuration, index) => {
    var configPrice = configuration.components.reduce((total, component) => total + component.price, 0);
    prices[index] = Math.ceil(configPrice);
    console.log(prices[index]);
  });

  var priceElements = [
    { class: "budgetPrice", index: 0 },
    { class: "casualPrice", index: 1 },
    { class: "proPrice", index: 2 },
    { class: "creatorPrice", index: 3 }
  ];

  priceElements.forEach((priceElement) => {
    var elements = document.querySelectorAll('.' + priceElement.class);
    elements.forEach((element) => {
      element.innerHTML = Math.ceil(prices[priceElement.index]);
    });
  });


  // date de dernière modification
  document.getElementById("lastEdit").innerHTML = "08/07/2023";

}


fetch('../db/configurations.json')
  .then(response => response.json())
  .then(data => {
    configurations = data
    loadPrice()
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });