import Component from "classes/Component"

export default class Animation extends Component {
  constructor ({ element, elements }) {
    super ({
      element,
      elements
    })

    this.createObserver()

     this.animateOut()
  }

  createObserver () {
    this.Observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log('animationIn')
          this.animateIn()
        } else {
          // console.log('animationOut')
          this.animateOut()
        }
      })
    })

     this.Observer.observe(this.element)
  }

   animateIn (){

   }

    animateOut () {

    }

    onResize () {
      
    }
}