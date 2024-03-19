This folder contains the Google Functions code for this project.

## Getting Started
If you haven't already, initialize your Firebase project:
1. Go to the Firebase Console and create a new project (or use an existing one).
2. Install Firebase CLI globally using npm:

```bash
npm install -g firebase-tools
```

3. Authenticate the Firebase CLI with your Google Account:

```bash
firebase login
```

4. Initialize Firebase in your project directory:
```bash
firebase init functions
```

This command sets up Firebase Functions in your project.
Follow the prompts to select your Firebase project and configure it with JavaScript or TypeScript.
Navigate to the functions sub-directory. This directory contains the functions code in index.js.
This code defines a Firebase Function named storeEventWithAuth that listens for HTTP POST requests.
It extracts the phoneNumber from the organizerInfo field and logs it.
Then, it stores the event data in a Firestore collection named events.

## Deployment

Deploy your function to Firebase using the Firebase CLI:
```bash
npm run deploy
```
or
```bash
firebase deploy --only functions
```

*Note*: After deployment, Google might leave behind a Docker registry.
** Delete this registry immediately to avoid an accidental billing. **
This registry is redundant and is not used after deployment.

## Testing

To test the Firebase Function call:
```bash
curl -X POST  https://us-central1-organizeapp-bb677.cloudfunctions.net/storeEventWithAuth  -H "Content-Type: application/json" -d '{
  "eventName": "Sample Event",
  "questions": [
    {
      "question": "What is your favorite color?",
      "type": "text",
      "answers": ["Blue", "Green", "Red"]
    }
  ],
  "volunteers": [
    {
      "volunteerName": "John Doe",
      "phoneNumber": "+16505554567"
    }
  ],
  "organizerInfo": {
    "firstName": "Jane",
    "lastName": "Doe",
    "phoneNumber": "+16505554567"
  }
}'
```

If everything is setup correctly, then you should see the following in the console output:
```bash
Event stored with ID: /* event ID */
Organizer Phone Number: +16505554567
```

To see the event in the Firestore database, open [https://console.firebase.google.com/project/organizeapp-bb677/firestore/data/~2Fevents~2F2mAfrDMt14mXIO4Bv3jY].

## Caveats
Authentication and authorization haven't been implemented yet (function name is misleading, work in progress)
