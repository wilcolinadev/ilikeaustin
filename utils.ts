export const transformImageUrl = (
  image: string,
  width: number,
  height = null
) => {
  const [baseUrl, imagePath] = image.split('/upload/')
  const transformationParams = [`w_${width}`, 'c_fill', 'q_auto:low', 'f_auto']
  if (height) {
    transformationParams.push(`h_${height}`)
  }
  return `${baseUrl}/upload/${transformationParams.join(',')}/${imagePath}`
}
