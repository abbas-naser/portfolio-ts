import "./ImageWithSpinner.css";
import { useState } from "react";
import UploadingSpinner from "../UploadingSpinner/UploadingSpinner";

export default function ImageWithSpinner({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="image-container-with-spinner">
      {loading && (
        <div className="image-spinner">
          <UploadingSpinner />
        </div>
      )}
      <img
        style={{ visibility: loading ? "hidden" : "visible" }}
        className="project-main-image"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
