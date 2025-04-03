import React from "react";
import Approutes from "./routes/Approutes";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <div>
      <Approutes />
      <Toaster/>
    </div>
  );
};

export default App;
