(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),i=(a(15),a(17),a(5)),l=a(1),s=a(4),m=function(e){var t=e.name,a=e.price,n=e.stock,c=e.image,r=e.addToCart,i=e.removeToCart;return o.a.createElement("div",{className:"product"},o.a.createElement("h1",null,t),o.a.createElement("img",{src:c,alt:""}),o.a.createElement("p",null,"Price: $",a," "),o.a.createElement("p",null,"Stock: ",n),o.a.createElement("button",{className:"button-52",role:"button",onClick:function(){r({name:t,price:a,stock:n})}},"Add"),o.a.createElement("button",{className:"button-52",role:"button",onClick:function(){i({name:t,price:a})}},"Remove"))};var u=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=function(e){var t=a.findIndex(function(t){return t.name===e.name});console.log(t);var n=Object(l.a)(a);if(-1!==t)n[t].quantity<n[t].stock?(n[t].quantity+=1,n[t].totalPrice=n[t].price*n[t].quantity,console.log(n),c(n)):alert("Out of Stock");else{var o=[].concat(Object(l.a)(a),[Object(i.a)({},e,{quantity:1,totalPrice:e.price,errorMessage:"Out of Stock"})]);console.log(o),c(o)}},u=function(e){var t=a.findIndex(function(t){return t.name===e.name});console.log(t);var n=Object(l.a)(a);console.log(n),-1!==t?n[t].quantity>0&&(n[t].quantity-=1,n[t].totalPrice=n[t].price*n[t].quantity,c(n)):alert("You have no items in your shopping cart")};return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"shopping-cart"},"Shopping Cart"),o.a.createElement("div",{className:"shopping"},o.a.createElement(m,{name:"Sausage",price:10,stock:5,image:"https://littlebitrecipes.com/wp-content/uploads/2022/10/italian-sausage-cooked-in-oven-sq.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Bread",price:20,stock:4,image:"https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Butter",price:30,stock:2,image:"https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Water",price:15,stock:10,image:"https://i.pinimg.com/1200x/ab/09/c9/ab09c9ec24627ec696b4a4e983d3a758.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Milk",price:6,stock:20,image:"https://www.mcqueensdairies.co.uk/wp-content/uploads/2023/02/U010-McQUEENS-PRODUCTS-007-scaled.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Tea",price:3,stock:13,image:"https://www.designbolts.com/wp-content/uploads/2022/08/Free-Organic-Tea-Standing-Pouch-Mockup-PSD-1.jpg",addToCart:r,removeToCart:u}),o.a.createElement(m,{name:"Coffee",price:4,stock:11,image:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg",addToCart:r,removeToCart:u})),o.a.createElement("div",{className:"cart"},o.a.createElement("h2",null,"Cart:"),o.a.createElement("ul",null,a.map(function(e,t){return o.a.createElement("li",{className:"list-modifier",key:t},e.name," - $",e.price," Quantity: (",e.quantity,")",o.a.createElement("br",null),"Total: $",e.price*e.quantity)})),o.a.createElement("p",{id:"total-cost"},"Total cost : $",a.reduce(function(e,t){return e+t.price*t.quantity},0))))};var p=function(){return o.a.createElement(u,null)},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null))),d()},6:function(e,t,a){e.exports=a(19)}},[[6,3,2]]]);
//# sourceMappingURL=main.b57b93fc.chunk.js.map