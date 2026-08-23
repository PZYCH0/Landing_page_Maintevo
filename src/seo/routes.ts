import type { Locale } from './site';
import { LOCALES } from './site';

/* Structured data types a route is allowed to emit. Kept to the ones that
   describe something genuinely on the page — an empty schema is a signal
   Google learns to distrust, and an invented one is a manual-action risk. */
export type SchemaKind =
  | 'SoftwareApplication'
  | 'BreadcrumbList'
  | 'FAQPage';

export type RouteDef = {
  /** Stable id. Also the i18n key under `seo.*`. */
  id: string;
  /** Canonical unprefixed path. '' is the home page. */
  path: string;
  /** Module specifier, so the router and the prerender list agree. */
  importPath: string;
  /** Which locales this route exists in. Defaults to all of them.
      The blog needs this: FR and EN posts are written independently, so
      slug parity cannot be assumed, and hreflang must never point at a
      page that does not exist. */
  locales?: Locale[];
  schema?: SchemaKind[];
};

/* ── The manifest ─────────────────────────────────────────────────────
   One array, four consumers: the router, the prerender route list, the
   sitemap, and the hreflang alternates. Adding a page here is the whole
   job — nothing else has to be told about it. */
export const ROUTES: RouteDef[] = [
  { id: 'home',       path: '',           importPath: './pages/Home',       schema: ['SoftwareApplication'] },
  { id: 'about',      path: 'about',      importPath: './pages/About' },
  { id: 'contact',    path: 'contact',    importPath: './pages/Contact' },
  { id: 'signup',     path: 'signup',     importPath: './pages/Signup' },
  { id: 'pricing',    path: 'pricing',    importPath: './pages/Pricing',    schema: ['SoftwareApplication', 'FAQPage'] },
  { id: 'comparison', path: 'comparison', importPath: './pages/Comparison' },
  { id: 'industries', path: 'industries', importPath: './pages/Industries' },
  { id: 'enterprise', path: 'enterprise', importPath: './pages/Enterprise' },
  { id: 'resources',  path: 'resources',  importPath: './pages/Resources' },
  { id: 'blog',       path: 'blog',       importPath: './pages/Blog' },
  { id: 'kpiDefinitions', path: 'resources/kpi-definitions', importPath: './pages/resources/KpiDefinitions' },
  { id: 'setupChecklist', path: 'resources/setup-checklist', importPath: './pages/resources/SetupChecklist' },

  /* The feature pages are the only ones with a real Home → Feature
     hierarchy, so they are the only ones that earn a breadcrumb. */
  { id: 'workOrders',            path: 'features/work-orders',            importPath: './pages/features/WorkOrders',            schema: ['BreadcrumbList'] },
  { id: 'equipment',             path: 'features/equipment',              importPath: './pages/features/Equipment',             schema: ['BreadcrumbList'] },
  { id: 'preventiveMaintenance', path: 'features/preventive-maintenance', importPath: './pages/features/PreventiveMaintenance', schema: ['BreadcrumbList'] },
  { id: 'inventory',             path: 'features/inventory',              importPath: './pages/features/Inventory',             schema: ['BreadcrumbList'] },
  { id: 'kpiDashboard',          path: 'features/kpi-dashboard',          importPath: './pages/features/KpiDashboard',          schema: ['BreadcrumbList'] },
  { id: 'maintenanceCalendar',   path: 'features/maintenance-calendar',   importPath: './pages/features/MaintenanceCalendar',   schema: ['BreadcrumbList'] },
  { id: 'reporting',             path: 'features/reporting',              importPath: './pages/features/Reporting',             schema: ['BreadcrumbList'] },
  { id: 'roles',                 path: 'features/roles',                  importPath: './pages/features/Roles',                 schema: ['BreadcrumbList'] },
];

/** Which locales a route actually exists in. */
export function localesFor(route: RouteDef): Locale[] {
  return route.locales ?? LOCALES;
}

/** Find the route that owns a canonical unprefixed path. */
export function routeForPath(path: string): RouteDef | undefined {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return ROUTES.find(r => r.path === clean);
}

/** Every (route, locale) pair that should exist as a page. The prerender
    list and the sitemap are both just this, formatted differently. */
export function allPages(): Array<{ route: RouteDef; locale: Locale }> {
  return ROUTES.flatMap(route =>
    localesFor(route).map(locale => ({ route, locale })),
  );
}
