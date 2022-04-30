import React, { useState, useEffect } from 'react';

const ProcessImage = ({file}) => {
  console.log(file);
  const CDN_URI = `https://ucarecdn.com/${file.uuid}/`;
  const [imageSrc, setImageSrc] = useState(CDN_URI);

  return(
    <div>
      <div className="uc-ip-preview">
        <img src={imageSrc} alt={file.original_filename} />
      </div>
      <div className="uc-ip-actions-grp">
        <div className="uc-ip-actions">
          Corp
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/2000x1325/center/`)}>Corp Center</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/4:3/`)}>Corp Ratio</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/face/1:1/`)}>Corp Face</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/scale_crop/400x800/smart/`)}>Smart Corp</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Filter
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/filter/lavra/`)}>Lavra</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/filter/pamaya/`)}>Pamaya</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/filter/sewen/`)}>Sewen</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/filter/vevera/`)}>Vevera</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/filter/namala/`)}>Namala</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Rotate & Flip
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/rotate/90/`)}>Rotate 90 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/rotate/180/`)}>Rotate 180 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/flip/`)}>Flip It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/mirror/`)}>Mirror It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Blur & Sharpen
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/blur_region/faces/`)}>Blur Face</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/sharp/10/`)}>Sharp 10</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/sharp/20/`)}>Sharp 20</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>Set Original</button>
        </div>
      </div>
    </div>  
  )
}

export default React.memo(ProcessImage);