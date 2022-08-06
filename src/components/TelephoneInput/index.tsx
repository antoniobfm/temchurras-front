/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelName: string;
  value?: string;
  setState: (value: string) => void;
}

const TelephoneInput: React.FC<InputProps> = ({
  name,
  labelName,
  value,
  setState,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const isNumericInput = (event: any) => {
    const key = event.keyCode;
    return (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
  };

  const isModifierKey = (event: any) => {
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 ||
      key === 36 ||
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 ||
      (key > 36 && key < 41) ||
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  };

  const enforceFormat = (event: any) => {
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };

  const formatToPhone = (event: any) => {
    if (isModifierKey(event)) {
      return;
    }

    const { target } = event;
    const input = event.target.value.replace(/\D/g, '').substring(0, 11);
    const zip = input.substring(0, 2);
    const middle = input.substring(2, 7);
    const last = input.substring(7, 11);

    if (input.length > 7) {
      target.value = `(${zip}) ${middle} - ${last}`;
      setState(`(${zip}) ${middle} - ${last}`);
    } else if (input.length > 2) {
      target.value = `(${zip}) ${middle}`;
      setState(`(${zip}) ${middle}`);
    } else if (input.length > 0) {
      target.value = `(${zip}`;
      setState(`(${zip}`);
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById('phoneNumber');

    if (inputElement) {
      inputElement.addEventListener('keydown', enforceFormat);
      inputElement.addEventListener('keyup', formatToPhone);

      return () => {
        inputElement.removeEventListener('keydown', enforceFormat);
        inputElement.removeEventListener('keyup', formatToPhone);
      };
    }
  }, []);

  return (
    <InputContainer isErrored={false}>
      <div className="input-icon-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20835 12.4583L7.66669 14C7.34169 14.325 6.82502 14.325 6.49169 14.0083C6.40002 13.9167 6.30835 13.8333 6.21669 13.7417C5.35835 12.875 4.58335 11.9667 3.89169 11.0167C3.20835 10.0667 2.65835 9.11666 2.25835 8.175C1.86669 7.225 1.66669 6.31666 1.66669 5.45C1.66669 4.88333 1.76669 4.34166 1.96669 3.84166C2.16669 3.33333 2.48335 2.86666 2.92502 2.45C3.45835 1.925 4.04169 1.66666 4.65835 1.66666C4.89169 1.66666 5.12502 1.71666 5.33335 1.81666C5.55002 1.91666 5.74169 2.06666 5.89169 2.28333L7.82502 5.00833C7.97502 5.21666 8.08335 5.40833 8.15835 5.59166C8.23335 5.76666 8.27502 5.94166 8.27502 6.1C8.27502 6.3 8.21669 6.5 8.10002 6.69166C7.99169 6.88333 7.83335 7.08333 7.63335 7.28333L7.00002 7.94166C6.90835 8.03333 6.86669 8.14166 6.86669 8.275C6.86669 8.34166 6.87502 8.4 6.89169 8.46666C6.91669 8.53333 6.94169 8.58333 6.95835 8.63333C7.10835 8.90833 7.36669 9.26666 7.73335 9.7C8.10835 10.1333 8.50835 10.575 8.94169 11.0167C9.02502 11.1 9.11669 11.1833 9.20002 11.2667C9.53335 11.5917 9.54169 12.125 9.20835 12.4583Z"
            fill="#272105"
          />
          <path
            d="M18.3083 15.275C18.3083 15.5083 18.2667 15.75 18.1833 15.9833C18.1583 16.05 18.1333 16.1167 18.1 16.1833C17.9583 16.4833 17.775 16.7667 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0167C16.1583 18.0167 16.15 18.025 16.1417 18.025C15.65 18.225 15.1167 18.3333 14.5417 18.3333C13.6917 18.3333 12.7833 18.1333 11.825 17.725C10.8667 17.3167 9.90833 16.7667 8.95833 16.075C8.63333 15.8333 8.30833 15.5917 8 15.3333L10.725 12.6083C10.9583 12.7833 11.1667 12.9167 11.3417 13.0083C11.3833 13.025 11.4333 13.05 11.4917 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9667L12.675 12.3417C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4667 11.7583 13.6583 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9917 14.9583 12.1333L17.7167 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.625C18.2583 14.8333 18.3083 15.0417 18.3083 15.275Z"
            fill="#272105"
          />
        </svg>
      </div>
      <input
        id="phoneNumber"
        type="text"
        placeholder={labelName}
        name={name}
        defaultValue={value}
        ref={inputRef}
      />
    </InputContainer>
  );
};

export { TelephoneInput };
