export const get = async (
  url,
  defaultResponse = { data: [], message: "", isError: false }
) => {
  try {
    const result = await fetch(url)
    const json = await result.json()
    return { ...defaultResponse, data: json }
  } catch (error) {
    error.isError = true
    return { ...defaultResponse, message: error.message }
  }
}

export const post = async (url, formData) => {
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const json = await result.json()
    return { data: json }
  } catch (error) {
    error.isError = true
    return { ...defaultResponse, message: error.message }
  }
}
