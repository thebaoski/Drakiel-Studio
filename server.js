const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Inicjalizacja Resend kluczem z pliku .env
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-booking', async (req, res) => {
  const { client_name, client_email, session_type, guests_info, session_date, session_hours, client_notes, total_price } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Drakiel Studio <onboarding@resend.dev>', 
      to: ['thebaoski@gmail.com'], 
      subject: `Nowa rezerwacja sesji od: ${client_name}`,
      html: `
        <h2>Nowa rezerwacja sesji w Drakiel Studio</h2>
        <p><strong>Klient:</strong> ${client_name}</p>
        <p><strong>E-mail klienta:</strong> ${client_email}</p>
        <p><strong>Pakiet:</strong> ${session_type}</p>
        <p><strong>Goście:</strong> ${guests_info}</p>
        <p><strong>Data:</strong> ${session_date}</p>
        <p><strong>Godziny:</strong> ${session_hours}</p>
        <p><strong>Uwagi:</strong> ${client_notes}</p>
        <p><strong>Łączna kwota:</strong> ${total_price}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Błąd wysyłki Resend:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serwer backendowy działa na porcie ${PORT}`);
});