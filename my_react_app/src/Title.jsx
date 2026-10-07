function Title({name,college,skills}){
    const list=skills.map((skill)=>{
        return(<h2>{skill}</h2>)
    })
    let styles = {
    backgroundColor: college === "Imcc" ? "pink" : null
    };
    return(
        <div style={styles}>
         <h1>Hello {name}</h1>
         <h2>College {college}</h2>
         <h3>Skills:{list}</h3>
         {college=="Scottish"? <p>Good College</p> :null}
        </div>
  
    )
}

export default Title;
