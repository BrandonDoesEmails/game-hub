import { RouterProvider } from "react-router-dom";
import router from "./routes/allroutes";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
