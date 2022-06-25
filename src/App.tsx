import React, { FC, useEffect, useState } from "react";
import routerMount from "@/router";

interface AppProps {
  children?: JSX.Element | JSX.Element[];
  name: string;
}

const App: FC<AppProps> = (props) => {
  return <div id="app">{props.children}</div>;
};

export type AppType = typeof App;

export default routerMount(App!);
