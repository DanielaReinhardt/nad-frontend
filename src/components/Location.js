import React, { useState } from 'react';
import {Button} from 'react';


class Location extends React.Component {

  constructor(props){
    super(props);

        this.state = {
            locations: [],
            
        }
        
        };

    async componentDidMount(){
        const response = await fetch('http://localhost:8080/locations/');
        const body = await response.json ();
        this.setState({locations:body});


        //geht nur in einer Funktion
        // const [ort, setOrt] = useState("");
        //  const [pLZ, setPLZ] = useState("");
        //   const [strasse, setStrasse] = useState("");
        //    const [hausnummer, setHausnummer] = useState("");
        
     }
    

    render() {
        const { locations} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                   
                    <div className="flex-container">
                        <h2>Rast</h2>
                        
                        {locations.map(location =>
                            <div key={location.id}>
                                {location.ort} {location.pLZ} {location.strasse}{location.hausnummer}
                            </div>
                        )}
                    </div>
                </header>

           
                <form>
                <h1>Add a Rast</h1>
                {/* Fehlermeldung in der Konsole(Browser) setOrt  usw wird nicht erkannt */}
                <input type="text" label="ort" value={locations.ort} placeholder="Ort" onChange={(e)=>locations.setOrt(e.target.value)}/>
                <input type="text" label="plz" value={locations.pLZ} placeholder="PLZ" onChange={(e)=>locations.setPLZ(e.target.value)} />
                <input type="text" label="strasse" value={locations.strasse} placeholder="Straße" onChange={(e)=>locations.setStrasse(e.target.value)} />
                <input type="text" label="plz" value={locations.hausnummer} placeholder="Hausnummer" onChange={(e)=>locations.setHausnummer(e.target.value)} />
                </form>
                
                {locations.ort}
                {locations.pLZ}
                {locations.strasse}
                {locations.Hausnummer}
            
            </div>
        );
    }
}
export default Location;
