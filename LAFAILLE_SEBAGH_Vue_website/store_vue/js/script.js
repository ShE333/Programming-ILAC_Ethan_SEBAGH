const app = Vue.createApp({
    data() {
        return {
            currentSection: 'shoes',
            inBasket: 0,
            modelList: [], 
            stockData: [], 
            currentShoesIndex: 0,
            total: 0,
            stock: false
        };
    },
    mounted() {

        Promise.all([
            fetch('../store_vue/package.json').then(response => response.json()),
            fetch('../store_vue/stock.json').then(response => response.json())
        ])
        .then(data => {

            this.modelList = data[0].docMartens;
            this.stockData = data[1];


            this.updateStock();
        })
        .catch(error => console.error('Erreur de chargement des fichiers JSON:', error));
    },
    methods: {
        swipSection(section) {
            this.currentSection = section;

            this.updateStock();
        },
        nextShoes() {
            this.currentShoesIndex = (this.currentShoesIndex + 1) % this.modelList.length;
            this.updateStock()

            this.updateStock();
        },
        prevShoes() {
            this.currentShoesIndex = (this.currentShoesIndex - 1 + this.modelList.length) % this.modelList.length;
            this.updateStock()

            this.updateStock();
        },
        addValue() {
            this.updateStock()
            if (this.stock){
                    this.total += this.modelList[this.currentShoesIndex][this.currentSection].price;
                    this.inBasket += 1;
            }
            console.log(this.currentSection, this.total);
        },
        updateStock() {
            const currentShoes = this.modelList[this.currentShoesIndex];



            const stockElement = this.stockData.stock.find(element => element.model === currentShoes.model);


            if (this.currentSection === 'shoes') {
                this.stock = stockElement.shoes;
            }
            else if (this.currentSection === 'boots') {
                this.stock = stockElement.boots;
            }
        }
        
    }
});

app.mount('#app');
