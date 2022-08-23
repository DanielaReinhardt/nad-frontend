//import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { LocationInfo } from "./LocationInfo";

function Loc() {
  const [ort, setOrt] = useState("");
  const [pLZ, setPLZ] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hausnummer, setHausnummer] = useState("");

  const [locationList, setLocationList] = useState([]);

  const getLocations = () => {
    Axios.get("http://localhost:8080/locations").then((response) => {
      setLocationList(response.data);
    });
  };

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

  const deleteLocation = (id, location) => {
    Axios.delete(`http://localhost:8080/locations/${id}`).then((response) => {
      setLocationList(
        locationList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const updateLocation = (id, location) => {
    Axios.put(`http://localhost:8080/locations/${id}`, {
      ort: location.ort,
      pLZ: location.pLZ,
      strasse: location.strasse,
      hausnummer: location.hausnummer,
    }).then((response) => {
      setLocationList(
        locationList.map((val) => {
          return val.id === id
            ? {
                //id: val.id,
                ort: location.ort,
                pLZ: location.pLZ,
                strasse: location.strasse,
                hausnummer: location.hausnummer,
              }
            : val;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <h2 style={{ color: "lightblue" }}>Add a new Location</h2>
        <label>Ort:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrt(event.target.value);
          }}
        />
        <br></br>
        <label>Plz:</label>
        <input
          type="number"
          onChange={(event) => {
            setPLZ(event.target.value);
          }}
        />
        <br></br>
        <label>Str: </label>
        <input
          type="text"
          onChange={(event) => {
            setStrasse(event.target.value);
          }}
        />
        <br></br>
        <label>Hnr:</label>
        <input
          type="text"
          onChange={(event) => {
            setHausnummer(event.target.value);
          }}
        />
        <br></br>
        <button onClick={addLocation}>Add Location</button>
        <br></br> <br></br> <br></br>
      </div>
      <div className="locations">
        <button onClick={getLocations}>Show all Locations</button>
        {locationList.map((val, key) => {
          return (
            <LocationInfo
              id={val.id}
              location={{
                ort: val.ort,
                pLZ: val.pLZ,
                strasse: val.strasse,
                hausnummer: val.hausnummer,
              }}
              updateLocation={updateLocation}
              deleteLocation={deleteLocation}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Loc;
