(this.webpackJsonpairbnb=this.webpackJsonpairbnb||[]).push([[0],{61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(0),s=i.n(c),a=i(23),r=i.n(a),o=(i(61),i(62),i(63),i(20)),d=(i(64),i(98)),h=(i(65),i(66),i(67),i(46)),j=i(47),l=i.n(j),b=i(5);var m=function(){var e=Object(b.f)(),t=Object(c.useState)(new Date),i=Object(o.a)(t,2),s=i[0],a=i[1],r=Object(c.useState)(new Date),j=Object(o.a)(r,2),m=j[0],p=j[1],u={startDate:s,endDate:m,key:"selection"};return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)(h.DateRangePicker,{ranges:[u],onChange:function(e){a(e.selection.startDate),p(e.selection.endDate)}}),Object(n.jsxs)("h2",{children:["Number of guests ",Object(n.jsx)(l.a,{})]}),Object(n.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(n.jsx)(d.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var p=function(){var e=Object(b.f)(),t=Object(c.useState)(!1),i=Object(o.a)(t,2),s=i[0],a=i[1];return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsxs)("div",{className:"banner__search",children:[s&&Object(n.jsx)(m,{}),Object(n.jsx)(d.a,{onClick:function(){return a(!s)},className:"banner__searchButton",variant:"outlined",children:s?"Hide":"Search Dates"})]}),Object(n.jsxs)("div",{className:"banner__info",children:[Object(n.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(n.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you."}),Object(n.jsx)(d.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};i(80);var u=function(e){var t=e.src,i=e.title,c=e.description,s=e.price;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:t,alt:""}),Object(n.jsxs)("div",{className:"card__info",children:[Object(n.jsx)("h2",{children:i}),Object(n.jsx)("h4",{children:c}),Object(n.jsx)("h3",{children:s})]})]})};var x=function(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(p,{}),Object(n.jsxs)("div",{className:"home__section",children:[Object(n.jsx)(u,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(n.jsx)(u,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(n.jsx)(u,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(n.jsxs)("div",{className:"home__section",children:[Object(n.jsx)(u,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(n.jsx)(u,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(n.jsx)(u,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})},O=(i(81),i(49)),g=i.n(O),f=i(50),v=i.n(f),_=i(51),w=i.n(_),y=i(99),N=i(22);var P=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(N.b,{to:"/",children:Object(n.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(n.jsxs)("div",{className:"header__center",children:[Object(n.jsx)("input",{type:"text"}),Object(n.jsx)(g.a,{})]}),Object(n.jsxs)("div",{className:"header__right",children:[Object(n.jsx)("p",{children:"Become a host"}),Object(n.jsx)(v.a,{}),Object(n.jsx)(w.a,{}),Object(n.jsx)(y.a,{})]})]})};i(82);var k=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(n.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},S=(i(83),i(84),i(52)),F=i.n(S),L=i(53),W=i.n(L);var A=function(e){var t=e.img,i=e.location,c=e.title,s=e.description,a=e.star,r=e.price,o=e.total;return Object(n.jsxs)("div",{className:"searchResult",children:[Object(n.jsx)("img",{src:t,alt:""}),Object(n.jsx)(F.a,{className:"searchResult__heart"}),Object(n.jsxs)("div",{className:"searchResult__info",children:[Object(n.jsxs)("div",{className:"searchResult__infoTop",children:[Object(n.jsx)("p",{children:i}),Object(n.jsx)("h3",{children:c}),Object(n.jsx)("p",{children:"____"}),Object(n.jsx)("p",{children:s})]}),Object(n.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(n.jsxs)("div",{className:"searchResult__stars",children:[Object(n.jsx)(W.a,{className:"searchResult__star"}),Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:a})})]}),Object(n.jsxs)("div",{className:"searchResults__price",children:[Object(n.jsx)("h2",{children:r}),Object(n.jsx)("p",{children:o})]})]})]})]})};var B=function(){return Object(n.jsxs)("div",{className:"searchPage",children:[Object(n.jsxs)("div",{className:"searchPage__info",children:[Object(n.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(n.jsx)("h1",{children:"Stays nearby"}),Object(n.jsx)(d.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(n.jsx)(d.a,{variant:"outlined",children:"Type of place"}),Object(n.jsx)(d.a,{variant:"outlined",children:"Price"}),Object(n.jsx)(d.a,{variant:"outlined",children:"Rooms and beds"}),Object(n.jsx)(d.a,{variant:"outlined",children:"More filters"})]}),Object(n.jsx)(A,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),Object(n.jsx)(A,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),Object(n.jsx)(A,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(n.jsx)(A,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(n.jsx)(A,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),Object(n.jsx)(A,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(n.jsx)(A,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"})]})};var R=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/search",children:Object(n.jsx)(B,{})}),Object(n.jsx)(b.a,{path:"/",children:Object(n.jsx)(x,{})})]}),Object(n.jsx)(k,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.32ccf716.chunk.js.map