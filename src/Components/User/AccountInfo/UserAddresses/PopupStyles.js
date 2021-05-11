import styled from "styled-components";

export const PopUpContainer = styled.div`
  padding: 35px 40px 40px 40px;
  max-height: calc(947px - 40px);
  position: fixed;
  display: flex;
  top: 47%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 20;
  overflow: auto;
  width: 480px;
  max-width: calc(100vw - 40px);

  .MuiSvgIcon-root {
    position: absolute;
    margin-top: 0;
    top: 20px;
    right: 20px;
    line-height: 0;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    display: block;
    margin: 25px auto 0 auto;
    flex-shrink: 0;
    -webkit-appearance: button;
    cursor: pointer;
    padding: 0;
    overflow: visible;
    background: none;
    border: none;
    border-radius: 0;
    color: inherit;
    font: inherit;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-align: center;
    align-items: flex-start;
    text-indent: 0px;
    text-shadow: none;
  }

  @media screen and (min-width: 1008px) {
    flex-direction: column;
  }
`;

export const PopUpHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
  display: block;

  .headerHeading {
    color: inherit;
    font-size: 20px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    line-height: 1.65;
  }

  .headerDescription {
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
    line-height: 1.65;
  }
`;

export const PopUpContent = styled.div`
  display: block;
`;

export const Form = styled.div`
  width: 100%;
`;

export const FormItem = styled.div`
  margin-bottom: 15px;
  position: relative;

  .formInput {
    -webkit-appearance: none;
    display: block;
    padding: 12px 14px;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    width: 100%;
    line-height: normal;
    resize: none;
    transition: border-color 0.1s ease-in-out;
    background: transparent;
    color: inherit;
    font: inherit;
    margin: 0;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    text-align: start;
    cursor: text;
  }
`;

export const ItemLabel = styled.label`
  position: absolute;
  bottom: calc(100% - 8px);
  left: 10px;
  padding: 0 5px;
  line-height: normal;
  color: #939393;
  font-size: 11px;
  opacity: 0;
  background: rgba(255, 255, 255, 0);
  pointer-events: none;
  transform: translateY(3px);
  transition: all 0.3s ease-in-out;
  cursor: default;
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  color: white;
  border-color: #ff9999;
  position: relative;
  padding: 14px 28px;
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;

  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  background-color: #ff9999;
`;
