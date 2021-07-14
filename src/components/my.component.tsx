import { FC, useContext } from 'react';
import { SERVICE_CONTEXT, LOGGER_CONTEXT } from './constext.list';
import Service from './service'
import Logger from './logger'


const MyComponent: FC = ({ children }) => {
    // resolve the dependencies
    const logger = useContext(LOGGER_CONTEXT) as Logger;
    const service = useContext(SERVICE_CONTEXT) as Service;
    logger.log('rendering ...');
    // produce some markup
    return <div>{service.do()}</div>;
  };

export default MyComponent;