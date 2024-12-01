export interface ToastType {
  id: string;
  message: string | JSX.Element;
  type?: "info" | "warning" | "error";
}
