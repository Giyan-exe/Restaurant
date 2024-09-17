const menu = [
    {
       id : 1,
       category : "Breakfast",
       name : "Longsilog",
       price : 60.00,
       description : "Longsilog is a traditional Filipino dish that's served for breakfast. The dish and its name consist of a combination of longganisa sausage, sinangag (garlic rice), and itlog (fried eggs)",
       img : "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2015/02/Longsilog.jpg?ssl=1",
    },

    {
        id : 2,
        category : "Dessert",
        name : "Suman",
        price : 30.00,
        description : "It is made from glutinous rice cooked in coconut milk, often wrapped in banana leaves, coconut leaves, or buli or buri palm leaves for steaming.",
        img : "https://www.littlepassports.com/wp-content/uploads/2021/07/shutterstock_1294314706-960x640.jpg"
    },

    {
        id : 3,
        category : "Dessert",
        name : "Puto",
        price : 100.00,
        description : "Puto is a Filipino steamed cake that’s typically eaten for merienda (snack) or dessert. It has a mellow sweetness that makes it a great base for pairing it with other dishes such as salted egg or more commonly dinuguan.",
        img : "https://www.ajinomoto.com.ph/ajinomoto-static/web/wp-content/uploads/2021/03/Colorful-Puto-Pao.jpg"

    },

    {
        id : 4,
        category : "Dinner",
        name : "Chicken Soup",
        price : 45.00,
        description : "The best chicken soup you’ll ever eat is the perfect recipe to make when you’re feeling sick. Packed with anti-inflammatory ingredients like ginger, turmeric, garlic.",
        img : "https://food-images.files.bbci.co.uk/food/recipes/chickensoup_1918_16x9.jpg"        
    },
    
    {
        id : 5,
        category : "Lunch",
        name : "Barbecue",
        price : 65.00,
        description : "The term is also generally applied to the devices associated with those methods, the broader cuisines that these methods produce, and the meals or gatherings at which this style of food is cooked and served.",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1APzIk1iVqjSweqmlNd-00Z_NeB_ktqgXWA&s"
    },

    {
        id : 6,
        category : "Dinner",
        name : "Adobo",
        price : 55.00,
        description : "Philippine adobo is a popular Filipino dish and cooking process in Philippine cuisine. In its base form, meat, seafood, or vegetables are first browned in oil, and then marinated and simmered in vinegar, salt and/or soy sauce, and garlic",
        img : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Adobo_DSCF4391.jpg"
    },

    {
        id : 7,
        category : "Lunch",
        name : "Sisig",
        price : 125.00,
        description : "Sisig is a Filipino dish made from pork jowl and ears, pork belly, and chicken liver, which is usually seasoned with calamansi, onions, and chili peppers. It originates from the Pampanga region in Luzon.",
        img : "https://ucarecdn.com/0b56f5ae-b5d0-404c-8fef-d58caa776bd5/-/scale_crop/1280x720/center/-/quality/normal/-/format/jpeg/pork-sisig.jpg"
    },

    {
        id : 8,
        category : "Lunch",
        name : "Sinigang",
        price : 85.00,
        description : "Sinigang is a Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind, although it can use other sour fruits and leaves as the souring agent such as unripe mangoes or rice vinegar",
        img : "https://www.maggi.ph/sites/default/files/styles/home_stage_944_531/public/srh_recipes/442ce059c4c490e1ab61cdaef9c98511.jpg?h=28121b77&itok=Wh9ptQR3"
    },

    {
        id : 9,
        category : "Breakfast",
        name : "Fried Rice",
        price : 55.00,
        description : "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
        img : "https://www.australianeggs.org.au/assets/Uploads/Egg-fried-rice-2__FocusFillWyIwLjAwIiwiMC4wMCIsMTIwMCw2Mjhd.jpg"
    },

    {
        id : 10,
        category : "Dinner",
        name : "Grilled Bangus",
        price : 95,
        description : "Inihaw na Bangus or grilled milkfish is a perfect dish to make during warm weather. I like it best when grilled over charcoal because it gives the fish a nice smoky flavor. This recipe will give you a simple yet delicious dish that is quick and easy to make.",
        img : "https://images.yummy.ph/yummy/uploads/2022/05/inihawnabangusrecipe2-1.jpg"
    },

    {
        id : 11,
        category : "Snacks",
        name : "Candy",
        price : 15,
        description : "Snake candies.",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODJCFPOy2okYoJhxVDx_PKqWB22vGxANU1A&s"
    },
];

const sectionCenter = document.querySelector(".menu");
const btnContainer = document.querySelector(".button-container");
const filterBtns = document.querySelectorAll(".filter-btn");


window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtonss();

});

filterBtns.forEach(function (btn)  {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }
          
        });
        // console.log(menuCategory);
        if (category === 'all') {
            displayMenuItems(menu);
        }
         else {
            displayMenuItems(menuCategory); 
        }
    });
   
});
  
 function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<div class="section">
            <img src=${item.img} id="picture">
              <div class="text-box">
                <h2 class="food">${item.name}
                   <span class="value">
                    ₱${item.price}.00
                   </span>
                </h2>
                 <p class="details">
                    ${item.description}
                 </p>
              </div>
        
           </div>`;
      });
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
 }
  
 function displayMenuButtonss () {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["All"]
    );
    
    const categoryBtns = categories
      .map(function (category) {
        return `<li><button type="button" class="filter-btn" 
         data-id=${category}>
          ${category}</button></li>`;
      })
      .join("");
     btnContainer.innerHTML = categoryBtns;
     const filterBtns = document.querySelectorAll('.filter-btn');
     filterBtns.forEach(function (btn)  {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
              
            });
            // console.log(menuCategory);
            if (category === 'All') {
                displayMenuItems(menu);
            }
             else {
                displayMenuItems(menuCategory); 
            }
        });
       
    });
    
 }