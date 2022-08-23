import { useState } from "react";

export const LocationInfo = (props) => {
    const [ort, setOrt] = useState(props.location.ort);
    const [pLZ, setPLZ] = useState(props.location.pLZ);
    const [strasse, setStrasse] = useState(props.location.strasse);
    const [hausnummer, setHausnummer] = useState(props.location.hausnummer);

    return (
      <div className="location">
        <div>
          <p>Ort: {props.location.ort}</p>
          <p>PLZ: {props.location.pLZ}</p>
          <p>Strasse: {props.location.strasse}</p>
          <p>Hausnummer: {props.location.hausnummer}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Ort"
            value={ort}
            onChange={(event) => {
              setOrt(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="PLZ"
            value={pLZ}
            onChange={(event) => {
              setPLZ(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Strasse"
            value={strasse}
            onChange={(event) => {
              setStrasse(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Hausnummer"
            value={hausnummer}
            onChange={(event) => {
              setHausnummer(event.target.value);
            }}
          />
          <button
            onClick={() => {
              props.updateLocation(props.id, {
                ort,
                pLZ,
                strasse,
                hausnummer
              });
              alert("Die Änderung der Location wurde vorgenommen");
            }}
          >
            Update
          </button>

          <button
            onClick={() => {
              props.deleteLocation(props.id);
              alert("Die Location wurde gelöscht");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
}