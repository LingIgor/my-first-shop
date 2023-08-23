import styled from "styled-components";

// Стили для оверлея
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  justify-content: center;
  align-items: center;
`;

// Стили для контейнера формы
const FormContainer = styled.form`
  background-color: #333;
  padding: 30px;
  border-radius: 10px;
  z-index: 11;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 400px; /* Ширина формы */
  max-width: 90%; /* Максимальная ширина для маленьких экранов */
`;

// Стили для заголовка формы
const FormTitle = styled.h2`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

// Стили для инпутов
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #444; /* Темный цвет для инпута */
  color: white;
`;

// Стили для кнопки
const SubmitButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

// Стили для текста над кнопкой
const TextAboveButton = styled.p`
  color: white;
  text-align: center;
`;

// Экспорт всех стилей
export {
  Overlay,
  FormContainer,
  FormTitle,
  Input,
  SubmitButton,
  TextAboveButton,
};
