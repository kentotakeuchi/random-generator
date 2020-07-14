import React /*{ useReducer, useEffect }*/ from 'react';

import './Input.scss';

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE':
//       return {
//         ...state,
//         value: action.val,
//       };
//     default:
//       return state;
//   }
// };

////////////////////////////////////////////
const Input = ({
  instruction,
  id,
  value,
  onChange,
  element,
  type,
  placeholder,
  rows,
  options,
  name,
  label,
  checked,
  labelStyle,
}) => {
  console.log({ element, id, checked, value });

  // const [inputState, dispatch] = useReducer(inputReducer, {
  //   value: initialValue || '',
  // });

  // const { value } = inputState;

  // useEffect(() => {
  //   onInput(id, value);
  // }, [id, value, onInput]);

  // const onChange = (event) => {
  //   dispatch({
  //     type: 'CHANGE',
  //     val: event.target.value,
  //   });
  // };

  let inputElement;
  switch (element) {
    case 'input':
      inputElement = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows || 3}
          onChange={onChange}
          value={value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value={null} disabled={true}>
            {instruction}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value - 1}
            </option>
          ))}
        </select>
      );
      break;
    case 'radio':
      inputElement = (
        <input
          type={element}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
      );
      break;
    case 'checkbox':
      inputElement = (
        <input
          type={element}
          name={name}
          checked={checked}
          onChange={(e) => onChange(id, e)}
          id={id}
        />
      );
      break;
    case 'label':
      inputElement = null;
      break;
    default:
      inputElement = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      );
  }

  return (
    <div className={`form-control`}>
      {labelStyle && (
        <div className={`label__box ${labelStyle}`}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      {inputElement}
    </div>
  );
};

export default Input;
