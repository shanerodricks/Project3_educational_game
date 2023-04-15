import styled from "styled-components";

export default function Job({ title, company, salary, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <div className="info">
        <h1 className="job-title">{title}</h1>
        <h2 className="company">{company}</h2>
      </div>
      {salary && <p className="salary">${salary / 1000}k</p>}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  border: 3px solid #3f51b5;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .job-title {
    font-size: 1.5rem;
    margin: 0;
    color: #3f51b5;
  }

  .company {
    font-size: 1rem;
    margin: 0;
    font-weight: normal;
  }

  .salary {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
