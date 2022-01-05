import { css } from 'styled-components';

const mixin = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterAndSetDirection: (direction = 'row') => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: center;
    align-items: center;
  `,

  flexCenterAndSetJustify: (justifyContent = 'center') => css`
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};
  `,
};

export default mixin;
