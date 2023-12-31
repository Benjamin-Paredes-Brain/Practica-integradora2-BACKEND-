import { Router } from "express";
import { productsFiltersController } from "../controllers/products.controller.js";
import { cartsIdController } from "../controllers/carts.controller.js"
export const router = Router()

router.get("/products", async (req, res) => {
    const productsData = await productsFiltersController(req, res);

    res.render("products", {
        style: "index.css",
        products: productsData.payload.docs,
        prevLink: productsData.prevLink,
        nextLink: productsData.nextLink,
    });
});

router.get("/carts/:cid", async (req, res) => {
    const cartData = await cartsIdController(req, res);

    res.render("carts", {
        style: "index.css",
        cart: cartData.payload
    });
});

router.get("/register", (req, res) => {
    res.render("register", {
        style: "index.css",
        user: req.session.user
    })
})

router.get("/login", (req, res) => {
    res.render("login", {
        style: "index.css",
        user: req.session.user
    })
})

router.get("/profile", (req, res) => {
    res.render("profile", {
        style: "index.css",
        user: req.session.user
    })
})

router.get('/restartPassword', (req, res) => {
    res.render('restartPassword', {
        style: "index.css",
        user: req.session.user
    })
})
