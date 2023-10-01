import passwordGenerator from 'password-generator'

// Função para gerar uma senha que atende aos critérios
function gerarSenha() {
  // Defina os critérios para a senha
  const options = {
    length: 8, // Comprimento da senha
    numbers: true, // Deve conter números
    uppercase: true, // Deve conter letras maiúsculas
    lowercase: true, // Deve conter letras minúsculas
    symbols: true, // Deve conter símbolos (caracteres especiais)
    excludeSimilarCharacters: true, // Evitar caracteres semelhantes (por exemplo, 'i' e 'l')
  }

  // Gere a senha com base nos critérios
  const senhaGerada = passwordGenerator(options)

  return senhaGerada
}

export default gerarSenha
