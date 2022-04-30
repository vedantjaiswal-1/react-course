import React, { useEffect, useState } from "react";
import { HookExample } from "../Hook/HookExample";
import { UseEffectExample } from "../Hook/UseEffectExample";

export const About = (props: any) => {
  return (
    <div>
      <HookExample />
      <hr/>
      <UseEffectExample />
    </div>
  );
};
