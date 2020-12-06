const proxy = [
    {
      context: '/api',
      target: 'http://localhost:4200',
      pathRewrite: {'^/api' : ''}
    }
  ];
  mod