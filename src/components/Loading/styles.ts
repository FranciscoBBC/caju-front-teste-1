import styled from "styled-components";

export const LoadingSpinner = styled.div`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  position: relative;
  border-radius: 100%;
  transform: translateZ(0);
  border-style: solid;
  width: 40px;
  height: 40px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-width: 2px;
  border-top-color: rgba(232, 5, 55, 1);
  border-right-color: rgba(255, 117, 0, 1);
  animation: rotation 0.5s infinite linear;

  &:after {
    border-radius: 100%;
  }
`;

export const EmptyLabel = styled.span`
  visibility: hidden;
`;

export const LoadingBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  backdrop-filter: blur(2px);
`;
