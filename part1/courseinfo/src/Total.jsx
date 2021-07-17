const Total = ({course}) => (
  <h2 style={{marginLeft:'2rem'}}>
    Total of {course[0].parts.reduce((acc,curr) => acc + curr.exercises,0) + course[1].parts.reduce((acc,curr) => acc + curr.exercises,0)}
  </h2>
);
export default Total;
 