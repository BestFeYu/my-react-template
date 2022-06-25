import React, { useEffect, useMemo } from "react";
import { routerList } from "./routerList";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { AppType } from "../App";
import jsCookie from "js-cookie";

type RouterMount<T> = (App: T) => T;

function getModules() {
  const components = import.meta.glob("../views/**/*.tsx");
  return components;
}

function getComponents() {
  const components = import.meta.globEager("../views/**/*.tsx");
  return components;
}

// 注册路由
const routerMount: RouterMount<AppType> = (App) => (props) => {
  const modules = useMemo(() => getModules(), []);
  const components = useMemo(() => getComponents(), []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!jsCookie.get("token")) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <App {...props}>
      <Routes>
        <Route path="/" element={<Navigate to="/index" replace />} />
        {Object.keys(modules).map((key) => {
          const viewSrc = components[key];
          const File = viewSrc.default;
          return (
            <Route
              key={File.name}
              path={
                routerList.find(({ path, component }) => component === key)
                  ?.path
              }
              element={<File />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </App>
  );
};

export default routerMount;
