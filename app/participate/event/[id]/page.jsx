const mockEvent = {
  eventName: "Sample Event",
  questions: [
    // can we add an id field?
    {
      question: "What is your favorite color?",
      type: "text",
      answers: ["Blue", "Green", "Red"], // are these options the user picks?
    },
  ],
  volunteers: [
    {
      volunteerName: "John Doe",
      phoneNumber: "1234567890",
    },
  ],
  organizerInfo: {
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "0987654321",
  },
};

export default function Page({ params }) {
  return <div>{params.id}</div>;
}
