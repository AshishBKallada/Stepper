import "./App.css";
import HelperForm from "./Components/CheckoutForms/HelperForm";
import OwnerForm from "./Components/CheckoutForms/OwnerForm";
import PlanForm from "./Components/CheckoutForms/PlanForm";
import SummaryForm from "./Components/CheckoutForms/Summary";
import CheckoutStepper from "./Components/Stepper";

const steps = [
  {
    name: "Owner Details",
    Component: ()=><OwnerForm/>,
  },
  {
    name: "Add Helper",
    Component: () => <HelperForm />,
  },
  {
    name: "Add plan",
    Component: () => <PlanForm />,
  },
  {
    name: "Summary",
    Component: () => <SummaryForm />,
  },
];

function App() {
  return (
    <>
      <CheckoutStepper steps={steps} />
    </>
  );
}

export default App;
