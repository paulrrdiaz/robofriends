import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));

export default store;
