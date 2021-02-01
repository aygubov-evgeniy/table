const Table = () => {
  const TableBody = document.querySelector('tbody');
  const Form = document.querySelector('form');

  const btnSaveText = 'Сохранить';
  const btnEditText = 'Редактировать';

  const editCells = function (el) {
    const TableRow = el.target.parentElement.parentElement;
    const TableRowText = TableRow && TableRow.querySelectorAll('span');
    
    this.isEditable = !this.isEditable;

    if (this.isEditable) {
      this.innerText = btnSaveText;
      TableRowText.forEach(el => el.setAttribute('contenteditable', true));
    } else {
      this.innerText = btnEditText;
      TableRowText.forEach(el => el.removeAttribute('contenteditable', true));
    }
  }

  const removeRow = (el) => {
    const TableRow = el.target.parentElement.parentElement;
    let isRemove = confirm('Удалить?');
    isRemove && TableRow.remove();
  }

  const initHelpButtons = () => {
    const btnEdit = document.querySelectorAll('.btn-edit');
    const btnRemove = document.querySelectorAll('.btn-remove');

    btnEdit.forEach(function (item) {
      item.isEditable = false;
      item.addEventListener('click', editCells);
    })

    btnRemove.forEach(function (item) {
      item.addEventListener('click', removeRow);
    })
  }

  const renderTableRow = (name, tel) => {
    const TableRow = document.createElement('tr');
    const TableRowTemplate = `
      <tr>
        <td>${name}</td>
        <td>${tel}</td>

        <td><button class="btn-edit">Редактировать</button></td>
        <td><button class="btn-remove">Удалить</button></td>
      </tr>`;
    
    TableRow.innerHTML = TableRowTemplate;

    return TableRow;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const fieldNameValue = document.querySelector('input[name=name') && document.querySelector('input[name=name').value;
    const fieldPhoneValue = document.querySelector('input[name=phone') && document.querySelector('input[name=phone').value;

    TableBody.appendChild(renderTableRow(fieldNameValue, fieldPhoneValue));
    initHelpButtons();
    e.target.reset();
  }

  initHelpButtons();

  Form.addEventListener('submit', onFormSubmit);
}

export default Table;