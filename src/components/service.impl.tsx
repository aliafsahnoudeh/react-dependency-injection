import { FC, useContext } from 'react';
import Service from "./service"
import Logger from "./logger"
import { SERVICE_CONTEXT, LOGGER_CONTEXT } from './constext.list';

class ServiceImplementation implements Service {
  private logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }
  public do() {
    this.logger.log('invoke service');
    return 'somedata';
  }
}

const ServiceImpl: FC = ({ children }) => {
    // resolve the dependencies
    const logger = useContext(LOGGER_CONTEXT) as Logger;
    // the service
    const service: Service = new ServiceImplementation(logger);
    // provide the dependency
    return (
      <SERVICE_CONTEXT.Provider value={service}>
        {children}
      </SERVICE_CONTEXT.Provider>
    );
  };

export default ServiceImpl;