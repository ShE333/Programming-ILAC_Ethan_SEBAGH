const app = Vue.createApp({
    data() {
        return {
            currentSection: 'shoes',
            modelList: [], // Ajoutez une propriété pour stocker les données du package.json
            stockData: [], // Ajoutez une propriété pour stocker les données du stock.json
            currentShoesIndex: 0, // Ajoutez une propriété pour suivre l'index actuel du livre
            total: 0,
            stock: false
        };
    },
    mounted() {
        // Fetch des fichiers JSON en parallèle
        Promise.all([
            fetch('../vue.js-strore-main/package.json').then(response => response.json()),
            fetch('../vue.js-strore-main/stock.json').then(response => response.json())
        ])
        .then(data => {
            // Stockage des données dans les propriétés correspondantes
            this.modelList = data[0].docMartens;
            this.stockData = data[1];

            // Mise à jour de la variable stock avec la valeur de l'élément actuel de book ou movie
            this.updateStock();
        })
        .catch(error => console.error('Erreur de chargement des fichiers JSON:', error));
    },
    methods: {
        swipSection(section) {
            this.currentSection = section;
            // Mise à jour de la variable stock lorsque la section change
            this.updateStock();
        },
        nextShoes() {
            this.currentShoesIndex = (this.currentShoesIndex + 1) % this.modelList.length;
            this.updateStock()

            // Mise à jour de la variable stock lorsque le livre change
            this.updateStock();
        },
        prevShoes() {
            this.currentShoesIndex = (this.currentShoesIndex - 1 + this.modelList.length) % this.modelList.length;
            this.updateStock()
            // Mise à jour de la variable stock lorsque le livre change
            this.updateStock();
        },
        addValue() {
            this.updateStock()
            if (this.stock){
                    this.total += this.modelList[this.currentShoesIndex][this.currentSection].price;
            }
            console.log(this.currentSection, this.total);
        },
        updateStock() {
            const currentShoes = this.modelList[this.currentShoesIndex];

            // Vérifie si l'élément actuel existe dans stockData
            const stockElement = this.stockData.stock.find(element => element.model === currentShoes.model);

            // Correction pour mettre à jour correctement la section "boots"
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
