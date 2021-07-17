import { useEffect, useRef } from "react";

const THROTTLING = 50;

const useColumnsToFit = (gridApi) => {
  const nowRef = useRef(Date.now());

  useEffect(() => {
    const handleResize = () => {
      if (gridApi.current) {
        if (Date.now() > nowRef.current + THROTTLING) {
          nowRef.current = Date.now();
          gridApi.current.sizeColumnsToFit();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [gridApi]);
};

export default useColumnsToFit;
