import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              data-testid="name-input"
              id="name"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              type="text"
              name="description"
              data-testid="description-input"
              id="description"
            />
          </label>
          <label htmlFor="number">
            Attr01
            <input
              type="number"
              name="number"
              data-testid="attr1-input"
              id="number"
            />
          </label>
          <label htmlFor="number2">
            Attr02
            <input
              type="number"
              name="number2"
              data-testid="attr2-input"
              id="number2"
            />
          </label>
          <label htmlFor="number3">
            Attr03
            <input
              type="number"
              name="number3"
              data-testid="attr3-input"
              id="number3"
            />
          </label>
          <label htmlFor="trunfo">
            Imagem
            <input
              type="img"
              name="image"
              data-testid="image-input"
              id="image"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input
              type="checkbox"
              name="trunfo"
              data-testid="trunfo-input"
              id="trunfo"
            />
            Super Trybe Trunfo
          </label>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
