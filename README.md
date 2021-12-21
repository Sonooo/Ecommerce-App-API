# ecommerce API's 

> Build a RESTful API that can /create/read/update/delete Product and Category data from a persistence database.
``` Product Model:
{
productId : xxx,		// Product ID
productName : xxx,		// Product Name
qtyPerUnit : xxx,		// Quantity of the Product
unitPrice : xxx,			// Unit Price of the Product
unitInStock : xxx,		// Unit in Stock
discontinued :  xxx,		// Boolean (yes/no)
categoryId : xxx,		// Category ID
}
Category Model:
{
categoryId : xxx,		// Category ID
categoryName : xxx,		// Category Name
}
```

## functionality
 

> The data should be saved in the DB.

> Category ID in product table should be referenced in the category table.
> 
Provide proper unit tests.

Provide proper API documents.

>create should create the product and category.
>
>read should read particular record from the product table (if product has any category then category should be fetched in the response)
>
>readAll should read all the records from the product table (if product has any category then category should be fetched in the response)
>
>update should update one particular record of the product
>
>delete should delete one particular record of the product.




### How to run
```  git clone  https://github.com/Sonooo/solulab_assignment_NodeJs.git 

 cd solulab_assignment_NodeJs

 npm install 
 
 npm start 
 
```

### API
#### sign in / sign up route
```

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is require").isLength({
      min: 3,
    }),
  ],
  signin
);

router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 letters").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password  should be atleast 3 char").isLength({
      min: 3,
    }),
  ],
  signup
);

router.get("/signout", signout);


```


#### product routes

```
// all of actual routes
// create product route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

// read product route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete product route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

//update product route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//listing route
//get all products
router.get("/products", getAllProducts);
router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
```

## category route
```
// create routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

// read routes
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//Update routes
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

//Delete route
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);



```

### API link
```
https://tshirtstore-ecommerce-app.herokuapp.com/api/
```



