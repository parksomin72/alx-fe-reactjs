import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
