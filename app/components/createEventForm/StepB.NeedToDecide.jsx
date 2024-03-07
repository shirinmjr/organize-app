"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faX } from "@fortawesome/free-solid-svg-icons";
import generateUniqueId from "@/app/util/generateUniqueId";

const NeedToDecide = ({ callBack, questionsData = [] }) => {
  const [questions, setQuestions] = useState(questionsData);

  useEffect(() => {
    callBack(questions);
  }, [questions]);

  const createQuestion = () => {
    const question = {};
    const questionId = generateUniqueId();
    question.id = questionId;
    question.options = [];
    setQuestions((questions) => [...questions, question]);
  };

  const handleTextFieldChange = (e, id) => {
    const textValue = e.target.value;
    const nameValue = e.target.name;
    console.log(
      "updating ",
      nameValue,
      " for: ",
      id,
      " with value ",
      textValue
    );
    questions.forEach((question, index) => {
      if (question.id === id) questions[index][nameValue] = textValue;
    });
    setQuestions([...questions]);
  };

  const handleSelectChange = (e, id) => {
    const selectedType = e.target.value;
    console.log("select type: ", selectedType, "for question: ", id);

    switch (selectedType) {
      case "single":
      case "multiple":
      case "top3":
        questions.forEach((question, index) => {
          if (question.id === id) questions[index].type = selectedType;
        });
        setQuestions([...questions]);
        break;
      case "explain":
        questions.forEach((question, index) => {
          if (question.id === id) questions[index].type = selectedType;
        });
        setQuestions([...questions]);
        break;
      default:
        console.log("No Option Type Selected");
    }
  };

  const createOption = (id) => {
    questions.forEach((question, index) => {
      if (question.id === id) questions[index].options.push("");
    });
    setQuestions([...questions]);
  };

  const handleAddOption = (event, questionId, optionIndex) => {
    questions.forEach((question, index) => {
      if (question.id === questionId)
        questions[index].options[optionIndex] = event.target.value;
    });
    setQuestions([...questions]);
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    questions.forEach((question, index) => {
      if (question.id === questionId)
        questions[index].options.splice(optionIndex, 1);
    });
    setQuestions([...questions]);
  };

  const handleRemoveQuestion = (questionId) => {
    setQuestions((questions) =>
      questions.filter((question) => question.id !== questionId)
    );
  };

  return (
    <div className="event-form">
      <div className="flex gap-7 form-q-title">
        <h3 className="">What does your group need to make decisions about?</h3>
        <h2
          className="text-brandBlue hover:cursor-pointer hover:text-blue-800"
          onClick={createQuestion}
        >
          Add&nbsp;
          <FontAwesomeIcon icon={faCirclePlus} />
        </h2>
      </div>

      {questions &&
        questions.map((question) => {
          return (
            <div
              key={question.id}
              className="p-2 my-1 border border-2 bg-blue-50 rounded-md border-brandBlue event-form"
            >
              <div className="flex items-center w-full text-xl">
                <input
                  className="mb-4 input-main"
                  required
                  type="text"
                  id="question"
                  name="question"
                  value={question.question || ""}
                  onChange={(event) =>
                    handleTextFieldChange(event, question.id)
                  }
                />
                <FontAwesomeIcon
                  icon={faX}
                  className="m-2 text-red-600 hover:cursor-pointer hover:text-blue-00 "
                  onClick={() => handleRemoveQuestion(question.id)}
                />
              </div>
              <div className="flex justify-center mb-4 flex-col-2">
                <h5 className="text-brandBlue">
                  How do you want people to answer:
                </h5>
                <select
                  className="block bg-white border border-brandBlue rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-princetonOrange hover:cursor-pointer"
                  id="type"
                  name="type"
                  value={question.type || ""}
                  onChange={(event) => handleSelectChange(event, question.id)}
                >
                  <option value="">Select</option>
                  <option value="single">Single Choice</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="top3">Pick Top Three</option>
                  <option value="explain">Explain it</option>
                </select>
              </div>
              {question && question.type != "explain" && (
                <h2
                  onClick={(event) => createOption(question.id)}
                  className="mb-2 text-brandBlue hover:cursor-pointer hover:text-blue-800"
                >
                  Add&nbsp;Options <FontAwesomeIcon icon={faCirclePlus} />
                </h2>
              )}

              {question &&
                question.options &&
                question.type != "explain" &&
                question.options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <input
                        className="input-secondary"
                        id="option"
                        type="text"
                        name="option"
                        value={option || ""}
                        onChange={(event) =>
                          handleAddOption(event, question.id, index)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faX}
                        className="m-2 text-red-600 hover:cursor-pointer hover:text-blue-00 "
                        onClick={() => handleRemoveOption(question.id, index)}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default NeedToDecide;
