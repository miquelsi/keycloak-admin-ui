import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormGroup,
  Switch,
  Checkbox,
  Grid,
  GridItem,
} from "@patternfly/react-core";

import { ClientRepresentation } from "../models/client-model";

type Step2Props = {
  onChange: (
    value: string | boolean,
    event: FormEvent<HTMLInputElement>
  ) => void;
  client: ClientRepresentation;
};

export const Step2 = ({ client, onChange }: Step2Props) => {
  const { t } = useTranslation("clients");
  return (
    <Form isHorizontal>
      <FormGroup label={t("clientAuthentication")} fieldId="kc-authentication">
        <Switch
          id="kc-authentication"
          name="publicClient"
          label={t("common:on")}
          labelOff={t("common:off")}
          isChecked={client.publicClient}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup label={t("clientAuthorisation")} fieldId="kc-authorisation">
        <Switch
          id="kc-authorisation"
          name="authorizationServicesEnabled"
          label={t("common:on")}
          labelOff={t("common:off")}
          isChecked={client.authorizationServicesEnabled}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup label={t("authenticationFlow")} fieldId="kc-flow">
        <Grid>
          <GridItem span={6}>
            <Checkbox
              label={t("standardFlow")}
              aria-label="Enable standard flow"
              id="kc-flow-standard"
              name="standardFlowEnabled"
              isChecked={client.standardFlowEnabled}
              onChange={onChange}
            />
          </GridItem>
          <GridItem span={6}>
            <Checkbox
              label={t("directAccess")}
              aria-label="Enable Direct access"
              id="kc-flow-direct"
              name="directAccessGrantsEnabled"
              isChecked={client.directAccessGrantsEnabled}
              onChange={onChange}
            />
          </GridItem>
          <GridItem span={6}>
            <Checkbox
              label={t("implicidFlow")}
              aria-label="Enable implicid flow"
              id="kc-flow-implicid"
              name="implicitFlowEnabled"
              isChecked={client.implicitFlowEnabled}
              onChange={onChange}
            />
          </GridItem>
          <GridItem span={6}>
            <Checkbox
              label={t("serviceAccount")}
              aria-label="Enable service account"
              id="kc-flow-service-account"
              name="serviceAccountsEnabled"
              isChecked={client.serviceAccountsEnabled}
              onChange={onChange}
            />
          </GridItem>
        </Grid>
      </FormGroup>
    </Form>
  );
};
