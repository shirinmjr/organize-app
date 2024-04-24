"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import generateUniqueId from "@/app/util/generateUniqueId";
import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";
import InputSelect from "../inputs/InputSelect";

const NeedToDecide = ({ callBack, questionsData = [] }) => {
  const [questions, setQuestions] = useState(questionsData);

  useEffect(() => {
    callBack(questions);
  }, [questions]);

  const handleAddQuestion = () => {
    const question = {};
    const questionId = generateUniqueId();
    question.id = questionId;
    question.options = [];
    setQuestions((questions) => [...questions, question]);
  };

  const handleRemoveQuestion = (questionId) => {
    setQuestions((questions) => questions.filter((question) => question.id !== questionId));
  };

  const handleTextFieldChange = (e, id) => {
    const textValue = e.target.value;
    const nameValue = e.target.name;
    questions.forEach((question, index) => {
      if (question.id === id) questions[index][nameValue] = textValue;
    });
    setQuestions([...questions]);
  };

  const handleSelectChange = (selected, id) => {
    const selectedType = selected;
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
      case "text":
        questions.forEach((question, index) => {
          if (question.id === id) questions[index].type = selectedType;
        });
        setQuestions([...questions]);
        break;
      default:
        console.log("No Option Type Selected");
    }
  };

  const handleAddOptionsList = (id) => {
    questions.forEach((question, index) => {
      if (question.id === id) questions[index].options.push("");
    });
    setQuestions([...questions]);
  };

  const handleAddOption = (event, questionId, optionIndex) => {
    questions.forEach((question, index) => {
      if (question.id === questionId) questions[index].options[optionIndex] = event.target.value;
    });
    setQuestions([...questions]);
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    questions.forEach((question, index) => {
      if (question.id === questionId) questions[index].options.splice(optionIndex, 1);
    });
    setQuestions([...questions]);
  };

  return (
    <div className="event-form">
      <h3>What do you want to ask?</h3>
      <h2
        className="my-2 text-brandBlue hover:cursor-pointer hover:text-blue-800"
        onClick={handleAddQuestion}>
        Add&nbsp;
        <FontAwesomeIcon icon={faCirclePlus} />
      </h2>

      {questions &&
        questions.map((question) => {
          return (
            question.type != "dateTime" && (
              <InputWrapper>
                <div
                  key={question.id}
                  className="flex flex-col bg-blue-50 rounded-md p-2">
                  <div className="grid grid-cols-10  items-center">
                    <div className="col-span-9">
                      <InputText
                        type="text"
                        id="question"
                        name="question"
                        placeholder={"Question..."}
                        value={question.question}
                        onChange={(event) => handleTextFieldChange(event, question.id)}
                        required
                      />
                    </div>
                    <div className="col-span-1 m-2">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className=" text-red-600 hover:cursor-pointer hover:text-blue-00"
                        onClick={() => handleRemoveQuestion(question.id)}
                      />
                    </div>
                  </div>

                  <div className="my-2">
                    <InputSelect
                      name="type"
                      label={""}
                      value={question.type || ""}
                      options={[
                        { option: "How do you want people to answer?", option_id: "" },
                        { option: "Single Choice", option_id: "single" },
                        { option: "Multiple Choice", option_id: "multiple" },
                        { option: "Pick Top Three", option_id: "top3" },
                        { option: "Explain it", option_id: "text" },
                      ]}
                      onChange={(option) => handleSelectChange(option.option_id, question.id)}
                      required></InputSelect>
                  </div>

                  {question && question.type != "explain" && (
                    <h2
                      onClick={(event) => handleAddOptionsList(question.id)}
                      className="my-2 text-brandBlue hover:cursor-pointer hover:text-blue-800">
                      Add&nbsp;Options <FontAwesomeIcon icon={faCirclePlus} />
                    </h2>
                  )}

                  {question &&
                    question.options &&
                    question.type != "explain" &&
                    question.options.map((option, index) => {
                      return (
                        <div key={index}>
                          <div className="grid grid-cols-10  items-center">
                            <div className="col-span-9 m-2">
                              <InputText
                                className="w-full border border-blue-500"
                                id="option"
                                type="text"
                                name="option"
                                placeholder={"Option..."}
                                value={option}
                                onChange={(event) => handleAddOption(event, question.id, index)}
                                required
                              />
                            </div>
                            <div className="col-span-1 m-2">
                              <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="my-2 text-red-600 hover:cursor-pointer hover:text-blue-00 "
                                onClick={() => handleRemoveOption(question.id, index)}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </InputWrapper>
            )
          );
        })}
    </div>
  );
};

export default NeedToDecide;
