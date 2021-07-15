 const Content = ({course}) => {
    return(
      <ul>
        {course.parts.map(({name,id,exercises}) => <p key= {id}>{name} {exercises}</p>)}
      </ul>
    )
 }
 export default Content
