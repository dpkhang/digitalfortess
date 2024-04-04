export enum ModeEnum {
  LIGHT = "light",
  DARK = "dark",
}

export type AppContextType = {
  loading: boolean;
  setLoading: (bool: boolean) => void;
  isOnBoard: boolean;
  setOnBoard: (bool: boolean) => void;
  refreshData: number;
  setRefreshData: () => void;
  errorMessage: string;
  setErrorMessage: (mess: string) => void;
};

export type NavItemType = {
  label: string;
  path: string;
  external?: boolean;
};

export type MainNavItemType = {
  groupName: string;
  navItems: NavItemType[];
};
