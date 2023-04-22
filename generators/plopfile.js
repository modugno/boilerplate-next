module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Novo component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do Component:'
      },
      {
        type: 'list',
        name: 'folder',
        message: 'Onde ele vai ficar?',
        choices: ['components', 'templates', 'pages']
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: `../src/${data.folder}/{{pascalCase name}}/index.tsx`,
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: `../src/${data.folder}/{{pascalCase name}}/types.ts`,
          templateFile: 'templates/types.ts.hbs'
        }
      ]

      if (data.folder !== 'pages') {
        actions.push({
          type: 'add',
          path: `../src/${data.folder}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: 'templates/stories.tsx.hbs'
        })

        actions.push({
          type: 'add',
          path: `../src/${data.folder}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
          templateFile: 'templates/test.tsx.hbs'
        })
      }

      return actions
    }
  })
}
