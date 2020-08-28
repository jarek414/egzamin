const doc = document;
doc.addEventListener('DOMContentLoaded', function (){
    const starshipList = doc.querySelector('#starships');
    const starshipToAdd = doc.createElement('li');

    fetch(`https://swapi.dev/api/starships/`)
        .then(function (result) {
            return result.json();
        }).then(function (result) {
            console.log(result);
            result.results.forEach(function (starship){
                const starshipName = doc.createElement('h2');
                const starshipModel = doc.createElement('h3');
                starshipName.innerText = starship.name;
                starshipModel.innerText = starship.model;
                starshipToAdd.appendChild(starshipName);
                starshipToAdd.appendChild(starshipModel);
                starshipList.appendChild(starshipToAdd);
            });
        }
    ).catch(function (reason){
        console.log(reason);
    });
});

