interface AnyObject {
  [key: string]: unknown;
}

export async function request<T = AnyObject>(url: string): Promise<T> {
  const responce = await fetch(url);

  return responce.json();
}

interface TodosObj {
  id: string;
  complited: boolean;
  title: string;
}

const data = request<TodosObj[]>("");
