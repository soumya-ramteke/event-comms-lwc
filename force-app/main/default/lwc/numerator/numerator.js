import { LightningElement, api } from "lwc";

export default class Numerator extends LightningElement {
  @api counter = 0;
  // parent will call this maximizeCounter
  @api
  maximizeCounter() {
    this.counter += 1000000;
  } // add a button and handler for handling this in augmentor (parent)
  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    const factor = event.detail;
    this.counter *= factor;
  }
}
