import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const table = {
  sports: 21,
  geography: 22,
  history: 23,
  animals: 27,
  games: 15,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const url = '';
const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async url => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch(err => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex(oldIndex => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = value => {
    if (value) {
      setCorrect(oldState => oldState + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  const handleQuizChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz({ ...quiz, [name]: value });
    console.log(quiz);
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { amount, category, difficulty } = quiz;

    const urlDifficulty = () => {
      if (difficulty === 'any') return '';
      return `&difficulty=${difficulty}`;
    };
    const url = `${API_ENDPOINT}amount=${amount}${urlDifficulty()}&category=${
      table[category]
    }&type=multiple`;

    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        handleQuizChange,
        handleSubmit,
        quiz,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
