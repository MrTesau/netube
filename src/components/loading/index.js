import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ ...restProps }) {
  return (
    <Spinner {...restProps}>
      {/*   <Picture src={`/images/users/1.png`} data-testid="loading-picture" /> */}
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
