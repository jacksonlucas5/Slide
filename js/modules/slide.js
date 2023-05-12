export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
  }

  onStart(event) {
    event.preventDefault();
    console.log(event);
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove() {
    console.log("moveu");
  }

  onEnd() {
    console.log("acabou");
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addEventSlide() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  eventBind() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.eventBind();
    this.addEventSlide();
    return this;
  }
}
