function e(e){const t=this.closest(".filters-wrap"),s=t.querySelector(".filters-down-svg"),n=t.querySelector("ul");n.classList.contains("list-active")?n.classList.remove("list-active"):n.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function t(e){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function s(e){const t=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),n=e.target.textContent;t.textContent=n,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function n(e){const t=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),n=e.target.textContent;t.textContent=n,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}const i=document.querySelector(".filters-form"),a=document.querySelector(".filters-categories"),c=document.querySelector(".filters-allTypes"),r=document.querySelectorAll(".filters-down-svg"),l=document.querySelectorAll(".filters-categories-item"),o=document.querySelectorAll(".filters-allTypes-item");let d={};a.addEventListener("click",e),c.addEventListener("click",e),r.forEach((e=>{e.addEventListener("click",t)})),l.forEach((e=>{e.addEventListener("click",s)})),o.forEach((e=>{e.addEventListener("click",n)})),i.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".filters-allTypes").textContent,s=document.querySelector(".filters-categories").textContent,n=document.querySelector(".filters-input").value;d={endpoint:t,category:s,searchWord:n}}));let u=document.querySelector(".products-list-general");document.querySelector(".products-list-popular");const p=function(e){console.log(e);const{img:t,name:s,category:n,size:i,popularity:a,price:c,id:r}=e[0];return`\n      <li class="product-card-general">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="${t}"\n              alt="${s}"\n            />\n          </div>\n  \n              <div class="general-card-container" >\n                  <h3 class="general-card-title">${s}</h3>\n                  <div class="general-span-container">\n                  <span class="general-span-info">Category:<span class="span-info-value">${n}</span></span>\n                  <span class="general-span-info>Size:<span class="span-info-value">${i}</span></span>\n                  <span class="general-span-info">Popularity:<span class="span-info-value">${a}</span></span>\n                  </div>\n              </div>\n    \n              <div class="general-card-price">\n                  <span class="general-span-price">&#36;${c}</span>\n                  <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="./images/icons.svg#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      `}([{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}]);u.insertAdjacentHTML("beforeend",p);
//# sourceMappingURL=cart.32a3348d.js.map
