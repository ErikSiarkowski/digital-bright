# Agência de Marketing e Desenvolvimento Web

Este é um site moderno para uma agência de marketing e desenvolvimento web, construído com Next.js, TypeScript e Tailwind CSS.

## Características

- Design moderno e responsivo
- Suporte a múltiplos idiomas (Português e Inglês)
- Seções principais:
  - Hero
  - Portfólio
  - Clientes
  - FAQ
  - Footer
- Integração com Tabler Icons
- Animações suaves com Framer Motion

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- i18next
- Tabler Icons
- Framer Motion

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
src/
  ├── app/              # Páginas da aplicação
  ├── components/       # Componentes reutilizáveis
  ├── i18n/            # Configuração e arquivos de tradução
  └── styles/          # Estilos globais
```

## Personalização

### Cores

As cores principais do site podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: '#00747C',
  secondary: '#F7F9FA',
  tertiary: '#2E2E2E',
}
```

### Traduções

Os arquivos de tradução estão localizados em `src/i18n/locales/`:
- `pt.json` - Traduções em português
- `en.json` - Traduções em inglês

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
