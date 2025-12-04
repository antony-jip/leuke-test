# CLAUDE.md

This file provides guidance for AI assistants (like Claude) working with this repository.

## Repository Overview

**leuke-test** is a new repository configured with Claude Code integration for AI-assisted development. The repository is currently in its initial state with minimal content.

### Current Structure

```
leuke-test/
├── .github/
│   └── workflows/
│       └── claude.yml    # Claude Code GitHub Action
└── CLAUDE.md             # This file
```

## Claude Code Integration

This repository uses the [Claude Code GitHub Action](https://github.com/anthropics/claude-code-action) to enable AI-assisted development through GitHub issues and pull requests.

### How It Works

- **Trigger**: Mention `@claude` in any issue comment or PR review comment
- **Capabilities**: Claude can read code, suggest changes, create commits, and respond to questions
- **Permissions**: The action has write access to contents, pull requests, and issues

### Workflow Configuration

The Claude Code action is configured in `.github/workflows/claude.yml` and triggers on:
- Issue comments (when `@claude` is mentioned)
- Pull request review comments (when `@claude` is mentioned)

## Development Guidelines

### For AI Assistants

When working on this repository:

1. **Read Before Modifying**: Always read and understand existing files before making changes
2. **Minimal Changes**: Make only the changes necessary to complete the requested task
3. **Clear Commits**: Use descriptive commit messages that explain what was changed and why
4. **No Over-Engineering**: Avoid adding features, abstractions, or "improvements" beyond what was requested
5. **Security First**: Never introduce security vulnerabilities (XSS, injection, etc.)

### Branch Strategy

- Develop on feature branches prefixed with `claude/` when working via the Claude Code action
- Push changes to the designated branch before creating pull requests
- Use clear, descriptive branch names

### Commit Message Format

Follow this format for commit messages:
```
<type>: <short description>

[optional longer description]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `refactor`: Code refactoring

## Future Development

As this repository grows, update this file to include:

- **Build Commands**: How to build, test, and run the project
- **Code Style**: Linting and formatting rules
- **Testing**: How to run tests and testing conventions
- **Dependencies**: Key dependencies and how to install them
- **Architecture**: High-level architecture decisions

## Quick Reference

| Action | Command/Info |
|--------|--------------|
| Invoke Claude | Mention `@claude` in issue/PR comments |
| Main Branch | Check repository settings |
| CI/CD | GitHub Actions |

---

*Last updated: December 2024*
