import React from "react";

class FindId extends React.Component {

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
            </div>
        );
    }
}
export default FindId;