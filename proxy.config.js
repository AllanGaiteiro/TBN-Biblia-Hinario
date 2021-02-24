const proxy = [
    {
      context: '/api',
      target: 'https://testeDist.allangaiteiro.repl.co',
      pathRewrite: {'^/api' : ''}
    }
  ];
  mod