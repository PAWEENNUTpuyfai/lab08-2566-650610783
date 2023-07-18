import { Header } from "@/cpmponents/Header";
import { TaskInput } from "@/components/TaskInput";
import { Task } from "@/conponents/Task";
import { Footer } from "@/conponents/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/*header section*/}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="sleep" />
      </div>
      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Paweennut Prohsoontorn"
        studentId="650610783"
      />
    </div>
  );
}
