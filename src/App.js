import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      btnSave: [],
      hasTrunfo: false,
    };
  }

  hasTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare };
    this.setState((prevent) => ({
      btnSave: [...prevent.btnSave, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
    this.hasTrunfo();
  };

  buttonDisabled = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const maxAttr = 90;
    const sumAttr = 210;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sumAttr;
    if (cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0
      && (cardAttr1 >= 0 && cardAttr1 <= maxAttr)
      && (cardAttr2 >= 0 && cardAttr2 <= maxAttr)
      && (cardAttr3 >= 0 && cardAttr3 <= maxAttr)
      && sum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.buttonDisabled);
  };

  removeItem = ({ target }) => {
    const { btnSave, hasTrunfo } = this.state;
    const result = btnSave.filter((elem) => elem.cardName !== target.id);
    this.setState({
      btnSave: result,
      hasTrunfo: btnSave.cardTrunfo ? hasTrunfo : false,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, btnSave } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {btnSave.map((item) => (
            <>
              <div key={ item.cardName }>
                <Card
                  key={ item.cardName }
                  cardName={ item.cardName }
                  cardDescription={ item.cardDescription }
                  cardAttr1={ item.cardAttr1 }
                  cardAttr2={ item.cardAttr2 }
                  cardAttr3={ item.cardAttr3 }
                  cardImage={ item.cardImage }
                  cardRare={ item.cardRare }
                  cardTrunfo={ item.cardTrunfo }
                />
              </div>
              <button
                data-testid="delete-button"
                id={ item.cardName }
                type="button"
                onClick={ this.removeItem }
              >
                Excluir
              </button>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
