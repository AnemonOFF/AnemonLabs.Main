export function GroupBy<T>(arr: T[], key: keyof T): { [key: string]: T[] } {
  return arr.reduce((acc, item) => {
    const itemKey = item[key] as string;
    (acc[itemKey] = acc[itemKey] || []).push(item);
    return acc;
  }, {} as { [key: string]: T[] });
}
