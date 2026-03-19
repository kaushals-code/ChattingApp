import express, { urlencoded } from "express";
import { ref, get, push } from "firebase/database";
import db from "./firebase.js";

const app = express();
const port = 5000;

app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/users", async (req, res) => {
    try {
        const snapshot = await get(ref(db, "/users"));
        const dat = snapshot.val();
        res.send(dat);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.post("/api/adduser", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // const nextId = "" + (await get(ref(db, "/meta/Next_uid")));

    const newPerson = {
        status: "goodtogo",
        name: username,
        email: email,
        password: password,
        preview: "",
        time: "",
        chats: {}
    };

    try {
        await push(ref(db, "/users"), {
        });
        res.send({ status: "Person added successfully" });
    } catch (err) {
        res.send(err);
    }
})

app.post("/api/addmessage", async (req, res) => {
    const message = req.body.message;

})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});