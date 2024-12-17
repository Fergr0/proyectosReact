import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const resetear = () => setCount(initialValue);

  return { count, incrementar, decrementar, resetear };
}

export default useCounter;
