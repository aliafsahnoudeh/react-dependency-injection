import React from 'react';
import Service from '../services/service/service'
import Logger from '../services/logger/logger'

export const SERVICE_CONTEXT = React.createContext<Service | null>(null);
export const LOGGER_CONTEXT = React.createContext<Logger | null>(null);