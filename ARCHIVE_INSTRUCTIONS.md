# Compressed Archive Configuration

## Como criar TAR e ZIP do projeto

### Criar arquivo TAR.GZ
```bash
tar -czf joke-generator-v1.0.0.tar.gz \
  index.js \
  jokeService.js \
  package.json \
  README_JOKE_GENERATOR.md \
  .gitignore
```

### Criar arquivo ZIP
```bash
zip -r joke-generator-v1.0.0.zip \
  index.js \
  jokeService.js \
  package.json \
  README_JOKE_GENERATOR.md \
  .gitignore
```

## Conteúdo dos arquivos

O arquivo compactado contém:

```
joke-generator-v1.0.0/
├── index.js                    (Servidor Express)
├── jokeService.js             (Serviço de API)
├── package.json               (Dependências)
├── README_JOKE_GENERATOR.md   (Documentação)
└── .gitignore                 (Arquivos ignorados)
```

## Instruções de extração

### De TAR.GZ:
```bash
tar -xzf joke-generator-v1.0.0.tar.gz
cd joke-generator-v1.0.0
npm install
npm start
```

### De ZIP:
```bash
unzip joke-generator-v1.0.0.zip
cd joke-generator-v1.0.0
npm install
npm start
```

## Tamanho aproximado

- **TAR.GZ**: ~2-3 KB (comprimido)
- **ZIP**: ~3-4 KB (comprimido)

## Para fazer upload no GitHub Releases

1. Acesse: https://github.com/BrazilParadise/Brazil-Paradise/releases
2. Clique em "Create a new release"
3. Tag version: `v1.0.0`
4. Faça upload dos arquivos TAR.GZ e ZIP
5. Publique a release
