const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: 'confident-slice-411518',
});

const db = admin.firestore();

const functions = require('@google-cloud/functions-framework');

functions.http('storeEvent', async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const eventData = req.body;
    const docRef = await db.collection('events').add(eventData);
    res.status(200).send(`Event stored with ID: ${docRef.id}`);
  } catch (error) {
    console.error('Error storing event:', error);
    res.status(500).send('Internal Server Error');
  }
});
