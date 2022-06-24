import React, {Component} from 'react';


class App extends Component {

  constructor(props) {
    super(props);
   
    this.state ={
      items:[],
      isLoaded:false,
    }
  }
  

        componentDidMount(){
          fetch('http://localhost:8080/locations')
            .then(res => res.json())
            .then(json => {
              this.setState({
                isLoaded: true,
                items: json,
              })
              
           
            }
        
        
        
     
  );
}


render() {
  const { isLoaded, items} = this.state;
  
  if (!isLoaded) {
    return<div>Loading...</div>;
  }
  


  return (
  <div className="App">
  <ul>
    {items.map(item =>(
      <li key={item.id}>
        ort: {item.ort} | pLZ: {item.pLZ} | strasse: {item.strasse} | hausnummer: {item.hausnummer}

        </li>

    ))}

  </ul>

  </div>
);

}
}

export default App;
