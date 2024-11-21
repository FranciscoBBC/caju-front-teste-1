import Router from "~/router";
import { Header } from "./components/Header";
import ReactQueryProvider from "./utils/reactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <ReactQueryProvider>
        <Router />
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </ReactQueryProvider>
    </>
  );
}

export default App;
