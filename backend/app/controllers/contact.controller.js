const sendEmail = require("../services/email.service");

exports.postDataMessage = async (req, res) => {
    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "dati incopleti!"
            });
        };

        // Pagina HTML completa
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="it">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nuovo Messaggio</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        background-color: #f9f9f9;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: #fff;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        padding: 20px;
                    }
                    h1 {
                        color: #4CAF50;
                        text-align: center;
                    }
                    p {
                        margin: 10px 0;
                    }
                    footer {
                        margin-top: 20px;
                        text-align: center;
                        color: #888;
                        font-size: 0.9em;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Nuovo Messaggio</h1>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>Email mittente:</strong> ${email}</p>
                    <p><strong>Messaggio:</strong></p>
                    <p>${message}</p>
                    <footer>
                        Questo messaggio è stato inviato tramite il modulo di contatto.
                    </footer>
                </div>
            </body>
            </html>
        `;

        await sendEmail(email, `Nuovo messaggio da ${name}`, htmlContent);

        return res.status(200).json({
            success: true,
            message: "email inviata con successo!"
        });

    } catch (error) {
        console.error("errore dell'invio della mail nel controller!", error.message);

        return res.status(500).json({
            success: false,
            message: "errore dell'invio della mail nel controller!",
            error: error.message
        });
    }
}