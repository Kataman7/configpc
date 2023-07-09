// Fonction pour charger les composants d'une configuration sélectionnée
async function loadConfiguration(configurationIndex) {

  var configuration = configurations[configurationIndex];
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

  var videoFrame = document.getElementById("benchmark");
  videoFrame.setAttribute("src", configuration.video);
}

fetch('../db/configurations.json')
  .then(response => response.json())
  .then(data => {
    configurations = data
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON', error);
  });



