"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/config/navigation";
import { useTransition } from "react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { appLocales } from "@/config/locales";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: SelectChangeEvent<string>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (
    <Box>
      <Select
        defaultValue={currentLocale}
        disabled={isPending}
        onChange={onSelectChange}
        size="small"
      >
        {appLocales.map(({ locale }) => (
          <MenuItem
            key={locale}
            value={locale}
          >
            {locale}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
