import React from "react";
import { Heading, Link } from "@chakra-ui/react";
import { datapf } from "data/dataAbout";

const ContentAbout = () => {
  return (
    <div style={{ width: "" }}>
      <Heading size="md" lineHeight="10">
        Name :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {`${datapf.name} (${datapf.nickname})`}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        Age :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {datapf.age}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        Personality Types :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {datapf.personality}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        Language :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {datapf.language}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        Hobbies & Interests :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          {datapf.hobbiesandinterests}
        </Heading>
      </Heading>

      <Heading size="md" lineHeight="10">
        Email :{" "}
        <Heading as="span" size="md" fontWeight="normal">
          <Link href={`mailto: ${datapf.email} `}>{datapf.email} </Link>
        </Heading>
      </Heading>
    </div>
  );
};

export default ContentAbout;
