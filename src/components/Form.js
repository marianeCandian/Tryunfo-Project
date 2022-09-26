import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, // hasTrunfo
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              id="name"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              type="text"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              id="description"
            />
          </label>
          <label htmlFor="number">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
              name="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="number"
            />
          </label>
          <label htmlFor="number2">
            Attr02
            <input
              type="number"
              name="number2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              id="number2"
            />
          </label>
          <label htmlFor="number3">
            Attr03
            <input
              type="number"
              name="number3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              id="number3"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              id="image"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            <input
              type="checkbox"
              name="super-trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              id="super-trunfo"
            />
            Super Trybe Trunfo
          </label>
          <button
            id="submit"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
