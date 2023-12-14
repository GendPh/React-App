interface StudentProps {
  name?: string;
  age?: number;
  isStudent?: boolean;
}

export default function Student(props: StudentProps) {
  const { name = "Guest", age = 0, isStudent = false } = props;

  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? <a href="#">Yes</a> : "No"}</p>
    </div>
  );
}
