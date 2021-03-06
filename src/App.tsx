import React from "react";
import { Page, PageSection } from "@patternfly/react-core";
import { Header } from "./PageHeader";
import { PageNav } from "./PageNav";

import { Help } from "./components/help-enabler/HelpHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewRealmForm } from "./realm/add/NewRealmForm";
import { NewClientForm } from "./clients/add/NewClientForm";
import { ImportForm } from "./clients/import/ImportForm";
import { ClientsSection } from "./clients/ClientsSection";
import { ClientScopesSection } from "./client-scopes/ClientScopesSection";
import { RealmRolesSection } from "./realm-roles/RealmRolesSection";
import { UsersSection } from "./user/UsersSection";
import { GroupsSection } from "./groups/GroupsSection";
import { SessionsSection } from "./sessions/SessionsSection";
import { EventsSection } from "./events/EventsSection";
import { RealmSettingsSection } from "./realm-settings/RealmSettingsSection";
import { AuthenticationSection } from "./authentication/AuthenticationSection";
import { IdentityProvidersSection } from "./identity-providers/IdentityProvidersSection";
import { UserFederationSection } from "./user-federation/UserFederationSection";

import { PageNotFoundSection } from "./PageNotFoundSection";

export const App = () => {
  return (
    <Router>
      <Help>
        <Page header={<Header />} isManagedSidebar sidebar={<PageNav />}>
          <PageSection variant="light">
            <Switch>
              <Route exact path="/add-realm" component={NewRealmForm}></Route>

              <Route exact path="/clients" component={ClientsSection}></Route>
              <Route exact path="/add-client" component={NewClientForm}></Route>
              <Route exact path="/import-client" component={ImportForm}></Route>

              <Route
                exact
                path="/client-scopes"
                component={ClientScopesSection}
              ></Route>
              <Route
                exact
                path="/realm-roles"
                component={RealmRolesSection}
              ></Route>
              <Route exact path="/users" component={UsersSection}></Route>
              <Route exact path="/groups" component={GroupsSection}></Route>
              <Route exact path="/sessions" component={SessionsSection}></Route>
              <Route exact path="/events" component={EventsSection}></Route>

              <Route
                exact
                path="/realm-settings"
                component={RealmSettingsSection}
              ></Route>
              <Route
                exact
                path="/authentication"
                component={AuthenticationSection}
              ></Route>
              <Route
                exact
                path="/identity-providers"
                component={IdentityProvidersSection}
              ></Route>
              <Route
                exact
                path="/user-federation"
                component={UserFederationSection}
              ></Route>

              <Route exact path="/" component={ClientsSection} />
              <Route component={PageNotFoundSection} />
            </Switch>
          </PageSection>
        </Page>
      </Help>
    </Router>
  );
};
