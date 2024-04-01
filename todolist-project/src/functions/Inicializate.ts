export function InitialBoot<T = {}>(): T {
    const propriedades: Partial<T> = {};
  
    for (const propriedade in propriedades) {
      if (propriedades.hasOwnProperty(propriedade)) {
        const valorPadrao = obterValorPadrao(propriedades[propriedade]);
        propriedades[propriedade] = valorPadrao;
      }
    }
  
    return propriedades as T;
  }
  
  function obterValorPadrao<T>(valor: T): T {
    if (typeof valor === 'string') {
      return '' as T;
    } else if (typeof valor === 'number') {
      return 0 as T;
    } else {
      return valor;
    }
  }