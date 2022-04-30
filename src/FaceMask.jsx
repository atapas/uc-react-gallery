
import { useEffect, useState } from 'react';

const FaceMask = ({uuid}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://ucarecdn.com/${uuid}/detect_faces/`);
      const json = await response.json();
      console.log(json);
      setData(json.faces);
      setLoading(false);
    }
    fetchData();
  }, [uuid]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    data.map((face,index) =>
        <div 
          key={index}
          className="dot-mask" 
          style={
            {
              left:`${face[0]}px`, 
              top:`${face[1]}px`, 
              width: `${face[2]}px`, 
              height: `${face[3]}px`
            }
          }>
        </div>
    )
  );
};

export default FaceMask;