# makethenews

News generator.



## Development

Languages and tools are installed via [mise][mise].

Install mise.

```bash
curl https://mise.run | sh
```

Install requirements with mise.

```bash
mise install
```

Install requirements.

The `--force` flag is required since some packages don't officially support Svelte 5.  
This can be removed when Svelte 5 is released and supported.

```bash
npm i --force
```

Run dev server.

```bash
just
```

Lint.

```bash
just lint
```

Format code.

```bash
just fmt
```

Build production build.

```bash
just build
```

Preview production build.

```bash
just preview
```



[mise]: https://github.com/jdx/mise
