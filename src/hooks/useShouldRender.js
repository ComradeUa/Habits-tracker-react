import { useCallback, useState } from 'react';
const useShouldRender = () => {
  const [shouldRenderInput, setShouldRenderInput] = useState(true);
  const handleToggleRender = useCallback(() => {
    setShouldRenderInput((prev) => !prev);
  }, []);
  return { shouldRenderInput, setShouldRenderInput, handleToggleRender };
};
export default useShouldRender;
