
let saveContactBtn = document.getElementById('createBtn');
let contactList = document.getElementById('contactList');
let deleteButton = document.getElementById('deleteBtn');


saveContactBtn.addEventListener('click', function (e) {
    let inputName = document.getElementById('name').value;
    let inputNumber = document.getElementById('number').value;

    if (validateFunction(inputName, inputNumber, contactList)) {
        return;
    } else {
        var listItem = document.createElement('li');

        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = inputName;
        nameInput.disabled = true;

        var numberInput = document.createElement('input');
        numberInput.type = 'text';
        numberInput.value = inputNumber;
        numberInput.disabled = true;

        var btn1 = document.createElement('button');
        btn1.textContent = 'Change';

        var btn2 = document.createElement('button');
        btn2.textContent = 'Delete';

        listItem.appendChild(nameInput);
        listItem.appendChild(numberInput);
        listItem.appendChild(btn1);
        listItem.appendChild(btn2);

        contactList.appendChild(listItem);

        changeBtnFunction();

        btn2.addEventListener('click', function (e) {
            listItem.remove();
        });

        deleteBtnFunction();

    }
    /**FUNCTIONS */

    function validateFunction(inputName, inputNumber, contactList) {

        if (inputName.length === 0 || inputNumber.length === 0) {
            let errorMessage = document.createElement('h3');
            errorMessage.textContent = "You have to fill both fields with text!";
            contactList.appendChild(errorMessage);
            return true;
        }
        return false;
    }
    function deleteBtnFunction() {
        deleteButton.addEventListener('click', function (e) {
            listItem.parentNode.remove();
        });
    }

    function changeBtnFunction() {
        btn1.addEventListener('click', function () {
            if (nameInput.disabled === true) {
                nameInput.disabled = false;
                numberInput.disabled = false;
                btn1.textContent = 'Save';
            } else if (nameInput.value.length === 0 || numberInput.value.length === 0) {
                let errorMessage2 = document.createElement('h3');
                errorMessage2.textContent = "Don´t leave an empty box!";
                contactList.appendChild(errorMessage2);
            } else {
                nameInput.disabled = true;
                numberInput.disabled = true;
                btn1.textContent = 'Change'
            }
        });
    }

});

