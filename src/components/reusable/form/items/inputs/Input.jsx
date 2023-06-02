import React, {useEffect, useState} from 'react';

const handleInputClassName = (isErrors, isSuccess, intermediateStage, inactive, className = "") => {
  className += ' input input_simple-text';
  if (inactive) className += ' _inactive';
  if (isErrors) className += ' _form-error';
  if (isSuccess && !isErrors) className += ' _form-success';
  if (intermediateStage) className += ' _form-warning';
  return className;
}

const Input = (args) => {
  const {label, placeholder, className, multiValidation, name, alterAction, inactive, register, ...props} = args;

  const [inputClassName, setInputClassName] = useState(handleInputClassName(false, false, false, inactive));

  const inputProps = register(name);
  const isErrors = inputProps?.errors?.length > 0;
  const isSuccess = multiValidation?.length > 0 && inputProps?.value?.length > 0 && !isErrors;
  const intermediateStage = multiValidation?.length > 0 && isErrors && inputProps?.errors?.length < multiValidation?.length;

  useEffect(() => {
    const newClassName = handleInputClassName(isErrors, isSuccess, intermediateStage, inactive, className);
    setInputClassName(newClassName);
  }, [isErrors, isSuccess, intermediateStage, inactive])

  return (
    <div className={'input-wrapper'}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className={inputClassName}
          {...inputProps}
          {...props}
        />
        {
          multiValidation?.length > 0  ? (
            <ul className='validation-list text-s'>
              {multiValidation.map((item, index) => (
                <li
                  className={`validation-list__item ${(isErrors && inputProps?.errors.find(errorName => errorName === item) || !inputProps?.value)
                    ? 'validation-list__item_error' :
                    'validation-list__item_success'}`}
                  key={index + 'valid-item'}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : <div className={'text-error text-center'}>{isErrors ? inputProps?.errors[0] : ''}</div>
        }
      </label>


      <div className={'input-alter-action'}>
        {alterAction}
      </div>
    </div>
  );
};

export default Input;