enum Themes {
  Light,
  Dark,
}

const getThemeFromString = (args: { themeName?: string }) => {
  switch (args.themeName?.toLowerCase()) {
    case "dark":
      return Themes.Dark;
    case "light":
      return Themes.Light;
    default:
      return Themes.Dark;
  }
};

export { Themes, getThemeFromString };
