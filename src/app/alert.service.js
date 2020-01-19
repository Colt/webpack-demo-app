import { inputsAreValid } from './utils/inputs-are-valid'

export class AlertService {
  constructor () {
    this.errorBox = document.getElementById('error')
  }

  handleAdditionError (inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => inputsAreValid(numbers[index])
      ? message + ''
      : message + `${str} is not a number. `, 'Please enter two valid numbers! ')

    this.errorBox.classList.remove('invisible')
    this.errorBox.innerText = fullMessage
  }

  hideErrors () {
    this.errorBox.classList.add('invisible')
  }
}
