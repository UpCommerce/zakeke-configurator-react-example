import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  ZakekeEnvironment,
  ZakekeViewer,
  ZakekeProvider,
  useZakeke,
} from "zakeke-configurator-react";
import Selector from "./selector";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  height: 100%;
  padding: 40px;
`;

const App: FunctionComponent<{}> = () => {
  const { isSceneLoading } = useZakeke();
  return (
    <Layout>
      {isSceneLoading ? (
        <p>Loading scene...</p>
      ) : (
        <>
          <Selector />
          <div>
            <ZakekeViewer bgColor="#f2f2f2" />
          </div>
        </>
      )}
    </Layout>
  );
};

export default App;
