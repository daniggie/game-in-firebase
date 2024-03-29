const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    console.log('submit');
    e.preventDefault();
    let game = document.querySelector('[name=game]').value;

    db.collection('games').add({
        game: game
    });

    alert('inserido com sucesso');

    form.reset();

})

try {
    db.collection('games').onSnapshot(function (data) {
        let list = document.querySelector('.list');
        list.innerHTML = '';
        data.docs.map(function (val) {
            list.innerHTML += `<tr>
                <td>${val.data().game}</td>
            </tr>`;
        })
    })
} catch (error) {
    console.log(error);
}