import React, { useEffect } from 'react';

import { Container, SingleDigitInput } from './styles';

const VerificationCodeInput: React.FC = () => {
  useEffect(() => {
    const inputElements: any[] = [
      ...document.querySelectorAll('input.code-input'),
    ];

    inputElements.forEach((ele, index) => {
      ele.addEventListener('keydown', (e: any) => {
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if (e.keyCode === 8 && e.target.value === '')
          inputElements[Math.max(0, index - 1)].focus();
      });
      ele.addEventListener('input', (e: any) => {
        // take the first character of the input
        // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
        // but I'm willing to overlook insane security code practices.
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? ''; // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index === inputElements.length - 1;
        const insertedContent = first !== undefined;
        if (insertedContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index + 1].focus();
          inputElements[index + 1].value = rest.join('');
          inputElements[index + 1].dispatchEvent(new Event('input'));
        }
      });
    });
  }, []);

  return (
    <Container>
      <SingleDigitInput
        type="number"
        className="code-input"
        pattern="[0-9]*"
        placeholder=" "
      />
      <SingleDigitInput
        type="number"
        className="code-input"
        pattern="[0-9]*"
        placeholder=" "
      />
      <SingleDigitInput
        type="number"
        className="code-input"
        pattern="[0-9]*"
        placeholder=" "
      />
      <SingleDigitInput
        type="number"
        className="code-input"
        pattern="[0-9]*"
        placeholder=" "
      />
      <SingleDigitInput
        type="number"
        className="code-input"
        pattern="[0-9]*"
        placeholder=" "
      />
    </Container>
  );
};

export default VerificationCodeInput;
