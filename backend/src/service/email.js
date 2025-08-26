const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


async function sendContactForm({ nombre, correo, mensaje }) {
    const mailOptions = {
        from: `"${nombre}" <${correo}>`,  // remitente = usuario del formulario
        to: process.env.EMAIL_USER,       // destino = tu propio correo
        subject: `Nuevo mensaje de ${nombre}`,
        text: `De: ${nombre} (${correo})\n\n${mensaje}`,
        html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><b>Nombre:</b> ${nombre}</p>
            <p><b>Correo:</b> ${correo}</p>
            <p><b>Mensaje:</b></p>
            <p>${mensaje}</p>
        `
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendContactForm };
