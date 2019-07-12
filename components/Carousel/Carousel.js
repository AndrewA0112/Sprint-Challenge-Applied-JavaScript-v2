/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = document.querySelector('.carousel-container')
carousel.appendChild(createCarousel())

function createCarousel () {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const imgOne = document.createElement('img')
  const imgTwo = document.createElement('img')
  const imgThree = document.createElement('img')
  const imgFour = document.createElement('img')
  const rightButton = document.createElement('dov')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  leftButton.textContent = '<'
  rightButton.textContent = '>'
  imgOne.src = '/assets/carousel/mountains.jpeg'
  imgTwo.src = '/assets/carousel/computer.jpeg'
  imgThree.src = '/assets/carousel/trees.jpeg'
  imgFour.src = '/assets/carousel/turntable.jpeg'

  carousel.appendChild(leftButton)
  carousel.appendChild(imgOne)
  carousel.appendChild(imgTwo)
  carousel.appendChild(imgThree)
  carousel.appendChild(imgFour)
  carousel.appendChild(rightButton)

  return carousel
}

class Carousel {
  constructor(carouselElement){
      this.carouselElement = carouselElement

      this.leftButton = carousel.querySelector('.left-button')

      this.rightButton = carousel.querySelector('.right-button')

      this.imgList = Array.from(carousel.querySelectorAll('img'))

      this.currentIndex = 0;
      this.imgList[this.currentIndex].style.display = 'flex';

      this.leftButton.addEventListener('click', () => this.leftClick())

      this.rightButton.addEventListener('click', () => this.rightClick())
  }

  leftClick(){
      if(this.currentIndex <= 0){
          this.currentIndex = this.imgList.length-1;
          this.imgList.forEach(img => img.style.display = 'none')
          this.imgList[this.currentIndex].style.display = 'flex'
      }
      else {
          this.currentIndex--;
          this.imgList.forEach(img => img.style.display = 'none')
          this.imgList[this.currentIndex].style.display = 'flex'
      }
  }

  rightClick(){
      if(this.currentIndex >= this.imgList.length-1){
          this.currentIndex = 0;
          this.imgList.forEach(img => img.style.display = 'none')
          this.imgList[this.currentIndex].style.display = 'flex'
      }
      else {
          this.currentIndex++;
          this.imgList.forEach(img => img.style.display = 'none')
          this.imgList[this.currentIndex].style.display = 'flex'
      }
  }
}

new Carousel(carousel)