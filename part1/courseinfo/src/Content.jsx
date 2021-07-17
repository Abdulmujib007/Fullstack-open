const Content = ({ course }) => {
  return (
    <ul>
      {course.map(({ name, parts, id }) => (
        <>
          <h2 key={id}>{name}</h2>
          {parts.map(({ name, id, exercises }) => (
            <li style={{ listStyle: "none", marginBottom: "1rem" }} key={id}>
              {name} {exercises}
            </li>
          ))}
        </>
      ))}
    </ul>
  );
};
export default Content;
