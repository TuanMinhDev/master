import { adminRoutes } from "./routes/admin-routes";
import { reportRoutes } from "./routes/report-routes";
import { serviceRoutes } from "./routes/service-routes";
import { RouteItem } from "./types";

export const protectedRoutes: RouteItem[] = [...adminRoutes, ...reportRoutes, ...serviceRoutes];
