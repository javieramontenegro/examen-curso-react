import React, { Suspense, lazy } from "react";
import CardsContextProvider from "./context/CardsContext";
import Loader from "./components/Common/loading";

import NotFound from "./components/NotFound/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import ErrorBoundary from "./errorBoundary/errorBoundary";
const Details = lazy(() => import("./components/Details/Details"));
const CardsList = lazy(() => import("./components/Cards/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
              <CardsContextProvider>
                <CardsList />
              </CardsContextProvider>
            </ErrorBoundary>
          </Route>

          <Route exact path="/pokemon/:pokemonIndex">
            <ErrorBoundary>
              <CardsContextProvider>
                <Details />
              </CardsContextProvider>
            </ErrorBoundary>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
