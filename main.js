
let saveContactBtn = document.getElementById('createBtn');
let contactList = document.getElementById('contactList');
let deleteButton = document.getElementById('deleteBtn');
let eM1 = 0;


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

    function validateFunction(inputName, inputNumber) {
        let errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.remove();
        }

        if (inputName.length === 0 || inputNumber.length === 0) {
            let insertContact = document.getElementById('insertContact');
            errorMessage = document.createElement('h4');
            errorMessage.id = 'error-message';
            errorMessage.textContent = "You have to fill both fields with text!";
            insertContact.appendChild(errorMessage);
            return true;
        }
        return false;
    }
    function deleteBtnFunction() {
        deleteButton.addEventListener('click', function (e) {
            if (listItem.parentNode !== null) { 
            listItem.parentNode.remove();
            }
        });
    }

    function changeBtnFunction() {
        btn1.addEventListener('click', function () {
            let errorMessage2 = document.getElementById('error-message2');
            if (errorMessage2) {
                errorMessage2.remove();
            }
            if (nameInput.disabled === true && numberInput.disabled === true) {
                nameInput.disabled = false;
                numberInput.disabled = false;
                btn1.textContent = 'Save';
            } else if (nameInput.value.length === 0 || numberInput.value.length === 0) {
                let changeContact = document.getElementById('changeContact'); 
                errorMessage2 = document.createElement('h4');
                errorMessage2.id = 'error-message2';
                errorMessage2.textContent = "Don´t leave a box empty!";
                changeContact.appendChild(errorMessage2);
            } else {
                nameInput.disabled = true;
                numberInput.disabled = true;
                btn1.textContent = 'Change'
            }
        });
    }

});

