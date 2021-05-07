import React from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
`;

const Loader = () => {
  return (
    <FadeLoader color="#828c84" loading="true" css={override} size={100} />
  );
};

export default Loader;
