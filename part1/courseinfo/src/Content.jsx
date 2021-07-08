const Part = (props) => {
  return (
    <p>
      {props.content} {props.newest}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part content ={props.name1} newest = {props.firstExercise} />
      <Part content ={props.name2} newest = {props.secondExercise} />
      <Part  content ={props.name3} newest = {props.thirdExercise}/>
    </>
  );
};
export default Content;
