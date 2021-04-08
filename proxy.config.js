const proxy = [
    {
      context: '/api',
      target: 'https://App-Tabernaculo.allangaiteiro.repl.co',
      pathRewrite: {'^/api' : ''}
    }
  ];
  mod