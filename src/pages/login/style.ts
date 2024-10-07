import styled from "styled-components";

export const Container = styled.div`
  width: 455px;
  height: 477px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 20px;
  .content-logo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    max-width: 367px;
    img {
      max-width: 100px;
      width: 100%;
      padding: 0;
      margin: 0;
    }
    h2 {
      color: #552ddc;
      font-weight: 700;
    }
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 200px;
    width: 100%;
  }

  .input-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 367px;
    input {
      width: 100%;
      max-width: 367px;
      box-sizing: border-box;
      height: 50px;
      background-color: #ffffff;
      border: 1px solid;
      color: #c5c5c5;
      border: none;
      margin-top: 10px;
      font-size: 16px;
    }
    label {
      width: 100%;
      text-align: left;
      color: #000000;
      font-weight: 500;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #30a949;
    width: 100%;
    max-width: 367px;
    margin-top: 10px;
  }
`;
