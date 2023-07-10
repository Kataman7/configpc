
// Fonction pour charger les composants d'une configuration sélectionnée
async function loadConfiguration(configurationIndex) {

  if (configurationIndex !== 0) {
    var configuration = configurations[configurationIndex - 1];
    var componentList = document.getElementById("config-list");
    componentList.innerHTML = "";

    for (var i = 0; i < configuration.components.length; i++) {
      var component = configuration.components[i];
      var listItem = document.createElement("li");

      var componentText = document.createElement("span");
      componentText.innerHTML = component.name + " : " + " <a href='" + component.link + "'>" + component.model + "</a>" + " <span class=\"code\">" + component.price + "</span>€";
      listItem.appendChild(componentText);

      componentList.appendChild(listItem);
    }

    var currentConfigurationTitle = document.getElementById("config-title");
    currentConfigurationTitle.innerHTML = configuration.name;

    var currentConfiguration = document.getElementById("config-description");
    currentConfiguration.innerHTML = "<li>" + configuration.description + "</li>";

    var videoFrame = document.getElementById("benchmark");
    videoFrame.setAttribute("src", configuration.video);

    // Afficher la page configs, masquer la page bon-plan
    document.getElementById('configs').classList.remove('hidden');
    document.getElementById('bon-plan').classList.add('hidden');
    loadPrice()
  } else {
    // Afficher la page bon-plan, masquer la page config
    document.getElementById('configs').classList.remove('hidden');
    document.getElementById('bon-plan').classList.add('hidden');
  }
}

async function loadBonPlan() {

  var componentList = document.getElementById("bon-plan-list");
  componentList.innerHTML = "";

  for (var i = 0; i < bonplans.length; i++) {
    var bonplan = bonplans[i];
    var listItem = document.createElement("li");

    var componentText = document.createElement("span");
    componentText.innerHTML = bonplan.name + " : " + " <a href='" + bonplan.link + "'>" + bonplan.model + "</a>" + " <span class=\"code\">" + bonplan.price + "</span>€";
    listItem.appendChild(componentText);

    componentList.appendChild(listItem);
  }
}

async function loadPrice() {

  var prices = [0, 0, 0, 0];

  configurations.forEach((configuration, index) => {
    var configPrice = configuration.components.reduce((total, component) => total + component.price, 0);
    prices[index] = Math.ceil(configPrice);
  });

  var priceElements = [
    { class: "price-300", index: 0 },
    { class: "price-500", index: 1 },
    { class: "price-800", index: 2 },
    { class: "price-1000", index: 3 }
  ];

  priceElements.forEach((priceElement) => {
    var elements = document.querySelectorAll('.' + priceElement.class);
    elements.forEach((element) => {
      element.innerHTML = Math.ceil(prices[priceElement.index]);
    });
  });
}

fetch('./db/configurations.json')
  .then(response => response.json())
  .then(data => {
    configurations = data
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });

fetch('./db/bonplan.json')
  .then(response => response.json())
  .then(data => {
    bonplans = data
    loadBonPlan()
    loadPrice()

  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });


// Sélectionnez tous les éléments ayant la classe "config-button"
var buttons = document.querySelectorAll('.config-button');

// Parcourez tous les boutons
buttons.forEach(function(button) {
  // Ajoutez un écouteur d'événement "click" à chaque bouton
  button.addEventListener('click', function() {
    // Supprimez la classe "active" de tous les autres boutons
    buttons.forEach(function(otherButton) {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
      }
    });

    // Ajoutez la classe "active" au bouton actuel
    button.classList.toggle('active');
  });
});



