// import "./App.css";
import { useState } from "react";
import Axios from "axios";

function Loc() {
 
  const [ort, setOrt] = useState("");
  const [pLZ, setPLZ] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hausnummer, setHausnummer] = useState("");

  const [location, getLocation] = useState([]);
  const [newLocation, setNewLocation] = useState([]);

  const [locationList, setLocationList] = useState([]);

  const addLocation = () => {
    Axios.post("http://localhost:8080/locations", {
     
      ort: ort,
      pLZ: pLZ,
      strasse: strasse,
      hausnummer: hausnummer,
      
    }).then(() => {
      setLocationList([
        ...locationList,
        {
       
        ort: ort,
        pLZ: pLZ,
        strasse: strasse,
        hausnummer: hausnummer,
        },
      ]);
    });
  };

  const getLocations = () => {
    Axios.get("http://localhost:8080/locations").then((response) => {
      setLocationList(response.data);
    });
  };

  const updateLocation = (id) => {
    Axios.put(`http://localhost:8080/locations/${id}`, { location: newLocation, id: id }).then(
      (response) => {
        setLocationList(
          locationList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  ort: val.ort,
                  pLZ: val.pLZ,
                  strasse: val.strasse,
                  hausnummer: val.hausnummer,                  
                }
              : val;
          })
        );
      }
    );
  };

  const deleteLocation = (id) => {
    Axios.delete(`http://localhost:8080/locations/${id}`).then((response) => {
      setLocationList(
        locationList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Ort:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrt(event.target.value);
          }}
        />
        <label>PLZ:</label>
        <input
          type="number"
          onChange={(event) => {
            setPLZ(event.target.value);
          }}
        />
        <label>Strasse:</label>
        <input
          type="text"
          onChange={(event) => {
            setStrasse(event.target.value);
          }}
        />
        <label>Hausnummer:</label>
        <input
          type="text"
          onChange={(event) => {
            setHausnummer(event.target.value);
          }}
        />
        
        <button onClick={addLocation}>Add Location</button>
      </div>
      <div className="location">
        <button onClick={getLocation}>Show Location</button>

        {locationList.map((val, key) => {
          return (
            <div className="location">
              <div>
                <h3>Ort: {val.ort}</h3>
                <h3>PLZ: {val.pLZ}</h3>
                <h3>Strasse: {val.strasse}</h3>
                <h3>Hausnummer: {val.hausnummer}</h3>
                
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewLocation(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateLocation(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteLocation(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Loc;