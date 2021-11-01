import "./bread.css"

function bread(){

    const breads = [
        {
            name : "Baguette",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9bzz9_8GHg65mRmFsykO69A3etl36THNRg&usqp=CAU"
        },
        {
            name : "Tortilla",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3gHTi2IcS8C4021h8LI2qSs7qV-5RN0_6w&usqp=CAU"
        },
        {
            name : "Pain Normal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_F_5YPR4jZ_G9KuERZVZkO45SBpmc-qGIQ&usqp=CAU"
        },
         
    ]

    const breadList = breads.map(breadChoose=>(
        <div key={breadChoose.name} className="content">
        <img className="img" src={breadChoose.image} alt=""/>
        <p>{breadChoose.name}</p>
      </div>
    ))
      return(
    <div className="App">
      <h1>Bienvenue à Kebab Estiam</h1>
      <header className="App-header">
        <h2> Choix du pain </h2>
      </header>

      <div className="content">
       {breadList}
      </div>
    </div>
      );
 }

 export default bread;