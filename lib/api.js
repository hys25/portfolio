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
    const errorJSON = JSON.parse(JSON.stringify(error))
    return { ...defaultResponse, ...errorJSON }
  }
}
