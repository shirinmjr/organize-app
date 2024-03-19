const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.storeEventWithAuth = functions.https.onRequest(async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const eventData = req.body;
    const organizerPhoneNumber = eventData.organizerInfo.phoneNumber;

    // Log the phone number (or perform authentication/verification here)
    console.log(`Organizer Phone Number: ${organizerPhoneNumber}`);

    // Store event data in Firestore
    const db = admin.firestore();
    const docRef = await db.collection("events").add(eventData);
    return res.status(200).send(`Event stored with ID: ${docRef.id}, 
      Organizer Phone Number: ${organizerPhoneNumber}`);
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).send("Internal Server Error");
  }
});
