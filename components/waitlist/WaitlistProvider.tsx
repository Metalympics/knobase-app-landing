"use client";

import { createContext, useContext, useState } from "react";
import { WaitlistModal } from "./WaitlistModal";

interface WaitlistContextValue {
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue>({
  openWaitlist: () => {},
  closeWaitlist: () => {},
});

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WaitlistContext.Provider
      value={{
        openWaitlist: () => setIsOpen(true),
        closeWaitlist: () => setIsOpen(false),
      }}
    >
      {children}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WaitlistContext.Provider>
  );
}
