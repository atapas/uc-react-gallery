import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ProcessImage from "./ProcessImage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ListFiles = ({ updateList }) => {
  const URI = "https://api.uploadcare.com/files/";

  const headers = {
    Authorization: `Uploadcare.Simple ${process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY}:${process.env.REACT_APP_UPLOADCARE_API_SECRET_KEY}`,
  };
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [fileToProcess, setFileToProcess] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(URI, { headers })
      .then((response) => response.json())
      .then((data) => {
        setFiles(data.results);
        setLoading(false);
      });
  }, [updateList]);

  const deleteFile = (fileId) => {
    const URI = `https://api.uploadcare.com/files/${fileId}/`;
    const options = {
      method: "DELETE",
      headers: headers,
    };
    fetch(URI, options)
      .then((res) => res.json())
      .then((data) => {
        // filter out deleted file
        const newFiles = files.filter((file) => file.uuid !== fileId);
        setFiles(newFiles);
      })
      .catch((err) => console.log(err));
  };

  const editFile = (file) => {
    console.log(file);
    setFileToProcess(file);
    handleShow();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (files.length === 0) {
    return (
      <p className="no-file">
        So empty here, please upload.
      </p>
    );
  };

  return (
    <div className="file-list">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Process Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProcessImage file={fileToProcess} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>Gallery</h1>
      <ul className="uc-list-images">
        { files.map((file) => (
            <li key={file.uuid} className="item">
              <div className="header">
                <span className="name">{file.original_filename}</span>
                <div className="actions">
                  <span className="icon" onClick={(image) => editFile(file)}>
                    <FiEdit />
                  </span>
                  <span
                    className="icon"
                    onClick={(id) => deleteFile(file.uuid)}
                  >
                    <FiTrash2 />
                  </span>
                </div>
              </div>
              <div className="file">
                <img
                  src={file.original_file_url}
                  alt={file.original_filename}
                />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ListFiles;
