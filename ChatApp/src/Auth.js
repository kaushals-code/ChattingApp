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
                    chatcolor: "none",
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
                    name: "NST",
                    preview: "Khana Kha liya kya?",
                    time: "1:00 PM",
                    chatcolor: "none",
                    messages: [
                        { id: 1, type: 'in', text: 'Kaise ho?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 2, type: 'out', text: 'Acha hu, tum?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 3, type: 'in', text: 'Bas...normal', time: '1:00 PM', date: "17.03.2026" },
                        { id: 4, type: 'out', text: 'Knaha khaya?', time: '1:00 PM', date: "17.03.2026" },
                        { id: 5, type: 'in', text: 'ha', time: '1:00 PM', date: "17.03.2026" },
                        { id: 6, type: 'out', text: 'thik hai fir..', time: '1:00 PM', date: "17.03.2026" },
                    ]
                },
                {
                    id: 3,
                    name: "Ritika",
                    preview: "Kal movie plan hai?",
                    time: "9:15 AM",
                    chatcolor: "none",
                    messages: [
                        { id: 1, type: 'in', text: 'Good morning! 🌞', time: '9:10 AM', date: "18.03.2026" },
                        { id: 2, type: 'out', text: 'Morning! Kya scene hai?', time: '9:12 AM', date: "18.03.2026" },
                        { id: 3, type: 'in', text: 'Kal movie plan hai?', time: '9:15 AM', date: "18.03.2026" },
                        { id: 4, type: 'out', text: 'Haan, chalo Avengers dekhte hai!', time: '9:16 AM', date: "18.03.2026" },
                    ]
                },
                {
                    id: 4,
                    name: "Amit",
                    preview: "Assignment complete kiya?",
                    time: "10:45 AM",
                    chatcolor: "none",
                    messages: [
                        { id: 1, type: 'in', text: 'Assignment complete kiya?', time: '10:45 AM', date: "18.03.2026" },
                        { id: 2, type: 'out', text: 'Almost done, bas last question bacha hai.', time: '10:46 AM', date: "18.03.2026" },
                        { id: 3, type: 'in', text: 'Nice, mujhe bhi bhej dena.', time: '10:47 AM', date: "18.03.2026" },
                        { id: 4, type: 'out', text: 'Sure, shaam tak bhej dunga.', time: '10:48 AM', date: "18.03.2026" },
                    ]
                },
                {
                    id: 5,
                    name: "Megha",
                    preview: "Coffee chalna hai?",
                    time: "11:30 AM",
                    chatcolor: "none",
                    messages: [
                        { id: 1, type: 'in', text: 'Coffee chalna hai?', time: '11:30 AM', date: "18.03.2026" },
                        { id: 2, type: 'out', text: 'Bilkul! Kab chalna hai?', time: '11:31 AM', date: "18.03.2026" },
                        { id: 3, type: 'in', text: 'Shaam ko 6 baje?', time: '11:32 AM', date: "18.03.2026" },
                        { id: 4, type: 'out', text: 'Perfect! Milte hai fir.', time: '11:33 AM', date: "18.03.2026" },
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