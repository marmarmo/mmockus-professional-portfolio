export default function Mp3({ url }) {
  return (
    <audio
      controls
      preload="none"
      style={{ height: "2em", verticalAlign: "middle" }}
    >
      <source src={`${url}`} type="audio/mpeg" />
    </audio>
  );
}
