function createAlert() {
    const alert = document.createElement('div');
    alert.id = 'alert';

    const alertText = document.createElement('p');
    alertText.id = 'alert-p';

    const alertBtn = document.createElement('button');
    alertBtn.id = 'alert-btn';
    alertBtn.textContent = 'Окей👌';

    alert.appendChild(alertText);
    alert.appendChild(alertBtn);
    document.body.appendChild(alert);
}

//////////////////////////////////////////

const form = document.getElementById('food-form');

form.addEventListener('submit', function(event) {
    if (selectedItems.soups == null && selectedItems.mainDishes == null && selectedItems.drinks == null && selectedItems.saladsStarters == null && selectedItems.desserts == null) {
        event.preventDefault();
        createAlert();
        document.getElementById('alert-p').textContent = 'Ничего не выбрано! Выберите блюда для заказа!';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('alert-btn').onclick = function() {
            document.getElementById('alert').remove();
            document.getElementById('overlay').style.display = 'none';
        };
    } else if (selectedItems.drinks == null) {
        event.preventDefault();
        createAlert();
        document.getElementById('alert-p').textContent = 'Выберите напиток!';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('alert-btn').onclick = function() {
            document.getElementById('alert').remove();
            document.getElementById('overlay').style.display = 'none';
        };
    } else if (selectedItems.soups != null && (selectedItems.mainDishes == null && selectedItems.saladsStarters == null)) {
        event.preventDefault();
        createAlert();
        document.getElementById('alert-p').textContent = 'Выберите главное блюдо/салат/стартер!';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('alert-btn').onclick = function() {
            document.getElementById('alert').remove();
            document.getElementById('overlay').style.display = 'none';
        };
    } else if (selectedItems.saladsStarters != null && (selectedItems.soups == null && selectedItems.mainDishes == null)) {
        event.preventDefault();
        createAlert();
        document.getElementById('alert-p').textContent = 'Выберите суп или главное блюдо!';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('alert-btn').onclick = function() {
            document.getElementById('alert').remove();
            document.getElementById('overlay').style.display = 'none';
        };
    } else if ((selectedItems.drinks != null || selectedItems.desserts != null) && selectedItems.soups == null && selectedItems.mainDishes == null && selectedItems.saladsStarters == null) {
        event.preventDefault();
        createAlert();
        document.getElementById('alert-p').textContent = 'Выберите главное блюдо!';
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('alert-btn').onclick = function() {
            document.getElementById('alert').remove();
            document.getElementById('overlay').style.display = 'none';
        };
    } else {
        form.submit();
    }
});