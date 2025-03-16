import React from "react";
import Hack4Brahma from "./Hack4Brahma";


function App() {
  return (
    <div>
      <Hack4Brahma 
        sentence="Hack4Brahma"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}

export default App;