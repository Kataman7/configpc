// Fonction pour charger les composants d'une configuration sélectionnée
function loadConfiguration(configurationIndex) {

  if (configurationIndex !== 0) {
    var configuration = configurations[configurationIndex - 1];
    var componentList = document.getElementById("config-list");
    componentList.innerHTML = "";

    for (var i = 0; i < configuration.components.length; i++) {
      var component = configuration.components[i];
      var listItem = document.createElement("li");

      var componentText = document.createElement("span");
      componentText.innerHTML = component.name + " : " + " <a href='" + component.link + "'>" + component.model + "</a>" + " <span class=\"code\">" + component.price + "</span>";
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
  } else {
    // Afficher la page bon-plan, masquer la page config
    document.getElementById('configs').classList.remove('hidden');
    document.getElementById('bon-plan').classList.add('hidden');
  }
}

function loadBonPlan() {

  var componentList = document.getElementById("bon-plan-list");
  componentList.innerHTML = "";

  for (var i = 0; i < bonplans.length; i++) {
    var bonplan = bonplans[i];
    var listItem = document.createElement("li");

    var componentText = document.createElement("span");
    componentText.innerHTML = bonplan.name + " : " + " <a href='" + bonplan.link + "'>" + bonplan.model + "</a>" + " <span class=\"code\">" + bonplan.price + "</span>";
    listItem.appendChild(componentText);

    componentList.appendChild(listItem);
  }
}

fetch('db/configurations.json')
  .then(response => response.json())
  .then(data => {
    configurations = data
    loadConfiguration();

  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });

fetch('db/bonplan.json')
  .then(response => response.json())
  .then(data => {
    bonplans = data
    loadBonPlan()

  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });



