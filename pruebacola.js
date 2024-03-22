require('dotenv').config();
const express = require('express');
const Shopify = require('shopify-api-node');

const app = express();

const shopify = new Shopify({
    shopName: process.env.SHOP_DOMAIN,
    apiKey: process.env.API_KEY,
    password: process.env.PASSWORD
});

// Rutas de tu API
app.get('/products', async (req, res) => {
    try {
        const products = await shopify.product.list();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos de Shopify' });
    }
});

// Agrega más rutas según tus necesidades

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
