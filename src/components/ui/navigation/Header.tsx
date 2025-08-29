// Header.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/Logo.png";

export default function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState("VND");

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currencies = [
    { code: "VND", name: "Vietnamese Dong" },
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col items-center space-x-2 h-9 ">
          <img src={logo} alt="Logo" className="md:h-auto h-5 w-auto" />
            <span className="md:text-sm text-[11px] font-bold text-foreground">saving Pets</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-accent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search and Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search something here..."
              className="pl-10 pr-4 py-2 h-10 rounded-full"
            />
          </div>

          {/* Action Button */}
          <Button className="rounded-full px-6">Click here</Button>

          {/* Currency Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="h-4 w-4" />
                {selectedCurrency}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {currencies.map((currency) => (
                <DropdownMenuItem
                  key={currency.code}
                  onClick={() => setSelectedCurrency(currency.code)}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative w-4 h-4">
                      <div className="absolute inset-0 bg-destructive rounded-full"></div>
                      <div className="absolute inset-0.5 bg-[#FFDA44] rounded-sm"></div>
                    </div>
                    <span>{currency.code}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8 px-5">
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-base font-medium transition-colors w-[60%]  ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:bg-accent"
                        }`
                      }
                      onClick={() =>
                        document.dispatchEvent(
                          new KeyboardEvent("keydown", { key: "Escape" })
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>

                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search something here..."
                    className="pl-10 pr-4 py-2 h-10 rounded-full"
                  />
                </div>

                {/* Mobile Currency Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative w-4 h-4">
                          <div className="absolute inset-0 bg-destructive rounded-full"></div>
                          <div className="absolute inset-0.5 bg-[#FFDA44] rounded-sm"></div>
                        </div>
                        {selectedCurrency}
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {currencies.map((currency) => (
                      <DropdownMenuItem
                        key={currency.code}
                        onClick={() => setSelectedCurrency(currency.code)}
                        className="flex items-center gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="relative w-4 h-4">
                            <div className="absolute inset-0 bg-destructive rounded-full"></div>
                            <div className="absolute inset-0.5 bg-[#FFDA44] rounded-sm"></div>
                          </div>
                          <span>{currency.code}</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile Action Button */}
                <Button className="w-full rounded-full">Click here</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
