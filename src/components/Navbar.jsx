import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  Link,
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import { ThemeSwitch } from "./ThemeSwitch";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const languages = [
  { code: "id", label: "Indonesia", flag: "🇮🇩", short: "ID" },
  { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
  { code: "ja", label: "日本語", flag: "🇯🇵", short: "JP" },
  { code: "zh", label: "中文", flag: "🇨🇳", short: "ZH" },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.home") || "Home", href: "/" },
    { label: t("nav.price") || "Harga", href: "#harga" },
    { label: t("nav.contact") || "Kontak", href: "#kontak" },
  ];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          "transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl backdrop-saturate-150 border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-transparent border-b border-transparent",
        ].join(" "),
        wrapper: "px-4 sm:px-6 lg:px-8",
      }}
    >
      {/* ── Brand ── */}
      <NavbarContent justify="start">
        <NavbarBrand className="max-w-fit">
          <Link href="/" className="flex items-center gap-2.5 group" color="foreground">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg shadow-blue-900/40" />
              <span className="relative text-white">
                <Logo />
              </span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-slate-900 dark:text-white">
              Undangan
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                .Digital
              </span>
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* ── Desktop Nav (Center) ── */}
      <NavbarContent className="hidden lg:flex gap-0.5" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className="relative group px-3.5 py-2 text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-150"
            >
              {item.label}
              <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-gradient-to-r from-blue-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* ── Desktop Right ── */}
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <div className="flex items-center gap-3">
            <ThemeSwitch />

            {/* Language Switcher */}
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150">
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.short}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Language selector"
                onAction={(key) => i18n.changeLanguage(key)}
                classNames={{
                  base: "min-w-[160px]",
                }}
              >
                {languages.map((lang) => (
                  <DropdownItem
                    key={lang.code}
                    startContent={<span className="text-base">{lang.flag}</span>}
                    className={
                      i18n.language === lang.code
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : ""
                    }
                  >
                    {lang.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Divider */}
            <span className="w-px h-4 bg-black/10 dark:bg-white/10" />

            <Button
              as={Link}
              href="#harga"
              size="sm"
              radius="none"
              className="relative overflow-hidden px-5 py-2 text-[13px] font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-200 shadow-md shadow-blue-900/30"
            >
              {t("common.orderNow") || "Order Now"}
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* ── Mobile Right ── */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          className="text-slate-300"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        />
      </NavbarContent>

      {/* ── Mobile Menu ── */}
      <NavbarMenu className="bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-6 pb-8 border-t border-black/5 dark:border-white/5">
        <div className="flex flex-col gap-1 mt-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                color="foreground"
                className="w-full text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-3 px-2 border-b border-black/5 dark:border-white/5 transition-colors"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Mobile Language Switcher */}
          <NavbarMenuItem className="mt-2">
            <div className="py-3 px-2 border-b border-black/5 dark:border-white/5">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Bahasa / Language
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      i18n.language === lang.code
                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.short}</span>
                  </button>
                ))}
              </div>
            </div>
          </NavbarMenuItem>

          <NavbarMenuItem className="mt-4">
            <Button
              as={Link}
              href="#kontak"
              radius="none"
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base py-3 shadow-lg shadow-blue-900/30"
              onPress={() => setIsMenuOpen(false)}
            >
              {t("common.orderNow") || "Order Now"}
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
