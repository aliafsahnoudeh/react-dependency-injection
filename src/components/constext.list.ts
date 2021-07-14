import React from 'react';
import Service from './service'
import Logger from './logger'

export const SERVICE_CONTEXT = React.createContext<Service | null>(null);
export const LOGGER_CONTEXT = React.createContext<Logger | null>(null);