export type ToastType = "warning" | "danger" | "success";

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
};
