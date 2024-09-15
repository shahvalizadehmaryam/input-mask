import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
   const [input, setInput] = useState("");
   const [suggestion, setSuggestion] = useState("");

   const handleInputChange = (e) => {
      const value = e.target.value;
      setInput(value);
      // Check if the first character is uppercase
      if (value.length > 0 && value.charAt(0) === value.charAt(0).toUpperCase()) {
         const firstMatch = cities.find((city) => city.toLowerCase().startsWith(value.toLowerCase()));
         
         if (firstMatch) {
            setSuggestion(firstMatch);
         } else {
            setSuggestion(""); // Clear suggestion if no match is found
         }
      } else {
         setSuggestion(""); // Clear suggestion if first character is not uppercase
      }
   };

   return (
      <div>
         <Input handleChange={handleInputChange} hint={suggestion} />
      </div>
   );
}

export default App;
