
import { useEffect, useState } from 'react';

const ObjectInfo = ({uuid}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const URI = `https://api.uploadcare.com/files/${uuid}/?add_fields=rekognition_info`;

  const headers = {
    Authorization: `Uploadcare.Simple ${process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY}:${process.env.REACT_APP_UPLOADCARE_API_SECRET_KEY}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URI, { headers });
      const json = await response.json();
      console.log(json);
      setData(json.rekognition_info);
      setLoading(false);
    }
    fetchData();
  }, [uuid]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <h1>{data}</h1>
  );
};

export default ObjectInfo;