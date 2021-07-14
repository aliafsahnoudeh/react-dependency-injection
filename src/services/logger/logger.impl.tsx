import { FC } from 'react';
import { LOGGER_CONTEXT } from '../../common/constext.list';
import Logger from './logger';

class LoggerImplementation implements Logger {
  public log(message: string) {
    console.log(message);
  }
}

const LoogerImpl: FC = ({ children }) => {
    // the service
    const logger: Logger = new LoggerImplementation();
    // provide the dependency
    return (
      <LOGGER_CONTEXT.Provider value={logger}>
        {children}
      </LOGGER_CONTEXT.Provider>
    );
  };

export default LoogerImpl;