const Total = ({course}) => (
  <h3>
    Total of {course  .parts.reduce((acc,curr) => acc + curr.exercises,0)} exercises
  </h3>
);
export default Total;
