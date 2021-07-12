import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content
        name1={course.parts[0].name}
        name2={course.parts[1].name}
        name3={course.parts[2].name}
        firstExercise={course.parts[0].exercises}
        secondExercise={course.parts[1].exercises}
        thirdExercise={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      /><Header name={course.name} />
      <Content
        name1={course.parts[0].name}
        name2={course.parts[1].name}
        name3={course.parts[2].name}
        firstExercise={course.parts[0].exercises}
        secondExercise={course.parts[1].exercises}
        thirdExercise={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};
export default App;

