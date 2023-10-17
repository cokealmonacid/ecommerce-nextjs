export const getData = async (url: string) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return await res.json()
}

export const postFormData = async (url: string, data: FormData) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    method: "POST",
    body: data
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res
}