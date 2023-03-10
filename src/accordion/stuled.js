import styled from "styled-components";
import Title from "/src/title/title";

export const TitleButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => props.theme.buttonColor};
  font-size: 18px;
  box-sizing: border-box;
  cursor: ${(props) => (props.isActive ? "auto" : "pointer")};
  border-bottom: 2px solid ${(props) => props.theme.buttonBorder};
`;

export const TitleText = styled(Title)`
  color: ${(props) => props.theme.textColor};
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid ${(props) => props.theme.buttonBorder};
  border-top: none;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 0px;
  overflow: hidden;
  width: 100%;
  transition: 0.3s;
`;

export const Wrapper = styled.section`
  margin-bottom: 0px;
`;
