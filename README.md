# Documentation de l'API configpc.xyz

L'API configpc.xyz permet d'obtenir des configurations d'ordinateurs basées sur différents composants matériels tels que le processeur, la carte graphique, la carte mère, la RAM, le SSD M.2, le boîtier, l'alimentation et le ventirad. En outre, elle fournit également une liste de bonnes affaires (deals) sur ces composants. L'API renvoie les résultats au format JSON, ce qui permet une intégration facile dans différentes applications.

## Endpoints

### 1. Obtenir les configurations d'ordinateurs

- **Endpoint:** `configpc.xyz/api.php`
- **Méthode:** GET

#### Paramètres

Aucun paramètre n'est requis pour obtenir les configurations d'ordinateurs. Les configurations sont renvoyées pour quatre colonnes de configuration différentes : `config1`, `config2`, `config3`, `config4`.

#### Réponse

La réponse renverra un objet JSON contenant les détails des composants de chaque configuration.

Exemple de réponse :
```json
{
    "config1": {
        "CPU": {
            "name": "Processeur1",
            "model": "Modèle1",
            "price": 200,
            "link": "lien_vers_le_produite"
        },
        "GPU": {
            "name": "Carte graphique1",
            "model": "Modèle1",
            "price": 300,
            "link": "lien_vers_le_produite"
        },
        ...
    },
    "config2": {
        ...
    },
    "config3": {
        ...
    },
    "config4": {
        ...
    }
}
```

### 2. Obtenir les bonnes affaires (deals) sur les composants

- **Endpoint:** `configpc.xyz/api.php`
- **Méthode:** GET
- **Paramètre:** `deals` (valeur : `true`)

#### Réponse

La réponse renverra un objet JSON contenant une liste de bonnes affaires sur les composants matériels.

Exemple de réponse :
```json
[
    {
        "name": "Composant1",
        "model": "Modèle1",
        "price": 100,
        "link": "lien_vers_le_produite"
    },
    {
        "name": "Composant2",
        "model": "Modèle2",
        "price": 150,
        "link": "lien_vers_le_produite"
    },
    ...
]
```

## Exemples d'utilisation

### Exemple 1: Obtenir les configurations d'ordinateurs

```php
<?php
// Appel de l'API pour obtenir les configurations d'ordinateurs
$apiUrl = "https://configpc.xyz/api.php";
$response = file_get_contents($apiUrl);

// Conversion de la réponse JSON en tableau associatif
$configurations = json_decode($response, true);

// Utilisation des configurations obtenues
foreach ($configurations as $configName => $configDetails) {
    echo "Configuration $configName:\n";
    foreach ($configDetails as $componentName => $componentDetails) {
        echo "- $componentName: " . $componentDetails['name'] . " (Modèle: " . $componentDetails['model'] . ", Prix: " . $componentDetails['price'] . "€)\n";
    }
    echo "\n";
}
?>
```

### Exemple 2: Obtenir les bonnes affaires (deals) sur les composants

```php
<?php
// Appel de l'API pour obtenir les bonnes affaires sur les composants
$apiUrl = "https://configpc.xyz/api.php?deals=true";
$response = file_get_contents($apiUrl);

// Conversion de la réponse JSON en tableau associatif
$deals = json_decode($response, true);

// Utilisation des bonnes affaires obtenues
echo "Bonnes affaires:\n";
foreach ($deals as $deal) {
    echo "- " . $deal['name'] . " (Modèle: " . $deal['model'] . ", Prix: " . $deal['price'] . "€)\n";
}
?>
```

### Exemple 1: Utilisation en Python

```python
import requests
import json

# Appel de l'API pour obtenir les configurations d'ordinateurs
api_url = "https://configpc.xyz/api.php"
response = requests.get(api_url)
configurations = response.json()

# Utilisation des configurations obtenues
for config_name, config_details in configurations.items():
    print(f"Configuration {config_name}:")
    for component_name, component_details in config_details.items():
        print(f"- {component_name}: {component_details['name']} (Modèle: {component_details['model']}, Prix: {component_details['price']}€)")
    print()
```

### Exemple 2: Utilisation en JavaScript (Node.js)

```javascript
const fetch = require('node-fetch');

// Appel de l'API pour obtenir les configurations d'ordinateurs
const apiUrl = 'https://configpc.xyz/api.php';
fetch(apiUrl)
  .then(response => response.json())
  .then(configurations => {
    // Utilisation des configurations obtenues
    for (const configName in configurations) {
      console.log(`Configuration ${configName}:`);
      const configDetails = configurations[configName];
      for (const componentName in configDetails) {
        const componentDetails = configDetails[componentName];
        console.log(`- ${componentName}: ${componentDetails.name} (Modèle: ${componentDetails.model}, Prix: ${componentDetails.price}€)`);
      }
      console.log();
    }
  });
```

### Exemple 3: Utilisation en cURL (ligne de commande)

```bash
# Appel de l'API pour obtenir les configurations d'ordinateurs
curl -X GET https://configpc.xyz/api.php

# Appel de l'API pour obtenir les bonnes affaires sur les composants
curl -X GET "https://configpc.xyz/api.php?deals=true"
```

Ces exemples illustrent comment appeler l'API `configpc.xyz` à l'aide de différentes langues de programmation pour obtenir les configurations d'ordinateurs et les bonnes affaires sur les composants matériels. Vous pouvez utiliser des bibliothèques similaires dans d'autres langages pour effectuer des appels d'API et traiter les réponses JSON.

N'hésitez pas à utiliser ces exemples comme point de départ pour intégrer l'API `configpc.xyz` dans vos propres applications ou services. Vous pouvez également étendre l'API pour inclure plus de fonctionnalités en fonction de vos besoins spécifiques.
