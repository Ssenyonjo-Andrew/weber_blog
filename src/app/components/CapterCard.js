export default function ChapterCard(props) { // Changed to uppercase 'C'

  let ourStyles = {
      color: "black",
      backgroundColor: "white",
      padding: "100px",
      border: "2px solid black",
      margin: "30px",
      borderRadius: "40px"
  };

  return (
      <div style={ourStyles}>
          <h2>{props.title}</h2> {/* Use curly braces to evaluate the props */}
          <h3>{props.subtitle}</h3> {/* Use curly braces to evaluate the props */}
      </div>
  );
}