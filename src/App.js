import "./App.css";
import Form from "./views/form";
import Card from './views/Card';
import { useStateContext } from "./context/ContextProvider";



function App() {
  const { values, usersRecord } = useStateContext();
  return (
    <div className="App w-[90%] mx-auto mt-10">
      <div className="grid grid-cols-2 gap-2 ">
        <Form user={values} usersRecord={usersRecord} />
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
