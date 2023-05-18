function validateInstance(instans: number) {
  const length = instans.toString().length
 return length > 8 && length < 15
}

function validateToken(token: string) {
  const tokenlenght = token.length
  return tokenlenght > 40 && tokenlenght < 100;
}


export { validateInstance, validateToken };
