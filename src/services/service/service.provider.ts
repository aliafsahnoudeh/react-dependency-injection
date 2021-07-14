import { ReactProvider } from "../../common/interfaces/react.provider";
import { SERVICE_CONTEXT, LOGGER_CONTEXT } from '../../common/context.list';
import Service from "./service";
import ServiceImpl from './service.impl';

const SERVICE_PROVIDER: ReactProvider<Service> = {
    module: ServiceImpl,
    provides: SERVICE_CONTEXT,
    optionalDependencies: [LOGGER_CONTEXT]
};

export default SERVICE_PROVIDER