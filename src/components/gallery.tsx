import Picture from "./picture";

function Gallery() {
  return (
    <div className="App" style={{ overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        <Picture />
      </div>
    </div>
  );
}

export default Gallery;
