import { useState } from 'react';
import { Widget } from "@uploadcare/react-widget";
import ListFiles from "./ListFiles";

function Uploadcare() {
  const [updateList, setUpdateList] = useState(false);
  const uploadFileChange = (info) => {
    console.log(info);
  };

  const uploadFileSelect = (file) => {
    console.log(`file changed ${file}`);
    setUpdateList(false);
    if (file) {
      file.progress((info) => console.log("File progress: ", info.progress));
      file.done((info) => setUpdateList(true));
    }
  };

  return (
    <div className="ucare">
      <div className="upload">
        <label htmlFor="file">Please upload an image</label>{" "}
        <Widget
          publicKey={process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY}
          id="file"
          Clearable={true}
          onChange={(info) => uploadFileChange(info)}
          onFileSelect={(file) => uploadFileSelect(file)}
        />
      </div>
      <ListFiles updateList={ updateList }/>
    </div>
  );
}

export default Uploadcare;
