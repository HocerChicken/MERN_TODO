import React from "react";
import { BulletPoint, KeyContainer } from "./styles";

function Key() {
  return (
    <KeyContainer>
      <BulletPoint>Not Complete</BulletPoint>
      <BulletPoint className="last">Complete</BulletPoint>
    </KeyContainer>
  );
}

export default Key;
