### Inicializa o Typescript
```npx tsc --init```

### Converte ts - js
```npx tsc```

## Configurando Tokens

O tsup consegue converter pra varios formatos diferentes - pra js e ecma modules - tornando muito mais flexível. Ampliando o alcance.

# Monorepo

Inportant:

-> packages/ tokens/ package.json
-> packages/ react/ package.json


{   
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsup src/index.tsx --format esm, cjs --dts --external react",
    "dev": "tsup src/index.tsx --format esm, cjs --dts --watch"
  }

}

---

npm i -D @types/react react @types/react-dom


---

## Storybook

npx sb init --builder @storybook/builder-vite
 --type react --use-npm
... 

Solutions

npx sb init --builder=vite @storybook/builder-vite --type react

npx storybook@latest init --builder vite  --type react

---

npm i vite @vitejs/plugin-react -D