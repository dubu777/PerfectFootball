import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "@/router/routes";
import GlobalStyle from "@/styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import '@/styles/font.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<p>로딩중</p>}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
  </Suspense>
);
