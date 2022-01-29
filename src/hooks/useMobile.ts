import * as React from "react";

const useMobile = () => {
  const [width, setWidth] = React.useState<number>(1024);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useMobile;
