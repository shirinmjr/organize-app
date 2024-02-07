This folder contains the Google Functions code for this project.

## Getting Started
1. To install dependencies, run:
```bash
npm install
```

2. To install gcloud CLI, follow the steps at [https://cloud.google.com/sdk/docs/install]

3. After installation, authenticate to Google Cloud:
```bash
gcloud auth application-default login
```

Ignore the "quota exceeded" warning.

4. To run Google Functions locally, run:
```bash
npm start
```

5. To test the Google Function call:
```bash
curl -X POST http://localhost:8080 -H "Content-Type: application/json" -d '{
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
      "phoneNumber": "1234567890"
    }
  ],
  "organizerInfo": {
    "firstName": "Jane",
    "lastName": "Doe",
    "phoneNumber": "0987654321"
  }
}'
```

If everything is setup correctly, then you should see the following in the console output:
```bash
Event stored with ID: /* event ID */
```

To see the event in the Firestore database, open [https://console.cloud.google.com/firestore/databases/-default-/data/panel?authuser=1&project=confident-slice-411518]

## Deploying to Google Cloud

Run the following command:
```bash
gcloud functions deploy storeEvent --runtime nodejs14 --trigger-http --allow-unauthenticated --region=nam5
```

## Caveats
TLS, authentication and authorization haven't been implemented yet
