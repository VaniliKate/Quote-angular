$(document).ready(function () {
  if (localStorage.getItem("name")) {
    $("#login").hide()
  }
  //get categories
  function getCategories() {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      return categories;
    }
    localStorage.setItem("categories", JSON.stringify([]));
    let categories = JSON.parse(
      localStorage.getItem("categories", JSON.stringify([]))
    );
    return categories;
  }

  //Get products
  function getProducts() {
    if (localStorage.getItem("products")) {
      console.log("in run");
      let products = JSON.parse(localStorage.getItem("products"));
      return products;
    }
    localStorage.setItem("products", JSON.stringify([]));
    let products = JSON.parse(
      localStorage.getItem("products", JSON.stringify([]))
    );
    return products;
  }

  //Add category
  function addCategory(gategoryName) {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      let itemId = categories.length + 1;
      let item = { id: itemId, name: gategoryName };
      localStorage.setItem("categories", JSON.stringify([...categories, item]));
      return item;
    }
    console.log("out run");
    localStorage.setItem("categories", JSON.stringify([]));
    let categories = JSON.parse(localStorage.getItem("categories"));
    let itemId = categories.length + 1;
    let item = { id: itemId, name: gategoryName };
    localStorage.setItem("categories", JSON.stringify([...categories, item]));
    return item;
  }
  //Add product
  function addProduct(
    productCategory,
    productName,
    productImage,
    productPrice
  ) {
    if (localStorage.getItem("products")) {
      console.log("in run");
      let products = JSON.parse(localStorage.getItem("products"));
      let itemId = products.length + 1;
      let item = {
        id: itemId,
        name: productName,
        category: productCategory,
        image: productImage,
        price: productPrice,
      };
      localStorage.setItem("products", JSON.stringify([...products, item]));
      return item;
    }
    console.log("out run");
    localStorage.setItem("products", JSON.stringify([]));
    let products = JSON.parse(localStorage.getItem("products"));
    let itemId = products.length + 1;
    let item = {
      id: itemId,
      name: productName,
      category: productCategory,
      image: productImage,
      price: productPrice,
    };
    localStorage.setItem("products", JSON.stringify([...products, item]));
    return item;
  }
  //Retrieve categories, products from store
  let categories = getCategories();
  let products = getProducts();
  console.log(products);
  //Append category to product select element
  if (categories) {
    categories.forEach((item) => {
      $("#product-category").append(
        `<option value=${item.name}>${item.name}</option>`
      );
    });
  } else {
    $("#product-category").append(
      `<option value="none">No Categories</option>`
    );
  }

  //Append categories to table
  if (categories === null || categories.length == 0) {
    $(".category-list").append(
      `<tr id="no-cat">
        
        <td>There are no categories<td>
    </tr>`
    );
  } else {
    categories.forEach((element) => {
      $(".category-list").append(
        `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.name}</td>
    </tr>`
      );
    });
  }
  //Append products to table
  if (products === null || products.length == 0) {
    $(".product-list").append(
      `<tr id="no-prod">
        <td>There are no products<td>
    </tr>`
    );
  } else {
    products.forEach((element) => {
      $(".product-list").append(
        `<tr>
        <th scope="row">${element.id}</th>
        <td><img src='./images/${element.image}' width='50px' style="border-radius:10px;" /></td>
        <td>${element.name}</td>
        <td>${element.category}</td>
        <td>Ksh. ${element.price}</td>
    </tr>`
      );
    });
  }
  //Append one category to table on add
  $(".add-category").click(function () {
    let categoryName = $("#category-name").val();
    if (!categoryName) {
      alert("Category name cannot be empty");
      return;
    }
    let category = addCategory(categoryName);
    $("#no-cat").remove();
    $(".category-list").append(`<tr>
                <th scope="row">${category.id}</th>
                <td>${category.name}</td>
                
              </tr>`);
  });
  //Append one product to table on add
  $(".add-product").click(function () {
      let productName = $("#product-name").val();
      let productImage = $("#product-image").val();
      let productCategory = $("#product-category").val();
      let productPrice = $("#product-price").val();
      let slicedUrl = productImage.slice(12)
      if (!productName || !slicedUrl || !productCategory || !productPrice) {
        console.log(productName, slicedUrl, productCategory, productPrice);
      alert("Missing field");
      return;
    }
    let category = addProduct(productCategory,productName,slicedUrl,productPrice);
    $("#no-prod").remove();
    $(".product-list").append(
      `<tr><th scope='row'>${category.id}</th><td><img src='./images/${slicedUrl}' width='50px' style="border-radius:10px;"/></td><td>${category.name}</td><td>${category.category}</td><td>Ksh. ${category.price}</td></tr>`
    );
  });
});
