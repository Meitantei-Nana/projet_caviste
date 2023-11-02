

const BASE_URL = 'https://cruth.phpnet.org/epfc/caviste/public/index.php/api/';


function fetchVins() {
  return fetch(`${BASE_URL}wines`);
}

function fetchVinByName(name) {
    return fetch(`${BASE_URL}wines/search?keyword=${name}`);
  }

function fetchVinById(id) {
  return fetch(`${BASE_URL}wines/${id}`);
}

//  rendre les fonctions accessibles globalement ( sur d autres fichiers)
window.fetchVins = fetchVins;
window.fetchVinById = fetchVinById;
window.fetchVinByName=fetchVinByName;