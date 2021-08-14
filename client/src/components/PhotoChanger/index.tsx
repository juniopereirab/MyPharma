import React, { BaseSyntheticEvent, useMemo } from "react";
import { AiFillCamera } from "react-icons/ai";

import "./styles.scss";

interface PhotoChangerProps {
  value?: Blob | string | null;
  onChange: (e: BaseSyntheticEvent) => void;
}

const PhotoChanger: React.FC<PhotoChangerProps> = ({ value, onChange }) => {
  const preview = useMemo(() => {
    if (typeof value === "object") {
      return value ? URL.createObjectURL(value) : null;
    } else if (typeof value === "string") {
      return `http://localhost:3333/files/${value}`;
    }
  }, [value]);
  return (
    <label id="photo" style={{ backgroundImage: `url(${preview})` }}>
      <input type="file" onChange={onChange} />
      <div className={value ? "has-photo" : "without-photo"}>
        <AiFillCamera size={80} color="#A5A5A5" />
      </div>
    </label>
  );
};

export default PhotoChanger;
