import { ReactProvider } from "../../common/interfaces/react.provider";
import { LOGGER_CONTEXT } from '../../common/context.list';
import Logger from "./logger";
import LoggerImpl from './logger.impl';

const LOGGER_PROVIDER: ReactProvider<Logger> = {
    module: LoggerImpl,
    provides: LOGGER_CONTEXT,
    optionalDependencies: [LOGGER_CONTEXT]
};

export default LOGGER_PROVIDER