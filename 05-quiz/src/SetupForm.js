import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleQuizChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleQuizChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleQuizChange}
            >
              <option value="sports">Sports</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="animals">Animals</option>
              <option value="games">Video games</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleQuizChange}
            >
              <option value="any">Any difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generate quiz, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start quiz
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
