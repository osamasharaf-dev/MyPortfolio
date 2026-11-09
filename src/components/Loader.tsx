export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-p l grid-bg" style={{ left: 0 }} />
      <div className="loader-p r grid-bg" />
      <div className="loader-c">
        <span className="brand brand-xl">
          <span className="brand-os">OS</span>
          <i className="brand-dot" />
        </span>
        <span className="loader-bar">
          <i />
        </span>
      </div>
    </div>
  );
}
