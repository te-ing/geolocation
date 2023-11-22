/* eslint-disable react/button-has-type */
import React, { ComponentProps } from 'react';
import cx from 'classnames';
import styles from './defaultBtn.module.scss';

type TDefaultBtnProps = ComponentProps<'button'> & {
  size?: 'large' | 'medium' | 'small';
  width?: string;
  height?: string;
  children?: React.ReactNode;
};

/**
 * DefaultBtn - 범용 버튼 컴포넌트
 * mode에 따라 디자인 변경 가능
 * size에 따라 크기 변경 가능 * small: font-szie: 12px * medium: font 14px * large: font 14px, bold
 * width, hegiht로 버튼 크기 조절 가능
 */

export default function DefaultBtn({ size = 'small', width, height, children, style, ...props }: TDefaultBtnProps) {
  return (
    <button style={{ ...style, width, height }} className={cx(styles.button, styles[size])} {...props}>
      {children}
    </button>
  );
}
