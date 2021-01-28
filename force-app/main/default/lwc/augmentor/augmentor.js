import { LightningElement } from "lwc";

export default class Augmentor extends LightningElement {
  startCounter = 0;
  handleStartChange(event) {
    // user gave some input, change that to integer and assign to startCounter
    // this startCounter value will be assigned to public property counter of child (numerator)
    // <c-numerator counter={startCounter}> line #16
    this.startCounter = parseInt(event.target.value);
  }

  handleMaximizeCounter() {
    // because maximizeCounter is defined in numerator
    // counter is numerator's property
    // that function cannot be called from the parent, as it doesnt know actually what value counter is currently
    this.template.querySelector("c-numerator").maximizeCounter();
  }
}
