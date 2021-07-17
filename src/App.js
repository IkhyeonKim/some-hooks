import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import styled from "styled-components";
import { useRef, useState } from "react";
import useColumnsToFit from "./hooks/use-columns-to-fit";

const GridWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  const [gridApi, setGridApi] = useState();

  const gridApiRef = useRef();

  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000, rate: 5 },
    { make: "Ford", model: "Mondeo", price: 32000, rate: 5 },
    { make: "Porsche", model: "Boxter", price: 72000, rate: 5 },
    { make: "Tesla", model: "Y", price: 72000, rate: 5 },
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
    gridApiRef.current = params.api;

    params.api.sizeColumnsToFit();
  };

  useColumnsToFit(gridApiRef);

  return (
    <GridWrapper>
      <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
        <AgGridReact rowData={rowData} onGridReady={onGridReady}>
          <AgGridColumn field="make"></AgGridColumn>
          <AgGridColumn field="model"></AgGridColumn>
          <AgGridColumn field="price"></AgGridColumn>
          <AgGridColumn field="rate"></AgGridColumn>
        </AgGridReact>
      </div>
    </GridWrapper>
  );
}

export default App;
