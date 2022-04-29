import { Widget } from "@uploadcare/react-widget";

function Uploadcare() {
  console.log(process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY);
  const uploadFileChange = (info) => {
    console.log(info);
  };

  const uploadFileSelect = (file) => {
    console.log(`file changed ${file}`);
    if (file) {
      file.progress((info) => console.log("File progress: ", info.progress));
      file.done((info) => console.log(info));
    }
  };

  return (
    <div className="ucare-widget">
      <div>
        <label htmlFor="file">Please upload an image</label>{" "}
        <Widget
          publicKey={process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY}
          id="file"
          Clearable={true}
          onChange={(info) => uploadFileChange(info)}
          onFileSelect={(file) => uploadFileSelect(file)}
        />
      </div>
    </div>
  );
}

export default Uploadcare;
