const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(({ data }) => {
        console.log(data)
        let text = ''
        data.forEach(eachCharacter => text += `<div class="character-info">
        <div class="name">${eachCharacter.name}</div>
        <div class="occupation">${eachCharacter.occupation}</div>
        <div class="cartoon">${eachCharacter.cartoon}</div>
        <div class="weapon">${eachCharacter.weapon}</div>
      </div>`)
        document.querySelector(`.characters-container`).innerHTML = text
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector(`.operation input`).value

    charactersAPI
      .getOneRegister(id)
      .then(({ data }) => {
        let text = ""
        text += `
        <div class="character-info">
        <div class="id">${id}</div>
        <div class="name">${data.name}</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div>`

        document.querySelector(`.characters-container`).innerHTML = text
      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    charactersAPI
      .deleteOneRegister(document.querySelector(".selectId").value)
      .then()
      .catch(err => console.log(err))
  });

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});
});
