const Header = ({ course }) => {
  console.log(course);
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ parts }) => {
  console.log(parts);
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <Part parts={parts} />
      <Part />
      <Part />
    </div>
  );
};

const Total = (props) => {};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course.name} />
      <Content parts={course} />
      <Total parts={course} />
    </>
  );
};

export default App;
