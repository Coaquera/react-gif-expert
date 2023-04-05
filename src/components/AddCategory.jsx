import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = event => {
    //evita que ocurra los eventos que deberian ocurrir
    event.preventDefault();
    if (inputValue.trim().length<=1) return;
    //setCate(cate => [inputValue,...cate]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  const onInputChange = ({target}) => {
    //console.log(target.value);
    setInputValue(target.value);
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={event=>onInputChange(event)}
      ></input>
    </form>
  );
};
