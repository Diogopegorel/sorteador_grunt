document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteio').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let aleatoryNumber = Math.random() * maxNumber;
        aleatoryNumber = Math.floor(aleatoryNumber + 1);

        document.getElementById('result-value').innerText = aleatoryNumber;
        document.querySelector('.result').style.display = 'block';
    })
})