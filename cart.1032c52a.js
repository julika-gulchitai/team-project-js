!function(){function t(t){var e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg"),n=e.querySelector("ul");n.classList.contains("list-active")?n.classList.remove("list-active"):n.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function e(t){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function s(t){var e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),n=t.target.textContent;e.textContent=n,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function n(t){var e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),n=t.target.textContent;e.textContent=n,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}document.querySelector(".filters-form");var c=document.querySelector(".filters-categories"),a=document.querySelector(".filters-allTypes"),i=document.querySelectorAll(".filters-down-svg"),r=document.querySelectorAll(".filters-categories-item"),o=document.querySelectorAll(".filters-allTypes-item");c.addEventListener("click",t),a.addEventListener("click",t),i.forEach((function(t){t.addEventListener("click",e)})),r.forEach((function(t){t.addEventListener("click",s)})),o.forEach((function(t){t.addEventListener("click",n)}));var l=document.querySelector(".products-list-general"),d=document.querySelector(".products-list-popular"),u=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:8}],p=function(t){console.log(t);var e=t[0],s=e.img,n=e.name,c=e.category,a=e.size,i=e.popularity,r=e.price,o=e.id;return'\n      <li class="product-card">\n          <div class="img-wrapper">\n            <img\n              class="card-img"\n              src="'.concat(s,'"\n              alt="').concat(n,'"\n            />\n          </div>\n  \n              <div class="card-info" >\n                  <h3 class="card-title">').concat(n,'</h3>\n                  <span class="card-info">Category: ').concat(c,'</span>\n                  <span class="card-info">Size: ').concat(a,'</span>\n                  <span class="student-info">Popularity: ').concat(i,'</span>\n              </div>\n    \n              <div class="card-price">\n                  <span class="span-price">&#36;').concat(r,"</span>\n                  <button data-id=").concat(o,' type="submit" class="addToCart-btn js-addToCart-btn">\n                      <svg class="cart-svg" width="18" height="18">\n                          <use href="./images/icons.svg#icon-shopping-cart"></use>\n                      </svg>\n                  </button>\n              </div>\n      </li>\n      ')}(u);l.insertAdjacentHTML("beforeend",p);var v,g,m,f,y,h,L,S=(v=u[0],g=v.img,m=v.name,f=v.category,y=v.size,h=v.popularity,L=v.id,'\n        <li class="product-card">\n            <div class="img-wrapper">\n              <img\n                class="card-img"\n                src="'.concat(g,'"\n                alt="').concat(m,'"\n              />\n            </div>\n    \n                <div class="card-info" >\n                    <h3 class="card-title">').concat(m,'</h3>\n                    <span class="card-info">Category: ').concat(f,'</span>\n                    <span class="card-info">Size: ').concat(y,'</span>\n                    <span class="student-info">Popularity: ').concat(h,"</span>\n                </div>\n                    \n                <button data-id=").concat(L,' type="submit" class="addToCart-btn js-addToCart-btn">\n                    <svg class="cart-svg" width="12" height="12">\n                        <use href="./images/icons.svg#icon-shopping-cart"></use>\n                    </svg>\n                </button>\n            \n        </li>\n        '));d.insertAdjacentHTML("beforeend",S)}();
//# sourceMappingURL=cart.1032c52a.js.map
