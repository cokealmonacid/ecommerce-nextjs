export const getData = async (url: string) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    cache: 'no-cache'
  })

  return await res.json()
}

export const postData = async (url: string, body: {[key: string] : string}) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    method: "POST",
    body: JSON.stringify(body)
  })

  return res.json()
}

export const deleteData = async (url: string, id: string) => {
  const res = await fetch(`http://localhost:3000/api/${url}/${id}`, {
    method: "DELETE"
  })

  return res;
}

export const postFormData = async (url: string, data: FormData) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    method: "POST",
    body: data
  })

  if (!res.ok) {
    const { message } = await res.json()
    throw new Error(message)
  }

  return res.json()
}