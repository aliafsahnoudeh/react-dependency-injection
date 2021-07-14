// import { FC } from 'react';
// import MyComponent from './my.component'
// import ServiceImpl from './service.impl'
// import LoggerImpl from './logger.impl'

// const MyApp: FC = () => (
//     <LoggerImpl>
//       <ServiceImpl>
//         <MyComponent></MyComponent>
//       </ServiceImpl>
//     </LoggerImpl>
//   );

import { FC } from 'react';
import { createModuleFromProvider } from 'rx-react-component';
import MyComponent from './my.component'
import SERVICE_PROVIDER from './service.provider'
import LOGGER_PROVIDER from './logger.provider'
import './App.css';

const Module = createModuleFromProvider([SERVICE_PROVIDER, LOGGER_PROVIDER]);
const App: FC = () => (
    <Module>
        <MyComponent></MyComponent>
    </Module>
);

export default App;
