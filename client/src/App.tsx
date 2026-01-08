import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { WaitlistModal } from "@/components/modals/WaitlistModal";

function GlobalWaitlistAndRouter() {
  const { isWaitlistOpen, closeWaitlist } = useModal();
  return (
    <>
      <Router />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <GlobalWaitlistAndRouter />
      </ModalProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
