import { locales } from "assets/i18n";

export function localeMatch(value: string, exact?: boolean) {
  const { path } = useRoute();

  for (const locale in locales) {
    const _path = `/${locale}${value}`;
    if (exact && path === _path)
      return true;
    else if (!exact && path.startsWith(_path))
      return true;
  }

  return exact ? path === value : path.startsWith(value);
}
