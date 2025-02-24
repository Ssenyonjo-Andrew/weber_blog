import ChapterCard from "./components/CapterCard"; // Ensure the import matches the component name

export default function Home() {
  let associationChapters = [
    {
      title: "Cyber Security",
      subtitle: "Guardians of the Byte"
    },
    {
      title: "Robotics",
      subtitle: "Mechanical Minds"
    }
  ];

  return (
    <div>
      <div style={{ margin: "50px" ,
         border:"2px solid black", borderRadius:"20px",width:"40%"}}>
        <h1>CSE Association</h1>
        <h3>Department of Computing and Technology</h3>
      </div>
      {associationChapters.map(function (value, index) {
        return (
          <ChapterCard // Use the corrected component name
            key={index} // Add a key prop
            title={value.title}
            subtitle={value.subtitle}
          />
        );
      })}
    </div>
  );
}