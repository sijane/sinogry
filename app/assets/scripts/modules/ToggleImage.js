import $ from 'jquery'

class ToggleImage {
  constructor() {
    this.thumbnail = $('#gallery img')
    this.modalImage = $('.modal__image')
//    this.passHref()
    this.setCallback()
    console.log('hey')
  }

  setCallback() {
    console.log(this)
    this.thumbnail.click(x => this.passHref(x))
  }
  
//  setCallback() {
//    this.thumbnail.click(function(e) {
//      this.passHref(e)  
  // refer to the element being clicked, not to the toggleImage
//    })
//  }
  
    this.thumbnail.click(this.passHref.bind(this))
  
  passHref(e) {
    const href = $(e.target).siblings().attr('data-href') 
    this.modalImage.attr('src', href) 
    e.preventDefault
    return false    
  }  
  
//  passHref() {
//    this.thumbnail.click(e => {
//      const href = $(e.target).siblings().attr('data-href')
////      console.log(href)
//      this.modalImage.attr('src', href)
//      e.preventDefault
//      return false
//    })
//  }  

}

export default ToggleImage
