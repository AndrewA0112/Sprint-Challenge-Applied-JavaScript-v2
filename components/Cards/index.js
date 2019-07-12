// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector('.cards-container')

const articlesPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles')

articlesPromise
    .then(data => {
        console.log('Articles API response', data.data.articles)
        for (let [type, articles] of Object.entries(data.data.articles)) {
            console.log(type, articles);
            articles.forEach(article => {
                cards.appendChild(createCard(article))
            })
        }
    })

    .catch(error => {
        console.log('Error connecting to API', error)
    })

function createCard(obj) {
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthorCont = document.createElement('div')
    const cardImgCont = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthor = document.createElement('span')

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthorCont.classList.add('author')
    cardImgCont.classList.add('img-container')

    cardHeadline.textContent = obj.headline
    cardImg.src = obj.authorPhoto
    cardAuthor.textContent = obj.authorName

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthorCont)

    cardAuthorCont.appendChild(cardImgCont)
    cardAuthorCont.appendChild(cardAuthor)

    cardImgCont.appendChild(cardImg)

    return card
}
