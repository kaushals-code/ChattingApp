// Auth.js
let user = null;

export function auth(username, password) {
    if (username === "kaushal" && password === "1234") {
        user = {
            status: "goodtogo",
            id: "001",
            name: "Kaushal Singh Thakur",
            email: "kaushal21gs@gmail.com",
            chats: [
                {
                    id: 1,
                    name: "Triansh Singh",
                    preview: 'Bhai, aaj meeting hai kya?',
                    time: "12:24 PM",
                    messages: [
                        { id: 1, type: 'in', text: 'Hey! Kya haal hai?', time: '12:30 PM', date: "15.03.2026" },
                        { id: 2, type: 'out', text: 'Sab badhiya yaar! Tu bata.', time: '12:31 PM', date: "15.03.2026" },
                        { id: 3, type: 'in', text: 'Kal presentation kaisi gayi?', time: '12:33 PM', date: "15.03.2026" },
                        { id: 4, type: 'out', text: 'Ekdum mast gayi! Client bohot khush tha 😄', time: '12:34 PM', date: "15.03.2026" },
                        { id: 5, type: 'in', text: 'Nice nice! Toh ab party kab de raha hai? 🎉', time: '12:35 PM' },
                        { id: 6, type: 'out', text: 'Haha definitely this weekend!', time: '12:36 PM', date: "15.03.2026" },
                        { id: 7, type: 'in', text: 'Bhai, aaj meeting hai kya?', time: '12:45 PM', date: "15.03.2026" },
                    ]
                },
                {
                    id: 2,
                    name: "NTS",
                    preview: "Khana Kha liya kya?",
                    time: "1:00 PM",
                    messages: [
                        { id: 1, type: 'in', text: 'Kaise ho?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 2, type: 'out', text: 'Acha hu, tum?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 3, type: 'in', text: 'Bas...normal', time: '1:00 PM', date: "17.03.2026" },
                        { id: 4, type: 'out', text: 'Knaha khaya?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 5, type: 'in', text: 'ha', time: '1:00 PM', date: "17.03.2026" },
                        { id: 6, type: 'out', text: 'thik hai fir..', time: '1:00 PM', date: "17.03.2026" },
                    ]
                }
            ]
        };
    } else {
        user = { status: "badtogo" };
    }
}

export function giveStatus() {
    return user;
}