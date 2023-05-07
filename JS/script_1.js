class Product {
    constructor() {
        this.id = 1
        this.productsArray = []
    }

    save() {
       let product = this.readData()

       if(this.validateField(product)) {
            this.add(product)
       }

       this.tableList()
    }

    tableList() {
        let tbody =document.getElementById('tbody')
        tbody.innerText =''

        for (let i = 0; i < this.productsArray.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_product = tr.insertCell()
            let td_price = tr.insertCell()
            let td_action = tr.insertCell()

            td_id.innerText = this.productsArray[i].id
            td_product.innerText = this.productsArray[i].productName
            td_price.innerText = this.productsArray[i].productPrice
            

            td_product.classList.add('description')

            let imgEdit = document.createElement('img')
            imgEdit.src = '/img/edit.svg'
            let imgDelete = document.createElement('img')
            imgDelete.src = '/img/delete.svg'

            td_action.appendChild(imgEdit)
            td_action.appendChild(imgDelete)
        }
    }

    add(product) {
        this.productsArray.push(product)
        this.id ++
    }

    readData() {
        let productDOM = {}

       productDOM.id = this.id
       productDOM.productName = document.getElementById('product').value
       productDOM.productPrice = document.getElementById('price').value
    
       return productDOM
    }

    validateField(product) {
        let msg = ''

        if(product.productName == '') {
            msg += '- fill in the product field \n'
        }

        if(product.productPrice == '') {
            msg += '- fill in the price field \n'
        }

        if(msg != '') {
            alert(msg)
            return false
        }

        return true
    }
}

var product = new Product()