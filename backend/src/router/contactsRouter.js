const express = require("express");
const router = express.Router();
const { sendContactForm } = require("../service/email");

router.post("/", async (req, res) => {
    try {
        const { nombre, correo, mensaje } = req.body;

        if (!nombre || !correo || !mensaje) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        await sendContactForm({ nombre, correo, mensaje });

        res.json({ success: true, message: "Correo enviado correctamente ✅" });
    } catch (err) {
        console.error("❌ Error al enviar correo:", err);
        res.status(500).json({ error: "No se pudo enviar el correo" });
    }
});

module.exports = router;
