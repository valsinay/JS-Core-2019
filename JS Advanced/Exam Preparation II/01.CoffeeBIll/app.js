function addProduct() {
    let product = document.querySelector('input');
    let price = document.getElementsByTagName('input')[1];

    if (product.value && price.value) {

        let productList = document.getElementById("product-list");
        let total = document.querySelector('tfoot').getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[1];


        let tr = document.createElement('tr');

        let tdProduct = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdProduct.textContent = product.value;
        tdPrice.textContent = price.value;

        tr.appendChild(tdProduct)
        tr.appendChild(tdPrice);

        productList.appendChild(tr);

      
        total.textContent = +total.textContent + +price.value;

    product.value = "";
    price.value = "";
    }
};