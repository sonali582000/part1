const Header = ({ course }) => {
  console.log(course);
};

const Part = ({ part }) => {
  console.log(part);
};

const Content = ({ part }) => {
  return (
    <div>
      <Part part={part} />
      <Part />
      <Part />
    </div>
  );
};

const Total = (props) => {};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Header course={course} />
      <Content part={part1} />
      <Total />
    </>
  );
};

export default App;
