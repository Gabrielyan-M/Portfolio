const form = document.querySelector('[data-js-form]')
const inputName = document.querySelector('[data-js-input-name]')
const inputNumber = document.querySelector('[data-js-input-number]')
const inputCheckbox = document.querySelector('[data-js-input-checkbox]')
const submitButton = document.querySelector('[data-js-submit-button]')

function dataVerification(name, number, checkbox, form) {
      // console.log("name: " + name);
      // console.log("number: " + number);
      // console.log("checkbox: " + checkbox);

      

      // ? name verif.
      const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$/u;

      if (!nameRegex.test(name)) {
            alert('Введите корректное имя (только буквы).');
            return;
      }

      // ? number verif.
      const cleanPhone = number.replace(/\D/g, '');

      if (!/^([78])/.test(cleanPhone) || cleanPhone.length < 11) {
            alert('Введите корректный номер телефона.');
            return;
      }


      const userData = { name, number };


      try {
            const response = fetch("8563470558:AAEo6Ae2-XLbewvQUKLEU92CsNMWUF4jmAI", {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                  body: JSON.stringify(userData),
            });

            if (response.ok) {
                  alert('Сообщение отправлено!');
                  form.reset();
            } else {
                  throw new Error('Ошибка отправки');
            }
      } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке');
      }

      
}

form.addEventListener('submit', (e) => {
      e.preventDefault()

      dataVerification(inputName.value.trim(), inputNumber.value.trim(), inputCheckbox.checked, e.target)
})