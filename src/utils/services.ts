export const getData = async (url: string) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json()
}