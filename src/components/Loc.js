//import "./App.css";
import { useState } from "react";
import Axios from "axios";

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



  const deleteLocation = (id) => {
    Axios.delete(`http://localhost:8080/locations/${id}`).then((response) => {
      setLocationList(
        locationList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  const updateLocation = (id) => {
    Axios.put(`http://localhost:8080/locations/${id}`, { 

      ort: ort,
      pLZ: pLZ,
      strasse: strasse,
      hausnummer: hausnummer,

     }).then(
      (response) => {
        setLocationList(
          locationList.map((val) => {
            return val.id === id
              ? {
                  //id: val.id,
                  ort: ort,
                  pLZ: pLZ,
                  strasse: strasse,
                  hausnummer: hausnummer,                  
                }
              : val;
          })
        );
      }
    );
  };

  return (
    <div className="App">
      <div className="information">
      <h2 style = {{color: "lightblue"}}>Add a new Location</h2>
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
            <div className="locations">
              <div>
             
                <p>Ort: {val.ort}</p>
                <p>PLZ: {val.pLZ}</p>
                <p>Strasse: {val.strasse}</p>
                <p>Hausnummer: {val.hausnummer}</p>
               
              </div>
              
              <div>
              
                <input
                  type="text"
                  placeholder="Ort"
                  onChange={(event) => {
                    setOrt(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="PLZ"
                  onChange={(event) => {
                    setPLZ(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Strasse"
                  onChange={(event) => {
                    setStrasse(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Hausnummer"
                  onChange={(event) => {
                    setHausnummer(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateLocation(val.id);
                    alert("Die Änderung der Location wurde vorgenommen")
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteLocation(val.id);
                    alert("Die Location wurde gelöscht")
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