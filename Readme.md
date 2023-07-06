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
}