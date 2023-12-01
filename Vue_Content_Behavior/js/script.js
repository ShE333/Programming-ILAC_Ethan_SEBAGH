const app = Vue.createApp({
    data() {
        return {
            // define the array
            cardArray: [
                {
                    "Title": "Cumulonimbus cloud",
                    "Desc" : "Cumulonimbus clouds are menacing looking multi-level clouds, extending high into the sky in towers or plumes. " +
                             "More commonly known as thunderclouds, cumulonimbus is the only cloud type that can produce hail, thunder and lightning.",
                    "image": "../img/cumulonimbus.jpg"
                },
                {
                    "Title": "Cirrus cloud",
                    "Desc" : "Cirrus clouds are wispy, feathery, and composed entirely of ice crystals. " +
                             "They often are the first sign of an approaching warm front or upper-level jet streak.",
                    "image": "../img/cirrus.jpeg"
                },
                {
                    "Title": "Stratus cloud",
                    "Desc" : "Stratus clouds are low-level layers with a fairly uniform grey or white colour. " +
                             "Often the scene of dull, overcast days in its 'nebulosus' form, they can persist for long periods of time. " +
                             "They are the lowest-lying cloud type and sometimes appear at the surface in the form of mist or fog.",
                    "image": "../img/stratus.jpeg"
                }
            ],
            // create the current card attribute
            currentCard: {},
            // creating an index to loop the cards
            currentIndex: 0
        };
    },
    mounted() {
        // calling the method for initialisation
        this.showCard();
    },
    methods: {
        // Method to display the card
        showCard() {
            this.currentCard = this.cardArray[this.currentIndex];
        },
        // method for next card
        nextCard() {
            this.currentIndex = (this.currentIndex + 1) % this.cardArray.length;
            this.showCard();
        },
        // method for previus card
        prevCard() {
            this.currentIndex = (this.currentIndex - 1 + this.cardArray.length) % this.cardArray.length;
            this.showCard();
        }
    }
})

app.mount('#app')