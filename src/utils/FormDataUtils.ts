export function jsonToFormData(json: Record<string, any>) {
  const formData = new FormData();
  Object.keys(json).forEach((key) => formData.append(key, json[key]));
  return formData;
}
