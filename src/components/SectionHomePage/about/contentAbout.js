import React from "react";
import { Heading, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { datapf } from "data/dataAbout";

const ContentAbout = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Heading size="md" lineHeight="10">
        {t("Name")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {`${t(datapf.name)} (${t(datapf.nickname)})`}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        {t("Age")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {datapf.age}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        {t("Personality Types")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {t(datapf.personality)}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        {t("Language")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {t(datapf.language)}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        {t("Hobby")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {t(datapf.hobby)}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        {t("Email")} :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          <Link href={`mailto: ${datapf.email} `}>{datapf.email} </Link>
        </Heading>
      </Heading>
    </div>
  );
};

export default ContentAbout;
