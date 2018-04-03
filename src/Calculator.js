import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';
import './Calculator.css';

class Calculator extends Component {
  state = {
    question: '',
    answer: '',
  };

  cleanseQuestion = question =>
    question
      .split('^')
      .join('**')
      .split('√')
      .join('Math.sqrt');

  handleClick = event => {
    const { value } = event.target;
    switch (value) {
      case '=': {
        try {
          this.setState({
            answer: eval(this.cleanseQuestion(this.state.question)),
            question: '',
          });
          break;
        } catch (err) {
          this.setState({ answer: 'ERROR', question: '' });
          break;
        }
      }
      case 'clear': {
        this.setState({ question: '', answer: '' });
        break;
      }
      case '√': {
        this.setState({ question: `${this.state.question}√(` });
        break;
      }
      default: {
        this.setState({ question: `${this.state.question}${value}` });
        break;
      }
    }
  };

  render() {
    const { answer, question } = this.state;
    return (
      <div className="container">
        <div className="calculator-wrapper">
          <Screen question={question} answer={answer} />
          <div className="container buttons-container">
            <div>
              <Button label={'7'} handleClick={this.handleClick} />
              <Button label={'8'} handleClick={this.handleClick} />
              <Button label={'9'} handleClick={this.handleClick} />
              <Button label={'*'} handleClick={this.handleClick} />
              <Button label={'/'} handleClick={this.handleClick} />
            </div>
            <div>
              <Button label={'4'} handleClick={this.handleClick} />
              <Button label={'5'} handleClick={this.handleClick} />
              <Button label={'6'} handleClick={this.handleClick} />
              <Button label={'-'} handleClick={this.handleClick} />
              <Button label={'+'} handleClick={this.handleClick} />
            </div>
            <div>
              <Button label={'1'} handleClick={this.handleClick} />
              <Button label={'2'} handleClick={this.handleClick} />
              <Button label={'3'} handleClick={this.handleClick} />
              <Button label={'.'} handleClick={this.handleClick} />
              <Button label={'^'} handleClick={this.handleClick} />
            </div>
            <div>
              <Button label={'clear'} handleClick={this.handleClick} />
              <Button label={'('} handleClick={this.handleClick} />
              <Button label={')'} handleClick={this.handleClick} />
              <Button label={'√'} handleClick={this.handleClick} />
            </div>
            <div>
              <Button label={'0'} handleClick={this.handleClick} />
              <Button label={'.'} handleClick={this.handleClick} />
              <Button label={'='} handleClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
