import React from "react";
import { graphql } from "gatsby";
import Header from "./header";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>
        <Header></Header>
      </h1>
      <h1>{t("welcomeMessage")}</h1>
      <p>{t("name")}</p>
      <p>{t("profession")}</p>
      <p>
        <Trans>My Birthday is 1998/04/25</Trans>
      </p>
      <p>{t("message")}</p>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
