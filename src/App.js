import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo
} from "react";
import HooksMouse from "./HooksMouse";
import HooksReducer from "./HooksReducer";
import Random from "./Random";

export const DemoContext = React.createContext(23); //  giving default value 23;
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState({
    country: "India",
    city: "bangalore"
  });

  const [phno, setPhno] = useState([123, 12342, 123432, 1234]);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(
      "The function passed to useLayoutEffect will be run before the browser updates the screen."
    );
  });

  useEffect(() => {
    console.log("Logging when only name change");
    return () => {
      //cleanup, the code you write in componentWillUnmount
    };
  }, [name]);

  useEffect(() => {
    console.log("inside ref");
    document.title = email; // write title only when count is changed
  });

  let testCallBackHooks = useCallback(() => {
    console.log("callback hools", name);
  }, [name]);

  let isEven = useMemo(() => {
    console.log("inside use memo");
    if (email.length % 2 === 0) return "Even";
    else return "Odd";
  }, [email]);

  return (
    <DemoContext.Provider value={55}>
      <div style={{ margin: "50px 50px" }}>
        <form>
          <label htmlFor=""></label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={() => setName(prev => prev + "done")} // update state based on previous state value
          />
          {name}
          <br />
          <br />
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />{" "}
          {email}
        </form>
        <br />
        <br />
        <div>{JSON.stringify(address)}</div>
        <button
          type="button"
          onClick={() => setAddress({ ...address, city: "kanpur" })}
        >
          Change Address
        </button>
        <br />
        <br />
        <div>{JSON.stringify(phno)}</div>
        <button
          type="button"
          onClick={() => setPhno([...phno, 1234, 1234, 1234, 1234])}
        >
          Change Phno
        </button>
        <br />
        <br />
        <button type="button" onClick={() => setCount(prev => prev + 1)}>
          Increment Count and Write email to Title
        </button>
        {count}
        <br />
        <br />
        <HooksMouse />
        <br />
        <HooksReducer />
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="focus"
          ref={inputRef}
        />
        <Random callme={() => testCallBackHooks()}>{testCallBackHooks}</Random>
        {isEven} :Email length
      </div>
    </DemoContext.Provider>
  );
}

export default App;
