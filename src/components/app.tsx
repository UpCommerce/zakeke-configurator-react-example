import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ZakekeEnvironment, ZakekeViewer, ZakekeProvider } from 'zakeke-configurator-react';
import Selector from './selector';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    height: 100%;
    padding: 40px;
`

const zakekeEnvironment = new ZakekeEnvironment();

const App: FunctionComponent<{}> = () => {
    return <ZakekeProvider environment={zakekeEnvironment}>
        <Layout>
            <Selector />
            <div><ZakekeViewer /></div>
        </Layout>
    </ZakekeProvider>;
}

export default App; 