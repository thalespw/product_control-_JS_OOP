class Product {
    constructor() {
        this.id = 1
        this.productsArray = []
        this.editId = null
    }

    save() {
       let product = this.readData()

       if(this.validateField(product)) {
            if(this.editId == null){
                this.add(product)
            } else {
                this.update(this.editId, product)
            }
           
       }

       this.tableList()
       this.cancel()
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
            imgEdit.setAttribute("onclick","product.prepareEdition("+ JSON.stringify(this.productsArray[i]) + ")")

            let imgDelete = document.createElement('img')
            imgDelete.src = '/img/delete.svg'
            imgDelete.setAttribute("onclick","product.delete("+ this.productsArray[i].id +")")

            td_action.appendChild(imgEdit)
            td_action.appendChild(imgDelete)
        }
    }

    add(product) {
        product.productPrice = parseFloat(product.productPrice)
        this.productsArray.push(product)
        this.id ++
    }

    update(id, product) {
        for(let i = 0; i < this.productsArray.length; i++){
            if(this.productsArray[i].id == id) {
                this.productsArray[i].productName = product.productName
                this.productsArray[i].productPrice = product.productPrice
            }
        }
    }

    prepareEdition(data) {

        this.editId = data.id

        document.getElementById('product').value = data.productName
        document.getElementById('price').value = data.productPrice

        document.getElementById('btn1').innerText = 'Update'
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

    cancel() {
        document.getElementById('product').value = ''
        document.getElementById('price').value = ''

        document.getElementById('btn1').innerText = 'Save'
        this.editId = null
    }

    delete(id) {

        if(confirm('confirm the deletion of the product id: ' + id)){
            
            let tbody =document.getElementById('tbody')

            for(let i = 0; i < this.productsArray.length; i++) {
                if(this.productsArray[i].id == id) {
                    this.productsArray.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
       
    }


}

var product = new Product()