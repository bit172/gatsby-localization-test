import React from "react";
import { graphql, Link } from "gatsby";
import Header from "./header";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Page2Page = ({ data }) => {
  const { t } = useTranslation("page2");
  console.log(data);
  return (
    <main>
      <h1>
        <Header></Header>
      </h1>
      <h1>{t("message")}</h1>
      <Link to="/">Page 1</Link>
    </main>
  );
};

export default Page2Page;

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
