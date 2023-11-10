"use client";
import { store, persistor } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/integration/react";
import { ChildrenProps } from "@/types/types";

const Provider = ({ children }: ChildrenProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default Provider;
