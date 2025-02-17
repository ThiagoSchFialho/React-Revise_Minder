# Revise Minder 🧠

<p>Esse projeto tem o objetivo de prover um lugar para que seja possível organizar as revisões dos estudos com mais facilidade, tendo em vista que as revisões são surpreendentemente efetivas no processo de aprendizagem.</p>
<p>Porém, segundo Ebbinghaus, para que essas revisões sejam mais efetivas, elas precisam ser feitas em um intervalo de tempo especifico.</p>

<ul>
  <li>A primeira, 24h após os estudos</li>
  <li>A segunda, 1 semana após os estudos</li>
  <li>E a terceira, 1 mês após os estudos</li>
</ul>

<p>O  problema é que mesmo fazendo as revisões, os estudos continuarão e novas revisões precisarão ser planejadas, dificultando bastante a organização.</p>
<p>E é aqui que esse projeto entra, a ideia é a partir dos horários de estudo do usuário, fazer todo o planejamento das revisões e mostrar quais são as revisões que precisam ser feitas em cada dia.</p>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
