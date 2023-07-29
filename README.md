# Documentation de l'API CONFIGPC.XYZ

Bienvenue à la documentation de l'API ConfigPC ! Cette API vous permet d'accéder à des configurations de PC basées sur une liste de composants spécifiques. Vous pouvez obtenir les détails des différentes configurations pour les utiliser dans vos projets.

## URL de l'API

L'API est hébergée à l'adresse suivante : `https://configpc.xyz/api.php`

## Endpoint

L'endpoint unique de cette API est :

`GET /configurations`

## Paramètres

Cette API ne nécessite aucun paramètre supplémentaire pour l'instant.

## Réponse de l'API

L'API renvoie un objet JSON contenant les détails des configurations sous la forme suivante :

```json
{
  "config1": {
    "CPU": {
      "name": "Nom_du_composant",
      "model": "Modèle_du_composant",
      "price": "Prix_du_composant",
      "link": "Lien_vers_le_composant"
    },
    "GPU": {
      "name": "Nom_du_composant",
      "model": "Modèle_du_composant",
      "price": "Prix_du_composant",
      "link": "Lien_vers_le_composant"
    },
    // Autres composants de la config1...
  },
  "config2": {
    // Composants de la config2...
  },
  // Autres configurations...
}
```

## Exemples d'utilisation

### Exemple 1: Obtenez toutes les configurations disponibles

Requête : `GET https://configpc.xyz/api.php/configurations`

Réponse (simplifiée pour des raisons de lisibilité) :

```json
{
  "config1": {
    "CPU": {
      "name": "Intel Core i7",
      "model": "i7-10700K",
      "price": "350",
      "link": "https://exemple.com/cpu_i7_10700k"
    },
    "GPU": {
      "name": "NVIDIA GeForce RTX 3080",
      "model": "RTX 3080",
      "price": "800",
      "link": "https://exemple.com/gpu_rtx3080"
    },
    // Autres composants de la config1...
  },
  "config2": {
    // Composants de la config2...
  },
  // Autres configurations...
}
```

### Exemple 2: Utilisez les données dans votre projet

```javascript
// Exemple en JavaScript pour récupérer les configurations via l'API
fetch('https://configpc.xyz/api.php/configurations')
  .then(response => response.json())
  .then(data => {
    // Utilisez les données dans votre projet
    console.log(data.config1);
    console.log(data.config2);
    // ...
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
```

Note: Assurez-vous que le format des données renvoyées correspond à vos besoins et adaptez votre code en conséquence.

Ceci conclut la documentation de l'API ConfigPC. N'hésitez pas à utiliser les configurations fournies pour vos projets et à nous contacter en cas de besoin d'aide ou de questions supplémentaires. Bon développement !
