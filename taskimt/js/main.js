fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    data.forEach(el => {
        console.log(data);
        const product=document.querySelector('#product')
        product.innerHTML +=
        `<div class="col-3">
        <div class="card" style="width: 18rem;">
          <div class="icons mt-2 my-3">
            <i class="las la-balance-scale"></i>
            <i class="las la-heart"></i>
          </div>
          <img src="${el.image}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <span class="text-secondary">${el.title}</span>
            <h5 class="card-title">${el.price}</h5>
            <button class="div"></button>
            <button class="div1"></button>
            <button class="div2"></button>
            <button class="div3"></button>
            <div class="mt-2 star">
              <i class="las la-star"></i>
              <i class="las la-star"></i>
              <i class="las la-star"></i>
              <i class="las la-star"></i>
              <i class="las la-star"></i>
            </div>
            <button class="mt-2 faizsiz">${el.description}</button>
            <button class="ucuz mt-2">Ucuz tapsan, endirimle al</button>
            <div class=" mt-2">
              <button class="stok"><i class="las la-home"></i>Stokda var</button>
            </div>
            <a href="#" class=" sebet mt-4 btn btn-primary">Sebete elave et</a>
          </div>
        </div>
      </div>
        
        `
    });;
})