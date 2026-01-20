import fs from "node:fs";
import path from "node:path";

const postsDir = path.join(process.cwd(), "content", "posts");
fs.mkdirSync(postsDir, { recursive: true });

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const date = `${yyyy}-${mm}-${dd}`;

// slug simples
const slug = `${date}-conteudo-informativo`;
const file = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(file)) {
  console.log("Post already exists:", file);
  process.exit(0);
}

const title = "Conteúdo informativo: orientações gerais";
const content = `---
title: "${title}"
date: "${date}"
tags: ["Informativo"]
excerpt: "Conteúdo de caráter informativo. Cada caso exige análise individualizada."
---

> Conteúdo de caráter informativo. Não substitui consulta jurídica. Não há promessa de resultado.

## Tema do dia
Escreva aqui uma orientação objetiva e educativa (sem captação, sem promessa, sem comparação).

## Pontos de atenção
- Ponto 1
- Ponto 2
- Ponto 3

## Encerramento
Se precisar, busque orientação jurídica adequada ao seu caso.
`;

fs.writeFileSync(file, content, "utf8");
console.log("Created:", file);
