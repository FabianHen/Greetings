const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hostname = "127.0.0.1";
const port = 3000;

mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/Greetings?authSource=admin`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const goalSchema = new Schema({
    greetingText: String
});

const Greeting = mongoose.model('Greetings', goalSchema);

async function initDatabase() {
    try {
        // Füge 5 Einträge hinzu, falls keine vorhanden sind
        console.log(await Greeting.create([
            { greetingText: 'Hallo!' },
            { greetingText: 'Guten Tag!' },
            { greetingText: 'Servus!' },
            { greetingText: 'Moin!' },
            { greetingText: 'Hola!' }
        ]))
        console.log('Database initialized with 5 entries.');
    } catch (err) {
        console.error('Error initializing database:', err);
    }
}

// Rufe die Funktion zum Initialisieren der Datenbank auf
initDatabase();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/get', async (req, res) => {
    let randomNumber = Math.floor(Math.random() * 5);
    const greetings = await Greeting.find()
    res.status(200).send(greetings[randomNumber].greetingText)
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});