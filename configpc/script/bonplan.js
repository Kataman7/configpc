async function loadBonPlan() {

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
  
  fetch('db/bonplan.json')
    .then(response => response.json())
    .then(data => {
      bonplans = data
      loadBonPlan()
    })
    .catch(error => {
      console.error('Erreur lors du chargement du fichier JSON', error);
    });
  