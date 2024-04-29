import React, {useState} from 'react';
import "./index.css"
import PoliticalCompass from "./PoliticalCompass"
import Ideologies from './Ideologies';

function Questions(props) {
  const { i, onSliderChange } = props;
  const [sliderValue, setSliderValue] = useState(0);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(i); // Step 1
  const questions = [
    { question: "Я за легалізацію каннабісу", effect: { y: -5, x: 5 }},
    { question: "Я вважаю, що держава не має фінансувати мистецтво", effect: { x: 5, y:0 }},
    { question: "Вільна торгівля з країнами, що розвиваються, набагато краще, ніж пряма фінансова допомога їм", effect: { x: 5, y:0 }},
    { question: "Реалібітація зловмисників краще, ніж їхнє покарання", effect: { x:0,y: -5 }},
    { question: "Деякі релігії та народи чинять більше проблем, ніж інші", effect: { x:0,y: 5 }},
    { question: "Це ніколи не завершується добре, коли держава втручається в справи бізнесу, навіть якщо вони не порушували закону", effect: { x: 5, y:0 }},
    { question: "Держава має безоплатно надавати медичні послуги", effect: { x: -5, y:0 }},
    { question: "Намагання держави зі створення робочих місць загалом є гарною ідеєю", effect: { x: -5, y:0 }},
    { question: "Проституція має бути легалізованою", effect: { x: 5, y: -5 }},
    { question: "Сильна армія краще за сильну дипломатію", effect: { x:0, y: 5 }},
    { question: "Евтаназія має бути легалізованою", effect: { x:0, y: -5 }},
    { question: "Зарплати СЕО та банкірів мають бути обмеженими", effect: { x: -5, y:0 }},
    { question: "Держава має ввести податок на розкіш, і ці кошти передавати вразливим верствам населення", effect: { x: -5, y:0 }},
    { question: "Моя країна має надавати допомогу малорозвиненим державам", effect: { y: -5, x: 5 }},
    { question: "Титули монархів та аристократів мають бути знищеними", effect: { x: 5, y:0 }},
    { question: "Це цілком справедливо, аби держава надавала перевагу більшості, ніж меншості", effect: { x:0, y: 5 }},
    { question: "Гомосексуальні пари мають мати такі ж права, як і гетеросексуальні пари, включаючи право на всиновлення", effect: { x:0, y: -5}},
    {questions: "", effect: {x: 0, y: 0}}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].effect.x !== undefined) {
      if(onSliderChange!=0){setXValue((xValue + questions[currentQuestionIndex].effect.x))};
    }
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].effect.y !== undefined) {
      if(onSliderChange!=0){setYValue((yValue + questions[currentQuestionIndex].effect.y))};
    }
    setSliderValue(0); // Reset slider value
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Go to the next question
    onSliderChange(sliderValue, xValue, yValue);
  };
  
  const handleSkip = () => {
    setXValue((xValue - questions[currentQuestionIndex].effect.x))
    setYValue((yValue - questions[currentQuestionIndex].effect.y))
    setCurrentQuestionIndex(currentQuestionIndex); // Step 2
  };
  
  return (
    <div>
    {questions[i] && questions[i].question && (
    <div>{questions[i].question}</div>)}
      {i >= questions.length-1 ? null : (<div id='Form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="vol">Наскільки я погоджуюсь з цією думкою (від різко негативного до різко позитивного):</label>
          <div><input
            type="range"
            id="vol"
            name="vol"
            min="-2"
            max="2"
            value={sliderValue}
            onChange={(e) =>setSliderValue(Number(e.target.value))}
          /></div>
          <button type="submit">Відповісти</button>
          <button onClick={handleSkip}>Пропустити</button>
        </form>
      </div>)}
      {i == questions.length - 1 ? (
        <div>Твій результат <Ideologies x={xValue} y={yValue}/></div>
      ) : null}
      {questions[currentQuestionIndex] && (
      <div>effect x={questions[currentQuestionIndex].effect.x} y={questions[currentQuestionIndex].effect.y}</div>
    )}
      <div>current question {currentQuestionIndex}</div>
      <div>x={xValue} y={yValue}</div>
      <PoliticalCompass x={xValue} y={yValue}/>
      <Ideologies x={xValue} y={yValue}/>
    </div>
  )
}

export default Questions;