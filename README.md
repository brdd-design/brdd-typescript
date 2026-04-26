# 📜 @brdd-design/core

[![NPM](https://img.shields.io/npm/v/@brdd-design/core?label=npm)](https://www.npmjs.com/package/@brdd-design/core)

Minimalist BRDD implementation for Node.js, NestJS, and Frontend applications.

## 🚀 Installation

```bash
npm install @brdd-design/core
```

## 🛠 Usage

```typescript
import { ExecutionContext, DefaultExecutionContext } from '@brdd-design/core';

// In your UseCase
async execute(data: any): Promise<ExecutionContext> {
    const context = new DefaultExecutionContext(data);
    // ... logic
    context.addEffect('EFF_SYNC_USER');
    return context;
}
```

## 🤖 AI-First Development
This library is designed for AI-driven development. Check the [AI Guidelines](./AI_GUIDELINES.md) for more details.

## 📚 Documentation
- [Technical Spec](https://github.com/brdd-design/brdd/blob/main/BRDD.md)
- [Practical Example](https://github.com/brdd-design/brdd/blob/main/core/articles/EN/BRDD-PRACTICAL-EXAMPLE.md)

## 📄 License
MIT
