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
    { question: "Я за легалізацію канабісу", effect: { y: -3, x: 3 }},
    { question: "Я вважаю, що держава не має фінансувати мистецтво", effect: { x: 3, y:0 }},
    { question: "Вільна торгівля з країнами, що розвиваються, набагато краще, ніж пряма фінансова допомога їм", effect: { x: 3, y:0 }},
    { question: "Реалібітація зловмисників краще, ніж їхнє покарання", effect: { x:0,y: -3 }},
    { question: "Деякі релігії та народи чинять більше проблем, ніж інші", effect: { x:0,y: 3 }},
    { question: "Це ніколи не завершується добре, коли держава втручається в справи бізнесу, навіть якщо вони не порушували закону", effect: { x: 3, y:0 }},
    { question: "Держава має безоплатно надавати медичні послуги", effect: { x: -3, y:0 }},
    { question: "Свобода слова має бути обмежена для боротьби з ненавистю", effect: { x: 0, y: 3 } },
    { question: "Легалізація наркотиків збільшує злочинність", effect: { x: 0, y: 3 } },
    { question: "Намагання держави зі створення робочих місць загалом є гарною ідеєю", effect: { x: -3, y:0 }},
    { question: "Держава не повинна регулювати інтернет", effect: { x: 0, y: -3 } },
    { question: "Всі громадяни мають проходити обов'язкову військову службу", effect: { x: 0, y: 3 } },
    { question: "Проституція має бути легалізованою", effect: { x: 3, y: -3 }},
    { question: "Сильна армія краще за сильну дипломатію", effect: { x:0, y: 3 }},
    { question: "Евтаназія має бути легалізованою", effect: { x:0, y: -3 }},
    { question: "Школи повинні виховувати дітей в дусі патріотизму", effect: { x: 0, y: 3 } },
    { question: "Держава має дозволити громадянам володіти зброєю для самозахисту", effect: { x: 0, y: -3 } },
    { question: "Мистецтво та медіа повинні відображати моральні цінності суспільства", effect: { x: 0, y: 3 } },
    { question: "Зарплати СЕО та банкірів мають бути обмеженими", effect: { x: -3, y:0 }},
    { question: "Держава має ввести податок на розкіш, і ці кошти передавати вразливим верствам населення", effect: { x: -3, y:0 }},
    { question: "Моя країна має надавати допомогу малорозвиненим державам", effect: { y: -3, x: 3 }},
    { question: "Закони про цензуру потрібні для підтримки громадського порядку", effect: { x: 0, y: 3 } },
    { question: "Держава повинна гарантувати анонімність онлайн для захисту особистого життя", effect: { x: 0, y: -3 } },
    { question: "Титули монархів та аристократів мають бути знищеними", effect: { x: 3, y:0 }},
    { question: "Це цілком справедливо, аби держава надавала перевагу більшості, ніж меншості", effect: { x:0, y: 3 }},
    { question: "Гомосексуальні пари мають мати такі ж права, як і гетеросексуальні пари, включаючи право на всиновлення", effect: { x:0, y: -3}},
    {questions: "", effect: {x: 0, y: 0}}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].effect.x !== undefined) {
      if (sliderValue !== 0) { // Check if the slider value is not 0
        setXValue(xValue + questions[currentQuestionIndex].effect.x * sliderValue);
      }
    }
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].effect.y !== undefined) {
      if (sliderValue !== 0) { // Check if the slider value is not 0
        setYValue(yValue + questions[currentQuestionIndex].effect.y * sliderValue);
      }
    }
    setSliderValue(0);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    onSliderChange(sliderValue, xValue, yValue);
  };
  
  const handleSkip = () => {
    setXValue((xValue - questions[currentQuestionIndex].effect.x* sliderValue))
    setYValue((yValue - questions[currentQuestionIndex].effect.y* sliderValue))
    setCurrentQuestionIndex(currentQuestionIndex); // Костиль аби уникнути зарахування при пропуску питання
  };
  
  return (
    <div>
    {questions[i] && questions[i].question && (
    <div>{questions[i].question}</div>)}
      {i >= questions.length-1 ? null : (<div id='Form'>
        <div>Питання {i} з {questions.length-1}</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="vol">Наскільки я погоджуюсь з цією думкою (від різко негативного до різко позитивного):</label>
          <div><input
          type="range"
          id="vol"
          name="vol"
          min="-2"
          max="2"
          value={sliderValue} // Use sliderValue as the value for the input element
          onChange={(e) => setSliderValue(Number(e.target.value))}
          /></div>
          <button type="submit">Відповісти</button>
          <button onClick={handleSkip}>Пропустити</button>
        </form>
      </div>)}
      {i == questions.length - 1 ? (
        <div><div>Твій результат <Ideologies x={xValue} y={yValue}/></div>
        <div><PoliticalCompass x={xValue} y={yValue}/></div></div>
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