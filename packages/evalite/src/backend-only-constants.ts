// Constants that cannot be used in frontend code

import path from "node:path";
import { CACHE_LOCATION } from "./constants.js";

export const FILES_LOCATION = path.join(CACHE_LOCATION, "files");
