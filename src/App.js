import "./App.css";
import React, { useState } from "react";
import generatePassword from "./utils/generatePassword";

function App() {
  const [values, setValues] = useState({});
  const [password, setPassword] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
  }

  function handleBtnClick() {
    if (!values.passwordLength) {
      setError("Введите длину желаемого пароля");
      document.querySelector(".page__form-error").classList.add("page__form-error_visible");
      document.querySelector(".page__subtitle").classList.remove("page__subtitle_visible");
      document.querySelector(".page__description").classList.remove("page__description_visible");
    } else if (values.passwordLength < 8) {
      setError("Длина пароля не должна быть меньше 8 символов");
      document.querySelector(".page__form-error").classList.add("page__form-error_visible");
      document.querySelector(".page__subtitle").classList.remove("page__subtitle_visible");
      document.querySelector(".page__description").classList.remove("page__description_visible");
    } else {
      document.querySelector(".page__form-error").classList.remove("page__form-error_visible");
      setPassword(generatePassword(values.passwordLength));

      if (Number(values.passwordLength) === 8) {
        setYears("Для подбора пароля потребуется 12 дней");
      } else if (Number(values.passwordLength) === 9) {
        setYears("Для подбора пароля потребуется 4 месяца");
      } else if (Number(values.passwordLength) === 10) {
        setYears("Для подбора пароля потребуется 4 года");
      } else if (Number(values.passwordLength) === 11) {
        setYears("Для подбора пароля потребуется 33 года");
      } else if (Number(values.passwordLength) === 12) {
        setYears("Для подбора пароля потребуется 47 лет");
      } else if (Number(values.passwordLength) > 12) {
        setYears("Для подбора пароля потребуется вечность, но как его запомнить?");
      }

      document.querySelector(".page__subtitle").classList.add("page__subtitle_visible");
      document.querySelector(".page__description").classList.add("page__description_visible");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleBtnClick();
  }
  return (
    <div className="page">
      <div className="content">
        <div className="page__circle"></div>
        <div className="page__wrapper">
          <header className="page__header">
            <h1 className="page__title">Приложение генерации паролей</h1>
          </header>
          <main className="page__main">
            <form className="page__form" action="#" name="passwordForm" onSubmit={handleSubmit}>
              <label className="page__form-label">
                {"Введите длину пароля (минимум 8): "}
                <input
                  className="page__form-input"
                  type="text"
                  name="passwordLength"
                  onChange={handleChange}
                ></input>
              </label>
              <p className="page__form-error">{error}</p>
            </form>
            <button type="button" className="page__btn" onClick={handleBtnClick}>
              <span className="page__btn-text">Сгенерировать</span>
              <span className="page__btn-waves"></span>
            </button>
            <div className="page__subtitle">
              Ваш новый пароль: <span className="page__password">{password}</span>
            </div>
            <p className="page__description">{years}</p>
          </main>
          <footer className="page__footer">
            <a href="https://github.com/nikolaevfo" target="blank" className="page__footer-link">
              nikolaevfo
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
