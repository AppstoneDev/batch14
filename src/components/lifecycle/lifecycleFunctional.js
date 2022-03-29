import { useEffect, useState } from "react"

export default function LifecycleFunctional() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("component has been mounted");
  }, []);

  useEffect(()=>{
    console.log("component has been updated");
  }, [a, b]);

  useEffect(()=>{
    return ()=>{
      console.log("component will be unmounted");
    }
  }, []);

  return (
    <div>
      hello from functional component
      <br />
      {a}
      <br />
      <button onClick={() => { setA(a + 1) }}>
        increase
      </button>
    </div>
  )
}