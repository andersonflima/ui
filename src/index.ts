import "./styles/index.css";

// Utilitários
export { cn } from "./lib/cn";
export * from "./lib/motion";

// Providers / tema
export {
  ThemeProvider,
  useTheme,
  type Theme,
  type ThemePreference,
  type ThemeProviderProps,
} from "./providers/theme-provider";

// Ações
export { Button, buttonVariants, type ButtonProps } from "./components/button/button";

// Layout
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/card/card";
export { Section, type SectionProps } from "./components/section/section";
export { Separator } from "./components/separator/separator";

// Formulários
export { Input, type InputProps } from "./components/input/input";
export { Textarea, type TextareaProps } from "./components/textarea/textarea";
export { Label, type LabelProps } from "./components/label/label";
export { Field, type FieldProps } from "./components/field/field";
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./components/select/select";
export { Checkbox, type CheckboxProps } from "./components/checkbox/checkbox";
export {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
  type RadioGroupItemProps,
} from "./components/radio-group/radio-group";
export { Switch, type SwitchProps } from "./components/switch/switch";
export { Slider, type SliderProps } from "./components/slider/slider";

// Overlays
export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/dialog/dialog";
export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  type DrawerContentProps,
} from "./components/drawer/drawer";
export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./components/tooltip/tooltip";
export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
} from "./components/popover/popover";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "./components/dropdown-menu/dropdown-menu";

// Feedback
export { Badge, badgeVariants, type BadgeProps } from "./components/badge/badge";
export { Avatar, AvatarImage, AvatarFallback } from "./components/avatar/avatar";
export { Spinner, type SpinnerProps } from "./components/spinner/spinner";
export { Skeleton } from "./components/skeleton/skeleton";
export { Progress, type ProgressProps } from "./components/progress/progress";
export {
  LoadingOverlay,
  type LoadingOverlayProps,
} from "./components/loading-overlay/loading-overlay";
export { ToastProvider, useToast, type ToastData } from "./components/toast/toast";

// Disclosure / navegação
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs/tabs";
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/accordion/accordion";

// Tema (toggle)
export { ThemeToggle, type ThemeToggleProps } from "./components/theme-toggle/theme-toggle";

// Animação
export { Reveal, type RevealProps } from "./components/reveal/reveal";
export {
  MagneticLink,
  type MagneticLinkProps,
} from "./components/magnetic-link/magnetic-link";
export {
  ScrollProgress,
  type ScrollProgressProps,
} from "./components/scroll-progress/scroll-progress";
