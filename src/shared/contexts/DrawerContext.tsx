import { createContext, useCallback, useContext, useState } from "react";

type Props = {
  children: React.ReactNode
};

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, [])
  
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }} >
      {children}
    </DrawerContext.Provider>
  )
}