/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { TButtonElementProps } from '../../../types';
import styles from './Button.module.scss';

interface IProps extends TButtonElementProps {
  type: 'submit' | 'button';
  purpose: 'primary' | 'nav' | 'number' | 'delete' | 'product';
  size: 'small' | 'medium';
}

export default function Button({
  children,
  className = '',
  type,
  purpose,
  size,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${className}   ${styles[purpose]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}
