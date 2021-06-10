import * as React from "react";

import {
  UserProvider,
} from "../../hooks";

export default function GlobalProvider({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <UserProvider>
        {children}
    </UserProvider>
  );
}
