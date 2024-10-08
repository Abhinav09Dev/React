import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8); // loop will run based on the length of the password
  const [nums, setNums] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback react hook, it is used to avoid unnecessary re-rendering stores in cache memory
  // const xyz = useCallback(() => {}, []) // xyz is a callback function and [] is an array of dependencies

  // For optimization
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNAOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nums) {
      str += "0123456789";
    }
    if (special) {
      str += "!@#$%^&*()";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, nums, special]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password) // Copy to clipboard function
  }, [password]);

  // useEffect hook

  useEffect(() => {
    generatePassword();
  }, [length, nums, special, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-8 text-orange-500 bg-gray-900">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={nums}
              onChange={() => {
                setNums((prev) => !prev); // Reversing previous values
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={special}
              onChange={() => {
                setSpecial((prev) => !prev);
              }}
            />
            <label htmlFor="specialInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
