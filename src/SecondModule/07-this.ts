const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onClick="myClickHandler">Click Me!</button>
function myClickHandler(
  /* Если нам нужно типизировать this в функции, то мы передаем его первым параметром
    и функция не будет воспринимать его как параметр, мы просто передаем его для описания  */
  this: HTMLButtonElement,
  event: Event
) {
  this.disabled = true;
}
