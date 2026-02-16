import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import FoundingEraPage from './pages/FoundingEraPage';
import AkhnoorSovereigntyPage from './pages/AkhnoorSovereigntyPage';
import FortsResidencesPage from './pages/FortsResidencesPage';
import LineageFamilyTreePage from './pages/LineageFamilyTreePage';
import RoyalAdministrationLegacyPage from './pages/RoyalAdministrationLegacyPage';
import Post1947TransitionPage from './pages/Post1947TransitionPage';
import CurrentGenerationPage from './pages/CurrentGenerationPage';
import GalleryArchivesPage from './pages/GalleryArchivesPage';
import TimelinePage from './pages/TimelinePage';
import ContactContributionsPage from './pages/ContactContributionsPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const foundingEraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/founding-era',
  component: FoundingEraPage,
});

const akhnoorSovereigntyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/akhnoor-sovereignty',
  component: AkhnoorSovereigntyPage,
});

const fortsResidencesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forts-residences',
  component: FortsResidencesPage,
});

const lineageFamilyTreeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lineage-family-tree',
  component: LineageFamilyTreePage,
});

const royalAdministrationLegacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/royal-administration-legacy',
  component: RoyalAdministrationLegacyPage,
});

const post1947TransitionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post-1947-transition',
  component: Post1947TransitionPage,
});

const currentGenerationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/current-generation',
  component: CurrentGenerationPage,
});

const galleryArchivesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery-archives',
  component: GalleryArchivesPage,
});

const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline',
  component: TimelinePage,
});

const contactContributionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-contributions',
  component: ContactContributionsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  foundingEraRoute,
  akhnoorSovereigntyRoute,
  fortsResidencesRoute,
  lineageFamilyTreeRoute,
  royalAdministrationLegacyRoute,
  post1947TransitionRoute,
  currentGenerationRoute,
  galleryArchivesRoute,
  timelineRoute,
  contactContributionsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
