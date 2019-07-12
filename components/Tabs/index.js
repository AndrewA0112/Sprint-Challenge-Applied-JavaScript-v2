// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

const topicsPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')

topicsPromise
    .then(data => {
        console.log('Tabs API response', data.data.topics)
        data.data.topics.forEach(topic => {
            topics.appendChild(createTab(topic))
        })
    })

    .catch(error => {
        console.log('Error connecting to API', error)
    })

    function createTab (topic) {
        const topics = document.createElement('div')
        
        topics.dataset.tab = topic
        topics.classList.add('tab')

        topics.textContent = topic

        return topics
    }
