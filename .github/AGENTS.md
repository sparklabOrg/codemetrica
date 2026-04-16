## Overview

Codemetrica is a code analysis tool that:
* Computes code metrics
* Detects code smells
* Supports multiple languages using shared, language-agnostic logic where possible

## Feature Source
All features (metrics, smells, etc.) are listed in:
website/

Refer to the tables there for what needs to be implemented.

## Workflow

For each feature:

* Write tests first
    * Cover normal and edge cases
    * Define expected behavior clearly
* Implement
    * Use Tree-sitter
    * Keep logic generic and reusable
* Update docs
    * Mark the feature as complete in website/
* Work on one feature at a time

## Guidelines

* Prefer reusable, language-agnostic designs
* Avoid duplication across languages
* Keep parsing and analysis separate
* Use appropriate design patterns when helpful
* Prioritize correctness (tests must pass)

## Expectations
* No implementation without tests
* No skipping documentation updates
* Keep code simple, clean, and consistent