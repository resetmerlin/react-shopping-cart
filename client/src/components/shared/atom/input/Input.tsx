/* eslint-disable react/jsx-props-no-spreading */
import { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.scss';
import { TInputElementProps } from '../../../../types';

interface IProps extends TInputElementProps {
  type: HTMLInputTypeAttribute;
}

export default function Input({
  children,
  className = '',
  type,
  ...props
}: IProps) {
  return (
    <input
      {...props}
      type={type}
      className={`${className} ${styles.checkbox}`}
    />
  );
}
