import { FC, useContext } from 'react';
import { SERVICE_CONTEXT, LOGGER_CONTEXT } from '../common/constext.list';
import Service from '../services/service/service'
import Logger from '../services/logger/logger'


const MyComponent: FC = ({ children }) => {
    // resolve the dependencies
    const logger = useContext(LOGGER_CONTEXT) as Logger;
    const service = useContext(SERVICE_CONTEXT) as Service;
    logger.log('rendering ...');
    // produce some markup
    return <div>{service.do()}</div>;
  };

export default MyComponent;